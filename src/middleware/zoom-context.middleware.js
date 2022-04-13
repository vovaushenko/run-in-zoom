import config from '../config/config.js';
import { decrypt } from '../utils/decrypt.js';
import { getZoomCallContext } from '../utils/get-zoom-call-context.js';
import { inZoomCallContext } from '../utils/is-in-zoom-call.js';

const parseZoomContext = (req, res, next) => {
	if (inZoomCallContext(req)) {
		const zoomAppContext = getZoomCallContext(req.headers);
		console.log({ zoomAppContext, secret: config.ZOOM_CLIENT_SECRET });
		const decryptedContext = decrypt(zoomAppContext, config.ZOOM_CLIENT_SECRET);
		console.log(
			`\x1b[31m Zoom app runs in ${decryptedContext.typ} mode. User Id is ${decryptedContext.uid}. Below is the full context.\n`
		);
		console.log(`\x1b[36m  ============= Decrypted context  =============`);
		console.log({ decryptedAppContext: JSON.stringify(decryptedContext) });
	}
	return next();
};

export default parseZoomContext;
