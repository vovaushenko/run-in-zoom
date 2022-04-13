import http from 'http';
import app from './app.js';
import config from './config/config.js';

const { PORT } = config;

const server = http.createServer(app);

(async function startServer() {
	server.listen(PORT, () => {
		console.log(`💻 \x1b[33mServer started on port \x1b[31m${PORT}`);
	});
})();
