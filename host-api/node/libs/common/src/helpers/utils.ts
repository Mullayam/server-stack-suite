import { createCipheriv, createHash, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { Injectable } from "@nestjs/common";
import moment from 'moment';
@Injectable()
export class Utils {


    async generateRandomToken(id: string): Promise<string> {
        const iv = randomBytes(16);
        const SECRET = '!@@#$%^&*()_+';
        const key = (await promisify(scrypt)(SECRET, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);
        const encrypted = Buffer.concat([
            cipher.update(id),
            cipher.final(),
        ]);
        return encrypted.toString()
    }
    createOTP(min: number = 100000, max: number = 999999): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /**
     * Converts a query string to an object.
     *
     * @param {string} query - The query string to convert.
     * @return {object} The resulting object.
     */
    queryToObject(query: string): object {
        let NewObject = {};
        query.split("&").map((item) => {
            const [key, value] = item.split("=");
            Object.assign(NewObject, Object.fromEntries([[key, value]]));
            return Object.fromEntries([[key, value]]);
        });

        return NewObject;
    }
    /**
     * Converts a string representation of a date word into a formatted date string.
     *
     * @param {string} str - The string representation of the date word.
     * @return {string} - The formatted date string.
     */
    convertDateWordsToDate(str: string): string {
        let newDate;
        if (str === "Latest") {
            newDate = moment().subtract(10, "minutes").toDate();
        } else if (str === "LastHour") {
            newDate = moment().subtract(1, "hour").toDate();
        } else if (str === "Last24hour") {
            newDate = moment().subtract(24, "hour").toDate();
        } else {
            const number = str.replace(/[^0-9]/g, "");
            newDate = moment().subtract(number, `days`).toDate();
        }

        const date = this.simpleDateStr(newDate);
        return date;
    }
    /**
     * Generates a string representation of a date.
     *
     * @param {Date} newDate - The date to convert to a string. Defaults to the current date.
     * @return {string} The string representation of the date.
     */
    simpleDateStr(newDate: Date = new Date()): string {
        const newDateStr = newDate.toISOString().split("T");
        const date = (newDateStr[0] + " " + newDateStr[1].split(".")[0])
            .trim()
            .toString();

        return date;
    }

    /**
     * Generates the keys and values of an object.
     *
     * @param {string} obj - the object to generate keys and values for
     * @return {string[]} an array containing the keys and values of the object
     */
    objectKeysAndValues(obj: string): string[] {
        let keys = Object.keys(JSON.parse(obj));
        const PureObject = keys.map((key) => {
            return JSON.parse(JSON.parse(obj)[key]);
        });
        return PureObject;
    }
    /**
     * Formats the salary to a string with comma-separated thousands and no decimal places.
     *
     * @param {number} salary - The salary to be formatted.
     * @return {string} - The formatted salary as a string.
     */
    indianNumberFormat(salary: number): string {
        return salary.toLocaleString("en-IN", { maximumFractionDigits: 0 });
    }

    /**
     * Slugify a given string.
     *
     * @param {string} str - The string to be slugified.
     * @return {string} The slugified string.
     */
    slugify(str: string): string {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
    uuid_v4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }
    Md5Checksum(content: string): string {
        return createHash("md5").update(content).digest("hex");
    }

    SimpleHash(): string {
        return randomBytes(32).toString("hex");
    }
    async generateRandomBytes(): Promise<string> {
        return randomBytes(32).toString('hex')
    }

    randomToken(length: number = 64): string {
        return randomBytes(length).toString("hex");
    }
    /**
     * Generates a random number within a specified range.
     *
     * @param {number} min - The minimum value of the range (default: 100000).
     * @param {number} max - The maximum value of the range (default: 999999).
     * @return {number} - The randomly generated number.
     */
    randomNumber(min: number = 100000, max: number = 999999): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /**
     * Generates a unique user ID.
     *
     * @return {string} The generated user ID.
     */
    createUserID(): string {
        const id = Math.floor(Math.random() * 10000000).toString();
        return id;
    }
    /**
    * Generates a token of random bytes with the specified byte length.
    *
    * @param {number} byteLength - The length of the token in bytes. Defaults to 48.
    * @return {string} - The generated token as a base64-encoded string.
    */
    generateToken(byteLength: number = 48): string {
        return randomBytes(byteLength).toString("base64");
    }
    /**
     * Generates a refresh token of a specified length.
     *
     * @param {number} byteLength - The length of the refresh token in bytes. Defaults to 32.
     * @return {string} - The generated refresh token.
     */
    createRefreshToken(byteLength: number = 32): string {
        return randomBytes(byteLength).toString("base64");
    }
    /**
     * Generates a random request ID with the specified byte length.
     *
     * @param {number} byteLength - The length of the byte array used to generate the request ID. Defaults to 16.
     * @return {string} - The generated request ID as a base64 encoded string.
     */
    RequestId(byteLength: number = 16): string {
        return randomBytes(byteLength).toString("hex");
    }
}