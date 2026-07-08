# Deploying Reddomo to reddomo.com

The site is 100% static files — no build step, no server. Host it free on **Cloudflare Pages**.

## Fastest way (no tools needed): drag-and-drop

1. Go to the **Cloudflare dashboard** → **Workers & Pages** → **Create** → **Pages** tab → **Upload assets**.
2. Project name: **reddomo** → Create.
3. Drag the **entire contents of this folder** (`index.html`, `about.html`, `game.html`, and the `css`, `js`, `assets`, `games` folders, plus `robots.txt`, `sitemap.xml`, `manifest.webmanifest`) into the upload box. *(Drag the files/folders themselves — not a zip.)*
4. Click **Deploy**. In ~30 seconds the site is live at **reddomo.pages.dev**.

### Point reddomo.com at it
5. In the new Pages project → **Custom domains** tab → **Set up a custom domain** → enter `reddomo.com`.
   - **If reddomo.com is on Cloudflare** (registered at Cloudflare Registrar, or added as a site): it's one click — Cloudflare creates the DNS record automatically. Also add `www.reddomo.com` the same way.
   - **If registered elsewhere** (Porkbun, Namecheap, etc.): first add reddomo.com as a site in Cloudflare (free plan) and change the domain's **nameservers** at your registrar to the two Cloudflare gives you. Once it shows "active," repeat step 5.
6. HTTPS is automatic. Done.

## To update the site later
Re-open the Pages project → **Create deployment** → drag the updated files again. (Or set up the Git workflow below so it auto-deploys.)

## Optional: auto-deploy on every change (Git)
1. Put this folder in a **GitHub** repo (needs git + a GitHub account).
2. Cloudflare Pages → Create → Pages → **Connect to Git** → pick the repo.
3. Build command: *(none)*. Output directory: `/`.
4. Now every `git push` redeploys automatically.

## Notes
- Two games (Minecraft Classic, A Dark Room) load from their official sites, so they need internet — everything else is fully self-hosted.
- The neutral title + panic button are intentional (see the site). Keep the domain off public "unblocked" lists to stay unblocked longer.
