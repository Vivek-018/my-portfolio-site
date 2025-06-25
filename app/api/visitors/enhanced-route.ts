// import { type NextRequest, NextResponse } from "next/server"

// // Example using a simple JSON file storage
// // In production, use a proper database like MongoDB, PostgreSQL, etc.

// interface VisitorData {
//   count: number
//   lastUpdated: string
//   dailyVisits: { [date: string]: number }
// }

// // This would be replaced with actual database operations
// const getVisitorData = async (): Promise<VisitorData> => {
//   // Simulate database read
//   // In real implementation, read from your database
//   return {
//     count: 1247,
//     lastUpdated: new Date().toISOString(),
//     dailyVisits: {},
//   }
// }

// const updateVisitorData = async (data: VisitorData): Promise<void> => {
//   // Simulate database write
//   // In real implementation, write to your database
//   console.log("Updating visitor data:", data)
// }

// export async function POST(request: NextRequest) {
//   try {
//     const visitorData = await getVisitorData()

//     // Get client information
//     const forwarded = request.headers.get("x-forwarded-for")
//     const ip = forwarded ? forwarded.split(",")[0] : "unknown"

//     // Simple rate limiting - one count per IP per hour
//     const currentHour = new Date().toISOString().slice(0, 13)
//     const today = new Date().toISOString().slice(0, 10)

//     // Increment counters
//     visitorData.count++
//     visitorData.dailyVisits[today] = (visitorData.dailyVisits[today] || 0) + 1
//     visitorData.lastUpdated = new Date().toISOString()

//     await updateVisitorData(visitorData)

//     return NextResponse.json({
//       count: visitorData.count,
//       todayCount: visitorData.dailyVisits[today],
//       success: true,
//     })
//   } catch (error) {
//     console.error("Error tracking visitor:", error)
//     return NextResponse.json({ error: "Failed to track visitor" }, { status: 500 })
//   }
// }



// route.ts code dump code 

// import { type NextRequest, NextResponse } from "next/server"

// // In a real application, you would use a database
// // For this example, we'll use a simple in-memory counter
// // In production, consider using Redis, MongoDB, or any other database

// let visitorCount = 1247 // Starting count

// // Simple in-memory storage (resets on server restart)
// // In production, use a persistent database
// const visitors = new Set<string>()

// export async function POST(request: NextRequest) {
//   try {
//     // Get client IP address for unique visitor tracking
//     const forwarded = request.headers.get("x-forwarded-for")
//     const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown"

//     // Get user agent for additional uniqueness
//     const userAgent = request.headers.get("user-agent") || ""

//     // Create a unique identifier
//     const visitorId = `${ip}-${userAgent.slice(0, 50)}`

//     // Check if this is a new visitor (in the last hour)
//     const now = Date.now()
//     const visitorKey = `${visitorId}-${Math.floor(now / (1000 * 60 * 60))}` // Hour-based uniqueness

//     if (!visitors.has(visitorKey)) {
//       visitors.add(visitorKey)
//       visitorCount++

//       // Clean up old entries (keep only last 24 hours)
//       const cutoff = Math.floor(now / (1000 * 60 * 60)) - 24
//       for (const key of visitors) {
//         const keyTime = Number.parseInt(key.split("-").pop() || "0")
//         if (keyTime < cutoff) {
//           visitors.delete(key)
//         }
//       }
//     }

//     return NextResponse.json({
//       count: visitorCount,
//       success: true,
//     })
//   } catch (error) {
//     console.error("Error tracking visitor:", error)
//     return NextResponse.json({ error: "Failed to track visitor" }, { status: 500 })
//   }
// }

// export async function GET() {
//   try {
//     return NextResponse.json({
//       count: visitorCount,
//       success: true,
//     })
//   } catch (error) {
//     console.error("Error getting visitor count:", error)
//     return NextResponse.json({ error: "Failed to get visitor count" }, { status: 500 })
//   }
// }