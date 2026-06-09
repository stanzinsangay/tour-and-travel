// ──────────────────────────────────────────────────────────────────────────
//  GALLERY — the owner edits this file to add photos and videos.
//
//  This is the ONLY file you need to touch to update the Gallery page.
//  Add, remove or reorder items in the `gallery` array below. Each item is
//  one photo or one video. Newest-first looks best, so add new items at the top.
//
//  ── HOW TO ADD A PHOTO ──────────────────────────────────────────────
//  Option A: paste a public image link (ending in .jpg/.png/.webp):
//      { type: "image", src: "https://example.com/leh.jpg", caption: "Leh palace" }
//  Option B: drop the file into the `public/` folder (e.g. public/gallery/leh.jpg)
//            and reference it with a leading slash:
//      { type: "image", src: "/gallery/leh.jpg", caption: "Leh palace" }
//
//  ── HOW TO ADD A VIDEO ──────────────────────────────────────────────
//  YouTube (easiest): copy the video ID — the part after "v=" in the URL
//  (e.g. https://youtube.com/watch?v=ABC123  ->  id is "ABC123"):
//      { type: "youtube", id: "ABC123", caption: "Nubra valley drive" }
//  Your own video file: drop the .mp4 into `public/` and reference it:
//      { type: "video", src: "/gallery/nubra.mp4", caption: "Nubra valley drive" }
//
//  `caption` is optional but recommended. Leave the array empty ([]) and the
//  page will show a friendly "coming soon" message instead.
// ──────────────────────────────────────────────────────────────────────────

export const gallery = [
  // ── Photos ──────────────────────────────────────────────────────────────
  {
    type: "image",
    src: "https://i.pinimg.com/736x/bf/5c/c9/bf5cc947c223d9b3746d964dc60d820f.jpg?auto=format&fit=crop&w=1200&q=80",
    caption: "Pangong Tso under a clear Ladakhi sky",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/736x/b5/60/ef/b560ef2b0c81b75a57d46929b2acf774.jpg?auto=format&fit=crop&w=1200&q=80",
    caption: "Prayer flags over the high passes",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/1200x/35/89/86/3589865b1896bda8b10a1bfffb4b8c3e.jpg",
    caption: "Monasteries above the Indus valley",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/736x/d0/46/da/d046daf02e0f17df5f70e436b8b66dfe.jpg?auto=format&fit=crop&w=1200&q=80",
    caption: "Nubra's sand dunes & double-humped camels",
  },

  // ── Videos ──────────────────────────────────────────────────────────────
  // Replace this sample with your own clips. For YouTube, paste the full video
  // link (e.g. https://www.youtube.com/watch?v=…, https://youtu.be/…); for a
  // hosted file use { type: "video", src: "/your-clip.mp4" }.
  {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZFLsBXFK3Pc",
    caption: "Sample: Ladakh travel film (replace with your own)",
  },
   {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=f4Kj5JVHFVw",
    caption: "Sample: Ladakh travel film (replace with your own)",
  },
];
