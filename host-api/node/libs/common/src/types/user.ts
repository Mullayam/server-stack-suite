import 'passport';

declare global {
  namespace Express {
    interface Request {
      authInfo?: AuthInfo | undefined;
      user?: User | undefined;
    }
  
  }
}
interface User extends Request {
  id: string
  username: string
  name: string
  status: boolean
  isfirstlogin: boolean
  role: string
  token: string
  [key: string]: any;
}
export type IUser = User

