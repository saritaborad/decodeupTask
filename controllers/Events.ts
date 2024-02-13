import { RequestHandler } from "express";
import EventModel, { Event } from "../models/EventModel";
import { asyncHandler, giveresponse } from "../utils/res_help";
import moment from "moment";

const addEvent: RequestHandler = asyncHandler(async (req, res, next) => {
  try {
    const { eventDate, eventLocation, eventDescription, eventTitle, eventName } = req.body;
    const dateFormat: string = 'DD-MM-YYYY';
   const parsedDate: Date = moment.utc(eventDate,dateFormat).toDate();
    const images = (req.files as Express.Multer.File[]).map(
        (file) => file.filename
      );
    const event: Event = new EventModel({ images, eventDate:parsedDate, eventLocation, eventDescription, eventTitle, eventName });
    await event.save();
    return giveresponse(res, 200, true, "Event added successfully!");
    
  } catch (error:any) {
    return giveresponse(res, 500, false, (error as Error).message);
    
  }
});

export default addEvent;
