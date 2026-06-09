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
    src: "https://images.unsplash.com/photo-1606117331085-5760e3b58520?auto=format&fit=crop&w=1200&q=80",
    caption: "Pangong Tso under a clear Ladakhi sky",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&w=1200&q=80",
    caption: "Prayer flags over the high passes",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    caption: "Monasteries above the Indus valley",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1597167333247-9cc4fa3f3b6a?auto=format&fit=crop&w=1200&q=80",
    caption: "Nubra's sand dunes & double-humped camels",
  },

  // ── Videos ──────────────────────────────────────────────────────────────
  // Replace this sample with your own clips (YouTube ID or an /public mp4).
  {
    type: "youtube",
    id: "ZFLsBXFK3Pc",
    caption: "Sample: Ladakh travel film (replace with your own)",
  },
];
