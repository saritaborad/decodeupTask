import { Request, Response, NextFunction } from "express";

const giveresponse = (res: Response, status_code: number, success: boolean, message: string, data: any = null): Response => {
  const jsonData = { status: status_code, success, message, data: data ?? {} };
  return res.status(status_code).json(jsonData);
};

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction): void => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export { asyncHandler, giveresponse };
