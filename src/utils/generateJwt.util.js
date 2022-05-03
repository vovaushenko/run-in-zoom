const randomChunk = () => Math.random().toString(36).slice(2);

const generateFakeJwt = () =>
	Array.from({ length: 25 }, () => randomChunk()).join('');

export default generateFakeJwt;
