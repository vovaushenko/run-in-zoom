const endpoints = {
	UNAUTHORIZED_REDIRECT: `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.ZOOM_CLIENT_ID}&redirect_uri=${process.env.BASE_URL}/api/oauth`,
	DEEP_LINK_URL: `${process.env.ZOOM_API}/zoomapp/deeplink/`,
	REDIRECT_URL: `${process.env.BASE_URL}/api/install`,
	OAUTH_URL: (code) =>
		`${process.env.ZOOM_URL}/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${endpoints.REDIRECT_URL}`,

	REFRESH_TOKEN_URL: (refreshToken) =>
		`${process.env.ZOOM_URL}/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
};

export default endpoints;
