"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveresponse = exports.asyncHandler = void 0;
const giveresponse = (res, status_code, success, message, data = null) => {
    const jsonData = { status: status_code, success, message, data: data !== null && data !== void 0 ? data : {} };
    return res.status(status_code).json(jsonData);
};
exports.giveresponse = giveresponse;
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.asyncHandler = asyncHandler;
