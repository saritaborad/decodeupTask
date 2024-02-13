"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventModel_1 = __importDefault(require("../models/EventModel"));
const res_help_1 = require("../utils/res_help");
const moment_1 = __importDefault(require("moment"));
const addEvent = (0, res_help_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventDate, eventLocation, eventDescription, eventTitle, eventName } = req.body;
        const dateFormat = 'DD-MM-YYYY';
        const parsedDate = (0, moment_1.default)(eventDate, dateFormat).toDate();
        console.log(parsedDate);
        const images = req.files.map((file) => file.filename);
        const event = new EventModel_1.default({ images, eventDate: parsedDate, eventLocation, eventDescription, eventTitle, eventName });
        yield event.save();
        return (0, res_help_1.giveresponse)(res, 200, true, "Event added successfully!");
    }
    catch (error) {
        return (0, res_help_1.giveresponse)(res, 500, false, error.message);
    }
}));
exports.default = addEvent;
