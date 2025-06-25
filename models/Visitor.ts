import mongoose, { Document, Schema, Model } from "mongoose";

export interface IVisitor extends Document {
  visitorId: string;
  ip: string;
  userAgent: string;
  timestamp: Date;
  hourKey: number;
}

const visitorSchema = new Schema<IVisitor>({
  visitorId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  ip: {
    type: String,
    required: true,
  },
  userAgent: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    expires: 86400, // Auto-delete after 24 hours (24 * 60 * 60 seconds)
  },
  hourKey: {
    type: Number,
    required: true,
    index: true,
  },
});

visitorSchema.index({ visitorId: 1, hourKey: 1 });

const Visitor: Model<IVisitor> =
  mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", visitorSchema);

export default Visitor;
