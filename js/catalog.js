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
//  icon    an emoji shown on the tile (falls back to the first letter)
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
    icon: "🥊", color: "#e23b3b", featured: true,
  },
  {
    id: "snake", title: "Snake", cat: "Arcade", tags: ["classic", "retro"], type: "self",
    blurb: "The classic. Eat, grow, don't bite yourself.", icon: "🐍", color: "#2f9e57",
  },
  {
    id: "2048", title: "2048", cat: "Puzzle", tags: ["numbers", "slide", "brain"], type: "self",
    blurb: "Slide the tiles, chase that 2048.", icon: "🔢", color: "#e0a92a", featured: true,
  },

  // ---- embedded (play on our site; loaded from the game's official free page) ----
  {
    id: "minecraft-classic", title: "Minecraft Classic", cat: "Sandbox",
    tags: ["build", "blocks", "mojang"], type: "embed", src: "https://classic.minecraft.net/",
    blurb: "The original Minecraft, free from Mojang. Build anything.", icon: "⛏️", color: "#5a9e42", featured: true,
  },
  {
    id: "sandspiel", title: "Sandspiel", cat: "Sandbox",
    tags: ["falling sand", "physics", "toy", "elements"], type: "embed", src: "https://sandspiel.club/",
    blurb: "A mesmerizing falling-sand playground — fire, water, plants, lava.", icon: "🧪", color: "#d97e33", featured: true,
  },
  {
    id: "hextris", title: "Hextris", cat: "Puzzle",
    tags: ["tetris", "blocks", "hexagon"], type: "embed", src: "https://hextris.io/",
    blurb: "Addictive hexagon spin on falling blocks.", icon: "🔷", color: "#d9407a",
  },
  {
    id: "clumsy-bird", title: "Clumsy Bird", cat: "Arcade",
    tags: ["flappy", "reflex"], type: "embed", src: "https://ellisonleao.github.io/clumsy-bird/",
    blurb: "Flappy done right — tap to flap, dodge the pipes.", icon: "🐤", color: "#e0b52c",
  },
  {
    id: "astray", title: "Astray", cat: "Arcade",
    tags: ["maze", "3d", "marble"], type: "embed", src: "https://wwwtyro.github.io/Astray/",
    blurb: "Tilt a marble through a slick 3D maze.", icon: "🌀", color: "#6a5cff",
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
    id: "untrusted", title: "Untrusted", cat: "Puzzle",
    tags: ["coding", "javascript", "escape"], type: "embed", src: "https://alexnisnevich.github.io/untrusted/",
    blurb: "Escape each level by rewriting its JavaScript. Genius.", icon: "💻", color: "#2fb3a0",
  },

  // ---- links (open on the game's official site; they block embedding) ----
  {
    id: "cookie-clicker", title: "Cookie Clicker", cat: "Idle",
    tags: ["incremental", "clicker"], type: "link", src: "https://orteil.dashnet.org/cookieclicker/",
    blurb: "Bake absurd numbers of cookies. Opens on the official site.", icon: "🍪", color: "#b06a3b",
  },
  {
    id: "qwop", title: "QWOP", cat: "Skill",
    tags: ["ragdoll", "foddy", "hard"], type: "link", src: "https://www.foddy.net/Athletics.html",
    blurb: "The infamous running game. Good luck. Opens on Foddy's site.", icon: "🏃", color: "#4f74c9",
  },
];
