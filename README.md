# localConfig Test API

This is a **connectivity test server**, not an account-unban service.

## Deploy on Render
1. Create a new Git repository and upload `server.js`, `package.json`, and this README.
2. On Render, create a **Web Service** connected to that repository.
3. Set Build Command to `npm install`.
4. Set Start Command to `npm start`.
5. Deploy. Render will provide your own HTTPS address, such as `https://your-service.onrender.com`.

## Test
Open `https://YOUR-HOST/` and then:
`https://YOUR-HOST/id?unben=test`

The `/id` route returns JSON confirming that the endpoint was reached. It does not perform any unban operation.

## Config template
After deployment, replace `YOUR-HOST` with the exact host Render gives you. Keep any real token private.
