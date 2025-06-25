import mongoose, { Document, Schema, Model } from "mongoose";

export interface IVisitorCounter extends Document {
  _id: string;
  count: number;
  lastUpdated: Date;
}

const visitorCounterSchema = new Schema<IVisitorCounter>({
  _id: {
    type: String,
    default: "visitor_count",
  },
  count: {
    type: Number,
    default: 1247, // Your starting count
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const VisitorCounter: Model<IVisitorCounter> =
  mongoose.models.VisitorCounter ||
  mongoose.model<IVisitorCounter>("VisitorCounter", visitorCounterSchema);

export default VisitorCounter;
