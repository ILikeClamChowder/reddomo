// ============================================================
//  Reddomo game catalog
//  Add a game by dropping a new object into this array.
//
//  id      unique slug; for self-hosted games also the folder /games/<id>/
//  title   display name
//  cat     one of CATEGORIES (drives the filter chips)
//  tags    extra words for search
//  type    "self"  -> loads /games/<id>/index.html in our player
//          "embed" -> loads `src` (external URL) in our player iframe
//          "link"  -> opens `src` in a new tab (sites that block embedding)
//  src     required for "embed" and "link"
//  blurb   one line shown on the tile / player
//  thumb   optional image for the tile (overrides icon)
//  icon    an emoji shown on the tile when there's no thumb (else first letter)
//  color   tile accent behind the icon
//  featured true -> highlighted on the homepage
// ============================================================

const CATEGORIES = ["All", "Multiplayer", "Arcade", "Puzzle", "Idle", "Sandbox", "Skill"];

const CATALOG = [
  // ---- our originals (self-hosted) ----
  // Note: rooftop-rumble, slope, and big-tower-tiny-square are temporarily shelved
  // (game files + thumbs remain in /games and /assets/thumbs; re-add their entries here later).
  {
    id: "potato-patter", title: "Potato Patter", cat: "Idle",
    tags: ["clicker", "incremental", "idle", "original", "potato"], type: "self",
    blurb: "Tap the spud, buy Idahoans, prestige for more — an original clicker by Tate Bell.",
    thumb: "assets/thumbs/potato-patter.jpg", icon: "🥔", color: "#3a2a16",
  },
  {
    id: "slap-marine", title: "Slap-Marine", cat: "Arcade",
    tags: ["survival", "underwater", "waves", "action", "original"], type: "self",
    blurb: "Dive deep and slap your way through endless swarms of fish — an original underwater survival brawler by Tate Bell.",
    thumb: "assets/thumbs/slap-marine.jpg", icon: "🤿", color: "#12283a",
  },
  {
    id: "farty-mc-fly", title: "Farty McFly", cat: "Skill",
    tags: ["platformer", "physics", "launch", "levels", "original"], type: "self",
    blurb: "Fart your way through stormy obstacle courses — an original momentum platformer by Tate Bell.",
    thumb: "assets/thumbs/farty-mc-fly.jpg", icon: "💨", color: "#20202e",
  },
  {
    id: "snake", title: "Snake", cat: "Arcade", tags: ["classic", "retro"], type: "self",
    blurb: "The classic. Eat, grow, don't bite yourself.",
    thumb: "assets/thumbs/snake.svg", icon: "🐍", color: "#2f9e57",
  },
  {
    id: "2048", title: "2048", cat: "Puzzle", tags: ["numbers", "slide", "brain"], type: "self",
    blurb: "Slide the tiles, chase that 2048.",
    thumb: "assets/thumbs/2048.webp", icon: "🔢", color: "#e0a92a", featured: true,
  },
  {
    id: "doom", title: "DOOM", cat: "Arcade",
    tags: ["fps", "shooter", "retro", "id software", "classic", "1993"], type: "self",
    blurb: "The 1993 original — Episode 1 shareware, running right in your browser.",
    thumb: "assets/thumbs/doom.webp", icon: "👹", color: "#7a1a12", featured: true,
  },
  {
    id: "minesweeper", title: "Minesweeper", cat: "Puzzle",
    tags: ["classic", "logic", "mines"], type: "self",
    blurb: "The timeless classic — clear the field without hitting a mine.",
    thumb: "assets/thumbs/minesweeper.svg", icon: "💣", color: "#6a7079",
  },
  {
    id: "breakout", title: "Breakout", cat: "Arcade",
    tags: ["arcade", "paddle", "bricks", "classic"], type: "self",
    blurb: "Bounce the ball, smash every brick. Don't drop it!",
    thumb: "assets/thumbs/breakout.svg", icon: "🧱", color: "#141826",
  },
  {
    id: "asteroids", title: "Asteroids", cat: "Arcade",
    tags: ["space", "shooter", "retro", "vector", "classic"], type: "self",
    blurb: "Rotate, thrust, and blast the rocks in this vector classic.",
    thumb: "assets/thumbs/asteroids.svg", icon: "🚀", color: "#20203a",
  },
  {
    id: "connect-four", title: "Connect Four", cat: "Multiplayer",
    tags: ["board", "strategy", "2 player", "classic"], type: "self",
    blurb: "Drop discs, connect four in a row. Vs a friend or the Domo AI.",
    thumb: "assets/thumbs/connect-four.svg", icon: "🔴", color: "#2b4c9b",
  },
  {
    id: "age-of-war", title: "Empire Rush", cat: "Multiplayer",
    tags: ["strategy", "base defense", "evolution", "ai", "economy", "tug of war"], type: "self",
    blurb: "Grow your economy, spawn troops, and evolve through 5 ages to crush the enemy base.",
    thumb: "assets/thumbs/age-of-war.svg", icon: "🏰", color: "#453a5a", featured: true,
  },

  // ---- embedded (play on our site; loaded from the game's official free page) ----
  {
    id: "minecraft-classic", title: "Minecraft Classic", cat: "Sandbox",
    tags: ["build", "blocks", "mojang"], type: "embed", src: "https://classic.minecraft.net/",
    blurb: "The original Minecraft, free from Mojang. Build anything.",
    thumb: "assets/thumbs/minecraft-classic.jpg", icon: "⛏️", color: "#5a9e42", featured: true,
  },
  {
    id: "sandspiel", title: "Sandspiel", cat: "Sandbox",
    tags: ["falling sand", "physics", "toy", "elements"], type: "embed", src: "https://sandspiel.club/",
    blurb: "A mesmerizing falling-sand playground — fire, water, plants, lava.",
    thumb: "assets/thumbs/sandspiel.svg", icon: "🧪", color: "#201812", featured: true,
  },
  {
    id: "hexgl", title: "HexGL", cat: "Arcade",
    tags: ["racing", "3d", "futuristic", "webgl"], type: "embed", src: "https://hexgl.bkcore.com/play/",
    blurb: "A gorgeous futuristic hover-racer. Blazing speed.",
    thumb: "assets/thumbs/hexgl.png", icon: "🏎️", color: "#22a3c4",
  },
  {
    id: "hextris", title: "Hextris", cat: "Puzzle",
    tags: ["tetris", "blocks", "hexagon"], type: "embed", src: "https://hextris.io/",
    blurb: "Addictive hexagon spin on falling blocks.",
    thumb: "assets/thumbs/hextris.webp", icon: "🔷", color: "#d9407a",
  },
  {
    id: "flappy-domo", title: "Flappy Domo", cat: "Arcade",
    tags: ["flappy", "reflex", "bird"], type: "self",
    blurb: "Flap the little red Domo through the pipes. Just one more try…",
    thumb: "assets/thumbs/flappy-domo.svg", icon: "🐤", color: "#5ec6e8",
  },
  {
    id: "astray", title: "Astray", cat: "Arcade",
    tags: ["maze", "3d", "marble"], type: "embed", src: "https://wwwtyro.github.io/Astray/",
    blurb: "Tilt a marble through a slick 3D maze.",
    thumb: "assets/thumbs/astray.svg", icon: "🌀", color: "#141c1e",
  },
  {
    id: "dino-run", title: "Dino Run", cat: "Arcade",
    tags: ["runner", "chrome", "t-rex", "endless"], type: "embed", src: "https://wayou.github.io/t-rex-runner/",
    blurb: "The offline Chrome dino — jump the cacti, chase a high score.",
    thumb: "assets/thumbs/dino-run.svg", icon: "🦖", color: "#232830",
  },
  {
    id: "a-dark-room", title: "A Dark Room", cat: "Idle",
    tags: ["text", "adventure", "incremental"], type: "embed", src: "https://adarkroom.doublespeakgames.com/",
    blurb: "A cult-classic minimalist adventure. Stoke the fire…",
    thumb: "assets/thumbs/a-dark-room.png", icon: "🔥", color: "#8a8f98",
  },
  {
    id: "paperclips", title: "Universal Paperclips", cat: "Idle",
    tags: ["incremental", "clicker", "ai"], type: "embed", src: "https://www.decisionproblem.com/paperclips/",
    blurb: "Turn the whole universe into paperclips. Weirdly gripping.",
    thumb: "assets/thumbs/paperclips.svg", icon: "📎", color: "#e0ded9",
  },
  {
    id: "hello-wordl", title: "hello wordl", cat: "Puzzle",
    tags: ["word", "wordle", "guess"], type: "embed", src: "https://hellowordl.net/",
    blurb: "Guess the hidden word in six tries. Endless rounds.",
    thumb: "assets/thumbs/hello-wordl.webp", icon: "🔤", color: "#6aaa64",
  },
  {
    id: "solitaire", title: "Solitaire", cat: "Puzzle",
    tags: ["cards", "klondike", "patience"], type: "embed", src: "https://www.solitr.com/",
    blurb: "Classic Klondike solitaire — the study-hall staple.",
    thumb: "assets/thumbs/solitaire.svg", icon: "🃏", color: "#124a2f",
  },
  {
    id: "candy-box-2", title: "Candy Box 2", cat: "Idle",
    tags: ["incremental", "adventure", "ascii"], type: "embed", src: "https://candybox2.github.io/",
    blurb: "A quirky incremental adventure that keeps unfolding. Eat the candies… or don't.",
    thumb: "assets/thumbs/candy-box-2.svg", icon: "🍬", color: "#1a1220",
  },
  {
    id: "trimps", title: "Trimps", cat: "Idle",
    tags: ["incremental", "idle", "strategy"], type: "embed", src: "https://trimps.github.io/",
    blurb: "Deep idle strategy — breed Trimps, explore, and never stop growing.",
    thumb: "assets/thumbs/trimps.svg", icon: "📈", color: "#12211a",
  },
  {
    id: "isleward", title: "Isleward", cat: "Multiplayer",
    tags: ["mmo", "rpg", "roguelike", "online"], type: "embed", src: "https://play.isleward.com/",
    blurb: "A free browser MMORPG roguelike — level up alongside players worldwide.",
    thumb: "assets/thumbs/isleward.png", icon: "⚔️", color: "#8a4fd0",
  },
  {
    id: "ztype", title: "ZType", cat: "Arcade",
    tags: ["typing", "shooter", "space", "words"], type: "embed", src: "https://zty.pe/",
    blurb: "Type the words to blast incoming ships. Fast fingers win.",
    thumb: "assets/thumbs/ztype.jpg", icon: "⌨️", color: "#2a7de0",
  },
  {
    id: "skribbl", title: "Skribbl", cat: "Multiplayer",
    tags: ["draw", "guess", "party", "online"], type: "embed", src: "https://skribbl.io/",
    blurb: "Draw and guess with a room full of players. Chaos and giggles.",
    thumb: "assets/thumbs/skribbl.png", icon: "🎨", color: "#4a8cf0",
  },
  {
    id: "krunker", title: "Krunker", cat: "Arcade",
    tags: ["fps", "shooter", "multiplayer", "3d"], type: "embed", src: "https://krunker.io/",
    blurb: "Fast, blocky browser FPS. Frag your way up the leaderboard.",
    thumb: "assets/thumbs/krunker.png", icon: "🎯", color: "#d94f3a",
  },
  {
    id: "diep", title: "Diep.io", cat: "Arcade",
    tags: ["io", "tanks", "shooter", "multiplayer", "upgrade"], type: "embed", src: "https://diep.io/",
    blurb: "Upgrade your tank, farm shapes, and take down the leaderboard.",
    thumb: "assets/thumbs/diep.png", icon: "🔺", color: "#2b333d",
  },
  {
    id: "zombsroyale", title: "ZombsRoyale.io", cat: "Multiplayer",
    tags: ["battle royale", "io", "shooter", "last one standing"], type: "embed", src: "https://zombsroyale.io/",
    blurb: "2D battle royale — loot, land, and be the last one standing.",
    thumb: "assets/thumbs/zombsroyale.jpg", icon: "🪂", color: "#2f6b4f",
  },
  {
    id: "little-alchemy-2", title: "Little Alchemy 2", cat: "Puzzle",
    tags: ["combine", "elements", "discovery", "relaxing"], type: "embed", src: "https://littlealchemy2.com/",
    blurb: "Combine elements to discover hundreds more. Start with earth, air, fire, water.",
    thumb: "assets/thumbs/little-alchemy-2.jpg", icon: "⚗️", color: "#5a1a4a",
  },
  {
    id: "typeracer", title: "TypeRacer", cat: "Skill",
    tags: ["typing", "racing", "multiplayer", "words"], type: "embed", src: "https://play.typeracer.com/",
    blurb: "Race other players by typing text passages as fast as you can.",
    thumb: "assets/thumbs/typeracer.png", icon: "🏁", color: "#1a4a7a",
  },

  // ---- links (open on the game's official site; they block embedding) ----
  {
    id: "cookie-clicker", title: "Cookie Clicker", cat: "Idle",
    tags: ["incremental", "clicker"], type: "link", src: "https://orteil.dashnet.org/cookieclicker/",
    blurb: "Bake absurd numbers of cookies. Opens on the official site.",
    thumb: "assets/thumbs/cookie-clicker.webp", icon: "🍪", color: "#b06a3b",
  },
  {
    id: "qwop", title: "QWOP", cat: "Skill",
    tags: ["ragdoll", "foddy", "hard"], type: "link", src: "https://www.foddy.net/Athletics.html",
    blurb: "The infamous running game. Good luck. Opens on Foddy's site.",
    thumb: "assets/thumbs/qwop.svg", icon: "🏃", color: "#222d40",
  },
];
