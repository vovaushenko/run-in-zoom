import crypto from 'crypto';
import { unpack } from './unpack.js';

export const decrypt = (context, secret) => {
	const { iv, aad, cipherText, tag } = unpack(context);
	const decipher = crypto
		.createDecipheriv(
			'aes-256-gcm',
			crypto.createHash('sha256').update(secret).digest(),
			iv
		)
		.setAAD(aad)
		.setAuthTag(tag)
		.setAutoPadding(false);

	const decrypted = decipher.update(cipherText) + decipher.final();

	return JSON.parse(decrypted);
};
