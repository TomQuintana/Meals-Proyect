import { Request, Response } from 'express';

class ErrorHandler {
  static sendError(res: Response, statusCode: number, message: string) {
    res.status(statusCode).json({ error: message });
  }

  static badRequest(res: Response, message = 'Solicitud incorrecta') {
    this.sendError(res, 400, message);
  }
  
}

export default ErrorHandler;
