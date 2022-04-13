## Getting Started

1️⃣ First, install the dependencies:

```bash
npm install
```

2️⃣ Also, install nodemon, if is not installed globally

```bash
sudo npm install -g nodemon
```

3️⃣ Set, up environmnent variables

```
touch .env
```

4️⃣ Add ZOOM_CLIENT_SECRET and ZOOM_CLIENT_ID to .env file (client secret can be found in App Credentials of your Zoom App).

Also add desired port which is configured with ngrok.

```
ZOOM_CLIENT_ID=SOME_ID
ZOOM_CLIENT_SECRET=DONT_USE_THIS_SECRET_OR_YOU_WILL_BE_FIRED
PORT=8888
```

5️⃣ Start the server and test it on http://localhost:8888/

```
npm run dev
```

6️⃣ Open ngrok tunnel on the above-configured PORT

```
ngrok http 8888
or
ngork start ...
```
