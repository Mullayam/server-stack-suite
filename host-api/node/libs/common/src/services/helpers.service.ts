import { Injectable } from '@nestjs/common';
import { AES, enc } from 'crypto-js'
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto'
import { CONFIG } from '../constants';
 

@Injectable()
export class Helpers {
    constructor(private readonly jwtService: JwtService) { }
    AESCipher() {
        const encrypt = (data: any) => {
            if (typeof data === "object") {
                data = JSON.stringify(data);
                
            }
            return AES.encrypt(data, CONFIG.ENCRYPTION_KEY).toString();
        }
        const decrypt = (encryptedData: string) => {
            return AES.decrypt(encryptedData, CONFIG.ENCRYPTION_KEY).toString(enc.Utf8)
        }

        return { encrypt, decrypt }
    }
    async generateJWTToken(payload: Record<string, any>): Promise<string> {
        return this.jwtService.sign(payload, { expiresIn: CONFIG.APP.SECRETS.JWT_SECRET_EXPIRATION, issuer: "Saveit India Pvt. Ltd." })
    }
    async jwtDecode(token: string): Promise<Record<string, any>> {
        return this.jwtService.decode(token) as Record<string, any>
    }
    async hashPassword(password: string): Promise<string> {

        return await bcrypt.hash(password, 10);
    }
    cryptoHash() {
        return crypto
    }
    async verifyPassword(password: string, hashPassword: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hashPassword);
        return isMatch
    }
    slugify(str: string) {
        return str.replace(/^\s+|\s+$/g, '') // trim leading/trailing white space
            .toLowerCase() // convert string to lowercase
            // .replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
            .replace(/\s+/g, '-') // replace spaces with hyphens
            .replace(/-+/g, '-');
    }
}