// Player page: read ?id=, look it up, load the game into the iframe.
(function () {
  const id = new URLSearchParams(location.search).get("id");
  const game = CATALOG.find((g) => g.id === id);

  const catEl = document.getElementById("game-cat");
  const titleEl = document.getElementById("game-title");
  const blurbEl = document.getElementById("game-blurb");
  const tipEl = document.getElementById("game-tip");
  const frame = document.getElementById("game-frame");
  const frameWrap = document.getElementById("player-frame");
  const missing = document.getElementById("game-missing");
  const fsBtn = document.getElementById("fullscreen");

  // "link" games can't be framed — they should never reach here, but if they do, bounce out.
  if (game && game.type === "link") { location.replace(game.src); return; }

  if (!game) {
    titleEl.textContent = "Not found";
    frameWrap.hidden = true;
    fsBtn.hidden = true;
    missing.hidden = false;
    return;
  }

  document.title = game.title + " · Reddomo";
  catEl.textContent = game.cat;
  titleEl.textContent = game.title;
  blurbEl.textContent = game.blurb || "";
  frame.src = game.type === "embed" ? game.src : `games/${game.id}/index.html?v=26`;
  if (game.type === "embed") tipEl.textContent = "Loaded from the game's official free site.";

  fsBtn.addEventListener("click", () => {
    const el = frameWrap;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  });
})();
