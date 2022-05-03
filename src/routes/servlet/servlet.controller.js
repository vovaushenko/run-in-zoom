import generateFakeJwt from '../../utils/generateJwt.util.js';

const getTokenAndRedirect = (req, res) => {
	const fakeJwtToken = generateFakeJwt();
	const redirectUrlWithToken = `${process.env.ZOOM_CLIENT_REDIRECT}#${fakeJwtToken}`;
	res.redirect(redirectUrlWithToken);
};

const servletController = {
	getTokenAndRedirect,
};

export default servletController;
