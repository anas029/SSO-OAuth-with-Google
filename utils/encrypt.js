import crypto from "crypto";
import { ENCRYPTION_KEY } from "../configs/env.js";

const generateIV = () => {
    return crypto.randomBytes(16);
}

export const encrypt = (key) => {
    const iv = generateIV();
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);

    let encrypted = cipher.update(key);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return {
        iv: iv.toString('hex'),
        data: encrypted.toString('hex')
    };
}

export const decrypt = (data, iv) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(iv, 'hex'));

    let decrypted = decipher.update(Buffer.from(data, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}