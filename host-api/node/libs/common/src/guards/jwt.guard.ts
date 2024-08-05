import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IUser } from '../types/user';

export const IS_PUBLIC_KEY = 'isPublic';
export const DBSTORE = new Map<string, any>()
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) return true;
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);        
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload :IUser= await this.jwtService.verifyAsync(token, { secret: "test" });
            request['user'] = payload as IUser;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}