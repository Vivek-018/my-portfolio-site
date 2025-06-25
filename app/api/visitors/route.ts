import { type NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Visitor, { IVisitor } from "@/models/Visitor";
import VisitorCounter, { IVisitorCounter } from "@/models/VisitorCounter";
import { processVisitorRequest, sanitizeUserAgent } from "@/lib/visitorUtils";
import { VisitorResponse, VisitorErrorResponse } from "@/types/visitor";

export async function POST(
  request: NextRequest
): Promise<NextResponse<VisitorResponse | VisitorErrorResponse>> {
  try {
    await connectDB();

    const { ip, userAgent, currentHour, visitorKey } =
      processVisitorRequest(request);

    const sanitizedUserAgent = sanitizeUserAgent(userAgent);

    // Check if visitor already exists for this hour
    const existingVisitor: IVisitor | null = await Visitor.findOne({
      visitorId: visitorKey,
    });

    let visitorCount: number;

    if (!existingVisitor) {
      // New visitor - create record
      const newVisitor: IVisitor = await Visitor.create({
        visitorId: visitorKey,
        ip: ip,
        userAgent: sanitizedUserAgent,
        hourKey: currentHour,
      });

      console.log(`New visitor tracked: ${newVisitor.visitorId}`);

      // Increment global counter using findOneAndUpdate with atomic operation
      const counter: IVisitorCounter | null =
        await VisitorCounter.findOneAndUpdate(
          { _id: "visitor_count" },
          {
            $inc: { count: 1 },
            $set: { lastUpdated: new Date() },
          },
          {
            upsert: true,
            new: true,
          }
        );

      visitorCount = counter?.count || 1247;

      // Clean up old entries (older than 24 hours) - run in background
      const cutoffHour = currentHour - 24;
      Visitor.deleteMany({
        hourKey: { $lt: cutoffHour },
      }).catch((error) => {
        console.error("Error cleaning up old visitor records:", error);
      });
    } else {
      console.log(`Existing visitor: ${existingVisitor.visitorId}`);

      // Existing visitor - just return current count
      const counter: IVisitorCounter | null = await VisitorCounter.findOne({
        _id: "visitor_count",
      });
      visitorCount = counter?.count || 1247;
    }

    const response: VisitorResponse = {
      count: visitorCount,
      success: true,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error tracking visitor:", error);

    const errorResponse: VisitorErrorResponse = {
      error: "Failed to track visitor",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function GET(): Promise<
  NextResponse<VisitorResponse | VisitorErrorResponse>
> {
  try {
    await connectDB();

    // Get current visitor count
    const counter: IVisitorCounter | null = await VisitorCounter.findOne({
      _id: "visitor_count",
    });

    const visitorCount: number = counter?.count || 100;

    const response: VisitorResponse = {
      count: visitorCount,
      success: true,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting visitor count:", error);

    const errorResponse: VisitorErrorResponse = {
      error: "Failed to get visitor count",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * Optional: DELETE endpoint to reset visitor count (for admin use)
 */

// export async function DELETE(): Promise<
//   NextResponse<VisitorResponse | VisitorErrorResponse>
// > {
//   try {

//     await connectDB();

//     // Reset counter
//     await VisitorCounter.findOneAndUpdate(
//       { _id: "visitor_count" },
//       {
//         count: 0,
//         lastUpdated: new Date(),
//       },
//       { upsert: true }
//     );

//     // Clear all visitor records
//     await Visitor.deleteMany({});

//     const response: VisitorResponse = {
//       count: 0,
//       success: true,
//     };

//     return NextResponse.json(response);
//   } catch (error) {
//     console.error("Error resetting visitor count:", error);

//     const errorResponse: VisitorErrorResponse = {
//       error: "Failed to reset visitor count",
//     };

//     return NextResponse.json(errorResponse, { status: 500 });
//   }
// }
