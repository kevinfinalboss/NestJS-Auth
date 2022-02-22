import { User } from '@prisma/client';

export interface authRequest extends Request {
  user: User;
}
