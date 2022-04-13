export const unpack = (context) => {
	// Decode base64
	let buf = Buffer.from(context, 'base64');

	// Get iv length (1 byte)
	const ivLength = buf.readUInt8();
	buf = buf.slice(1);

	// Get iv
	const iv = buf.slice(0, ivLength);
	buf = buf.slice(ivLength);

	// Get aad length (2 bytes)
	const aadLength = buf.readUInt16LE();
	buf = buf.slice(2);

	// Get aad
	const aad = buf.slice(0, aadLength);
	buf = buf.slice(aadLength);

	// Get cipher length (4 bytes)
	const cipherLength = buf.readInt32LE();
	buf = buf.slice(4);

	// Get cipherText
	const cipherText = buf.slice(0, cipherLength);

	// Get tag
	const tag = buf.slice(cipherLength);

	return {
		iv,
		aad,
		cipherText,
		tag,
	};
};
