const addOWASPheaders = (_req, res, next) => {
	res.set({
		'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
		'X-Content-Type-Options': 'nosniff',
		'Content-Security-Policy': '',
		'Referrer-Policy': 'same-origin',
	});
	next();
};

export default addOWASPheaders;
