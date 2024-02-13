import mongoose, { Schema, Document } from "mongoose";

export interface Event extends Document {
  eventName: string;
  eventTitle: string;
  eventDescription: string;
  eventLocation: string;
  eventDate: Date;
  images: string[];
}

const eventSchema: Schema = new Schema({
  eventName: { type: String, required: true },
  eventTitle: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventLocation: { type: String, required: true },
  eventDate: { type: Date, required: true },
  images: [{ type: String, required: true }],
});

const EventModel = mongoose.model<Event>("Event", eventSchema);

export default EventModel;
