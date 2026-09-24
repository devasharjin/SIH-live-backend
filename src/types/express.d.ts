import "express";
import { JwtPayload } from "jsonwebtoken";
import { UserRole } from "../models/auth/user.model";

export interface UserPayload extends JwtPayload {
  _id?: string;
  userId?: string;
  id?: string;
  email?: string;
  name?: string;
  role?: UserRole[] | string[] | UserRole | string;
  phone?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}