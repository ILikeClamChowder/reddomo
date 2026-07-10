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
  {
    id: "rooftop-rumble", title: "Rooftop Rumble", cat: "Multiplayer",
    tags: ["2 player", "fight", "physics", "brawler"], type: "self",
    blurb: "Two-player ragdoll brawl on the rooftops. Grab a friend.",
    thumb: "assets/thumbs/rooftop-rumble.svg", icon: "🥊", color: "#e23b3b", featured: true,
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
    blurb: "The timeless classic — clear the field without hitting a mine.", icon: "💣", color: "#6a7079",
  },
  {
    id: "breakout", title: "Breakout", cat: "Arcade",
    tags: ["arcade", "paddle", "bricks", "classic"], type: "self",
    blurb: "Bounce the ball, smash every brick. Don't drop it!", icon: "🧱", color: "#ff5a4a",
  },
  {
    id: "asteroids", title: "Asteroids", cat: "Arcade",
    tags: ["space", "shooter", "retro", "vector", "classic"], type: "self",
    blurb: "Rotate, thrust, and blast the rocks in this vector classic.", icon: "🚀", color: "#20203a",
  },
  {
    id: "connect-four", title: "Connect Four", cat: "Multiplayer",
    tags: ["board", "strategy", "2 player", "classic"], type: "self",
    blurb: "Drop discs, connect four in a row. Vs a friend or the Domo AI.", icon: "🔴", color: "#2b4c9b",
  },
  {
    id: "slope", title: "Slope", cat: "Arcade",
    tags: ["3d", "endless", "runner", "reflex", "ball", "precision"], type: "self",
    blurb: "Steer the ball down an endless neon slope. One slip and it's over.",
    thumb: "assets/thumbs/slope.svg", icon: "🎢", color: "#3a1c6b", featured: true,
  },

  // ---- embedded (play on our site; loaded from the game's official free page) ----
  {
    id: "minecraft-classic", title: "Minecraft Classic", cat: "Sandbox",
    tags: ["build", "blocks", "mojang"], type: "embed", src: "https://classic.minecraft.net/",
    blurb: "The original Minecraft, free from Mojang. Build anything.",
    thumb: "assets/thumbs/minecraft-classic.svg", icon: "⛏️", color: "#5a9e42", featured: true,
  },
  {
    id: "sandspiel", title: "Sandspiel", cat: "Sandbox",
    tags: ["falling sand", "physics", "toy", "elements"], type: "embed", src: "https://sandspiel.club/",
    blurb: "A mesmerizing falling-sand playground — fire, water, plants, lava.", icon: "🧪", color: "#d97e33", featured: true,
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
    blurb: "Tilt a marble through a slick 3D maze.", icon: "🌀", color: "#6a5cff",
  },
  {
    id: "dino-run", title: "Dino Run", cat: "Arcade",
    tags: ["runner", "chrome", "t-rex", "endless"], type: "embed", src: "https://wayou.github.io/t-rex-runner/",
    blurb: "The offline Chrome dino — jump the cacti, chase a high score.", icon: "🦖", color: "#5a6570",
  },
  {
    id: "a-dark-room", title: "A Dark Room", cat: "Idle",
    tags: ["text", "adventure", "incremental"], type: "embed", src: "https://adarkroom.doublespeakgames.com/",
    blurb: "A cult-classic minimalist adventure. Stoke the fire…", icon: "🔥", color: "#8a8f98",
  },
  {
    id: "paperclips", title: "Universal Paperclips", cat: "Idle",
    tags: ["incremental", "clicker", "ai"], type: "embed", src: "https://www.decisionproblem.com/paperclips/",
    blurb: "Turn the whole universe into paperclips. Weirdly gripping.", icon: "📎", color: "#9aa4ad",
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
    blurb: "Classic Klondike solitaire — the study-hall staple.", icon: "🃏", color: "#2f7d4f",
  },
  {
    id: "untrusted", title: "Untrusted", cat: "Puzzle",
    tags: ["coding", "javascript", "escape"], type: "embed", src: "https://alexnisnevich.github.io/untrusted/",
    blurb: "Escape each level by rewriting its JavaScript. Genius.", icon: "💻", color: "#2fb3a0",
  },
  {
    id: "candy-box-2", title: "Candy Box 2", cat: "Idle",
    tags: ["incremental", "adventure", "ascii"], type: "embed", src: "https://candybox2.github.io/",
    blurb: "A quirky incremental adventure that keeps unfolding. Eat the candies… or don't.", icon: "🍬", color: "#d94f8a",
  },
  {
    id: "trimps", title: "Trimps", cat: "Idle",
    tags: ["incremental", "idle", "strategy"], type: "embed", src: "https://trimps.github.io/",
    blurb: "Deep idle strategy — breed Trimps, explore, and never stop growing.", icon: "📈", color: "#4a9d7f",
  },
  {
    id: "isleward", title: "Isleward", cat: "Multiplayer",
    tags: ["mmo", "rpg", "roguelike", "online"], type: "embed", src: "https://play.isleward.com/",
    blurb: "A free browser MMORPG roguelike — level up alongside players worldwide.", icon: "⚔️", color: "#8a4fd0",
  },
  {
    id: "ztype", title: "ZType", cat: "Arcade",
    tags: ["typing", "shooter", "space", "words"], type: "embed", src: "https://zty.pe/",
    blurb: "Type the words to blast incoming ships. Fast fingers win.", icon: "⌨️", color: "#2a7de0",
  },
  {
    id: "skribbl", title: "Skribbl", cat: "Multiplayer",
    tags: ["draw", "guess", "party", "online"], type: "embed", src: "https://skribbl.io/",
    blurb: "Draw and guess with a room full of players. Chaos and giggles.", icon: "🎨", color: "#4a8cf0",
  },
  {
    id: "krunker", title: "Krunker", cat: "Arcade",
    tags: ["fps", "shooter", "multiplayer", "3d"], type: "embed", src: "https://krunker.io/",
    blurb: "Fast, blocky browser FPS. Frag your way up the leaderboard.", icon: "🎯", color: "#d94f3a",
  },
  {
    id: "diep", title: "Diep.io", cat: "Arcade",
    tags: ["io", "tanks", "shooter", "multiplayer", "upgrade"], type: "embed", src: "https://diep.io/",
    blurb: "Upgrade your tank, farm shapes, and take down the leaderboard.", icon: "🔺", color: "#4a7a3a",
  },
  {
    id: "zombsroyale", title: "ZombsRoyale.io", cat: "Multiplayer",
    tags: ["battle royale", "io", "shooter", "last one standing"], type: "embed", src: "https://zombsroyale.io/",
    blurb: "2D battle royale — loot, land, and be the last one standing.", icon: "🪂", color: "#2f6b4f",
  },
  {
    id: "bloxd", title: "Bloxd.io", cat: "Sandbox",
    tags: ["blocks", "multiplayer", "minigames", "build"], type: "embed", src: "https://bloxd.io/",
    blurb: "A blocky multiplayer world packed with build modes and minigames.", icon: "🧊", color: "#3a8fd0",
  },
  {
    id: "little-alchemy-2", title: "Little Alchemy 2", cat: "Puzzle",
    tags: ["combine", "elements", "discovery", "relaxing"], type: "embed", src: "https://littlealchemy2.com/",
    blurb: "Combine elements to discover hundreds more. Start with earth, air, fire, water.", icon: "⚗️", color: "#5a1a4a",
  },
  {
    id: "typeracer", title: "TypeRacer", cat: "Skill",
    tags: ["typing", "racing", "multiplayer", "words"], type: "embed", src: "https://play.typeracer.com/",
    blurb: "Race other players by typing text passages as fast as you can.", icon: "🏁", color: "#1a4a7a",
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
    blurb: "The infamous running game. Good luck. Opens on Foddy's site.", icon: "🏃", color: "#4f74c9",
  },
];
