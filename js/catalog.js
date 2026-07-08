// ============================================================
//  Reddomo game catalog
//  Add a game by dropping a new object into this array.
//
//  id       unique slug; for self-hosted games also the folder /games/<id>/
//  title    display name
//  cat      one of the CATEGORIES below (drives the filter chips)
//  tags     extra words for search
//  type     "self"  -> loads /games/<id>/index.html in our player
//           "embed" -> loads `src` (external URL) in our player iframe
//           "link"  -> opens `src` in a new tab (for sites that block embedding)
//  src      required for "embed" and "link"
//  blurb    one line shown on the tile / player
//  color    tile accent when there is no thumbnail
//  featured true -> highlighted on the homepage
// ============================================================

const CATEGORIES = ["All", "Multiplayer", "Arcade", "Puzzle", "Idle", "Sandbox", "Skill"];

const CATALOG = [
  {
    id: "rooftop-rumble",
    title: "Rooftop Rumble",
    cat: "Multiplayer",
    tags: ["2 player", "fight", "physics", "brawler"],
    type: "self",
    blurb: "Two-player ragdoll brawl on the rooftops. Grab a friend.",
    color: "#e23b3b",
    featured: true,
  },
  {
    id: "snake",
    title: "Snake",
    cat: "Arcade",
    tags: ["classic", "retro"],
    type: "self",
    blurb: "The classic. Eat, grow, don't bite yourself.",
    color: "#3fb56b",
  },
  {
    id: "2048",
    title: "2048",
    cat: "Puzzle",
    tags: ["numbers", "slide", "brain"],
    type: "self",
    blurb: "Slide the tiles, chase that 2048.",
    color: "#edc22e",
    featured: true,
  },
  {
    id: "minecraft-classic",
    title: "Minecraft Classic",
    cat: "Sandbox",
    tags: ["build", "blocks", "mojang"],
    type: "embed",
    src: "https://classic.minecraft.net/",
    blurb: "The original Minecraft, free from Mojang. Build anything.",
    color: "#6aa84f",
    featured: true,
  },
  {
    id: "a-dark-room",
    title: "A Dark Room",
    cat: "Idle",
    tags: ["text", "adventure", "incremental"],
    type: "embed",
    src: "https://adarkroom.doublespeakgames.com/",
    blurb: "A cult-classic minimalist adventure. Stoke the fire…",
    color: "#8a8f98",
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    cat: "Idle",
    tags: ["incremental", "clicker"],
    type: "link",
    src: "https://orteil.dashnet.org/cookieclicker/",
    blurb: "Bake absurd numbers of cookies. Opens on the official site.",
    color: "#b06a3b",
  },
  {
    id: "qwop",
    title: "QWOP",
    cat: "Skill",
    tags: ["ragdoll", "foddy", "hard"],
    type: "link",
    src: "https://www.foddy.net/Athletics.html",
    blurb: "The infamous running game. Good luck. Opens on Foddy's site.",
    color: "#4f74c9",
  },
];
