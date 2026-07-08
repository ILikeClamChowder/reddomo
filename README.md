# TripleReddd

A static, self-hosted browser-games site. No build step, no framework — just HTML/CSS/JS.

## Run locally

From this folder:

```
python -m http.server 8000
```

Then open http://localhost:8000

## Add a game

1. **Self-hosted game** (recommended):
   - Make a folder `games/<id>/` with an `index.html` that IS the game.
   - Add an entry to `js/catalog.js`:
     ```js
     { id: "<id>", title: "My Game", tags: ["puzzle"], type: "self", color: "#e23b3b", desc: "..." }
     ```
   - Only use games whose license allows redistribution (MIT/GPL/CC/public-domain,
     or your own code). Good sources: open-source HTML5 games on GitHub, free
     itch.io games where the author allows web hosting.

2. **Embedded game** (fallback):
   ```js
   { id: "<id>", title: "My Game", tags: ["arcade"], type: "embed", src: "https://host/game/", color: "#1b8f5a" }
   ```
   Note: embeds break when the other host goes down.

Thumbnails: drop an image in `assets/thumbs/` and set `thumb: "assets/thumbs/foo.png"`.
Leave `thumb` blank to get an auto-generated colored tile.

## Deploy (Cloudflare Pages — free)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build command: *(none)*. Output directory: `/` (root).
4. Add your custom domain under the project's **Custom domains** tab.

Any static host works the same way (Netlify, GitHub Pages, etc.) since there's no backend.

## Structure

```
index.html      home + game grid
game.html       the player (loads a game by ?id=)
about.html
css/styles.css
js/catalog.js   << the game list — edit this to add games
js/main.js      grid + search
js/player.js    loads the selected game into the iframe
games/<id>/     each self-hosted game
assets/         favicon, thumbnails
```
