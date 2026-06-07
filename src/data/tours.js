// Ladakh tour packages.
// These are realistic sample packages — edit prices, itineraries and
// images to match what OTSAL Tour & Travel actually offers.
//
// Images use Unsplash (free to use). Swap the URLs for your own photos.

export const tours = [
  {
    slug: "leh-ladakh-explorer",
    title: "Leh Ladakh Explorer",
    category: "Sightseeing",
    region: "Leh • Nubra • Pangong",
    summary:
      "The complete first-timer's Ladakh circuit — acclimatise in Leh, cross the mighty Khardung La to Nubra's sand dunes, and camp beside the electric-blue waters of Pangong Lake.",
    nights: 6,
    days: 7,
    price: 28999,
    oldPrice: 34999,
    difficulty: "Easy",
    groupSize: "2 – 14",
    bestSeason: "May – September",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Khardung La — one of the world's highest motorable passes",
      "Camel safari on the dunes of Hunder, Nubra Valley",
      "Sunset & overnight stay at Pangong Tso (14,270 ft)",
      "Pangong, Thiksey & Hemis monastery visits",
      "Shanti Stupa and Leh old-town walk",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Airport pickup, transfer to hotel and complete-rest acclimatisation day. Evening stroll on Leh Main Bazaar." },
      { day: 2, title: "Leh Local Sightseeing", desc: "Shanti Stupa, Leh Palace, Hall of Fame and Sangam (Indus–Zanskar confluence). Acclimatisation continues." },
      { day: 3, title: "Leh → Nubra via Khardung La", desc: "Drive over Khardung La to Nubra Valley. Camel safari at Hunder dunes. Overnight in Nubra." },
      { day: 4, title: "Nubra → Pangong via Shyok", desc: "Scenic Shyok-river route to Pangong Tso. Sunset by the lake. Overnight in lakeside camp." },
      { day: 5, title: "Pangong → Leh via Chang La", desc: "Sunrise at Pangong, return to Leh over Chang La with a stop at Thiksey Monastery." },
      { day: 6, title: "Leh at Leisure", desc: "Free morning for shopping or an optional Sham Valley add-on. Farewell dinner." },
      { day: 7, title: "Departure", desc: "Transfer to Leh airport for your onward flight." },
    ],
    inclusions: [
      "6 nights accommodation (hotels + camps)",
      "Daily breakfast and dinner",
      "All transfers in private SUV/Tempo Traveller",
      "Inner Line Permits & monastery fees",
      "Experienced local driver-guide",
      "Oxygen cylinder & first-aid in vehicle",
    ],
    exclusions: [
      "Airfare to/from Leh",
      "Lunches & personal expenses",
      "Any activity marked 'optional'",
      "Travel insurance",
    ],
  },
  {
    slug: "pangong-nubra-adventure",
    title: "Pangong & Nubra Adventure",
    category: "Sightseeing",
    region: "Leh • Nubra • Pangong",
    summary:
      "A shorter, high-impact escape for travellers tight on time — the two showstoppers of Ladakh, Nubra Valley and Pangong Lake, packed into a smooth six-day loop.",
    nights: 5,
    days: 6,
    price: 23999,
    oldPrice: 27999,
    difficulty: "Easy",
    groupSize: "2 – 12",
    bestSeason: "May – September",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Double valley combo: Nubra + Pangong",
      "Diskit Monastery & giant Maitreya Buddha",
      "Overnight lakeside camp at Pangong",
      "Khardung La and Chang La high passes",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Pickup and rest day for acclimatisation." },
      { day: 2, title: "Leh Sightseeing", desc: "Monasteries and Shanti Stupa to aid acclimatisation." },
      { day: 3, title: "Leh → Nubra", desc: "Cross Khardung La, visit Diskit Monastery, camel safari at Hunder." },
      { day: 4, title: "Nubra → Pangong", desc: "Drive the Shyok route to Pangong Tso for a lakeside overnight." },
      { day: 5, title: "Pangong → Leh", desc: "Return over Chang La with monastery stops." },
      { day: 6, title: "Departure", desc: "Transfer to airport." },
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast and dinner",
      "Private vehicle & driver-guide",
      "Inner Line Permits",
    ],
    exclusions: ["Airfare", "Lunches", "Personal expenses", "Insurance"],
  },
  {
    slug: "manali-leh-bike-expedition",
    title: "Manali → Leh Bike Expedition",
    category: "Adventure",
    region: "Manali • Sarchu • Leh",
    summary:
      "The ultimate Himalayan motorcycle pilgrimage. Ride Royal Enfields over five legendary passes — Rohtang, Baralacha, Lachung La, Nakee La and the surreal Gata Loops — from Manali into the heart of Ladakh.",
    nights: 8,
    days: 9,
    price: 49999,
    oldPrice: 58999,
    difficulty: "Challenging",
    groupSize: "4 – 15",
    bestSeason: "June – September",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1601758123927-196d5d8c0a5a?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Ride 5 high-altitude passes including Tanglang La (17,480 ft)",
      "Royal Enfield Himalayan / Bullet 350",
      "Backup vehicle, mechanic & spares throughout",
      "Camp at Sarchu and the More Plains",
      "Full Leh–Nubra–Pangong circuit included",
    ],
    itinerary: [
      { day: 1, title: "Manali Briefing", desc: "Bike handover, safety briefing and gear check." },
      { day: 2, title: "Manali → Jispa", desc: "Cross Atal Tunnel / Rohtang, ride to Jispa along the Bhaga river." },
      { day: 3, title: "Jispa → Sarchu", desc: "Over Baralacha La to the high desert camp at Sarchu." },
      { day: 4, title: "Sarchu → Leh", desc: "Gata Loops, Nakee La, Lachung La and Tanglang La into Leh." },
      { day: 5, title: "Leh Rest & Repair", desc: "Acclimatisation, bike servicing, local sightseeing." },
      { day: 6, title: "Leh → Nubra", desc: "Ride Khardung La into Nubra Valley." },
      { day: 7, title: "Nubra → Pangong", desc: "Shyok route to Pangong Tso." },
      { day: 8, title: "Pangong → Leh", desc: "Return over Chang La. Celebration dinner." },
      { day: 9, title: "Departure", desc: "Bike drop-off and airport transfer." },
    ],
    inclusions: [
      "Royal Enfield motorcycle & fuel",
      "8 nights accommodation (hotels + camps)",
      "Backup SUV, mechanic & spare parts",
      "Breakfast and dinner daily",
      "All permits and lead road captain",
    ],
    exclusions: [
      "Airfare & travel to Manali",
      "Riding gear (rentable on request)",
      "Damage / fuel beyond itinerary",
      "Lunches & insurance",
    ],
  },
  {
    slug: "tso-moriri-hanle-stargazing",
    title: "Tso Moriri & Hanle Stargazing",
    category: "Offbeat",
    region: "Leh • Tso Moriri • Hanle",
    summary:
      "Venture into Changthang's remote highlands — the serene Tso Moriri wetland and Hanle, home to India's highest observatory and some of the darkest, star-filled skies on Earth.",
    nights: 7,
    days: 8,
    price: 39999,
    oldPrice: 45999,
    difficulty: "Moderate",
    groupSize: "2 – 10",
    bestSeason: "May – October",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Tso Moriri — Ramsar-listed high-altitude lake",
      "Hanle Dark Sky Reserve & Indian Astronomical Observatory",
      "Korzok village & nomadic Changpa culture",
      "Wildlife: kiang, marmots and migratory birds",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Rest and acclimatisation." },
      { day: 2, title: "Leh Sightseeing", desc: "Monasteries and Shanti Stupa." },
      { day: 3, title: "Leh → Tso Moriri", desc: "Drive via Chumathang hot springs to Korzok." },
      { day: 4, title: "Tso Moriri → Hanle", desc: "Across the Changthang plateau to Hanle village." },
      { day: 5, title: "Hanle Observatory & Stargazing", desc: "Daytime observatory visit, night under the Milky Way." },
      { day: 6, title: "Hanle → Pangong", desc: "Long scenic drive to Pangong Tso." },
      { day: 7, title: "Pangong → Leh", desc: "Return over Chang La." },
      { day: 8, title: "Departure", desc: "Airport transfer." },
    ],
    inclusions: [
      "7 nights accommodation / homestays",
      "Breakfast and dinner",
      "Private 4x4 & driver",
      "Restricted-area permits",
      "Stargazing session",
    ],
    exclusions: ["Airfare", "Lunches", "Telescope hire", "Insurance"],
  },
  {
    slug: "leh-local-discovery",
    title: "Leh Local Discovery",
    category: "Short Break",
    region: "Leh • Sham Valley",
    summary:
      "Short on days but big on Ladakh? This relaxed four-day break covers Leh's monasteries, the Sham Valley's 'moonland' and the famous Magnetic Hill — perfect as a long weekend.",
    nights: 3,
    days: 4,
    price: 14999,
    oldPrice: 17999,
    difficulty: "Easy",
    groupSize: "2 – 16",
    bestSeason: "April – October",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Thiksey, Hemis & Shey monasteries",
      "Magnetic Hill & Gurudwara Pathar Sahib",
      "Sangam — Indus & Zanskar confluence",
      "Likir & Alchi 'moonland' Sham Valley",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Pickup, rest and easy evening bazaar walk." },
      { day: 2, title: "Leh Monasteries", desc: "Thiksey, Hemis, Shey and Shanti Stupa." },
      { day: 3, title: "Sham Valley", desc: "Magnetic Hill, Sangam, Pathar Sahib, Likir & Alchi." },
      { day: 4, title: "Departure", desc: "Airport transfer." },
    ],
    inclusions: [
      "3 nights hotel in Leh",
      "Breakfast and dinner",
      "Private vehicle & guide",
      "Monastery fees",
    ],
    exclusions: ["Airfare", "Lunches", "Personal expenses", "Insurance"],
  },
  {
    slug: "markha-valley-trek",
    title: "Markha Valley Trek",
    category: "Trekking",
    region: "Hemis National Park",
    summary:
      "Ladakh's most loved trek. Walk through the Hemis National Park, cross the Kongmaru La (17,060 ft), stay in warm Ladakhi homestays and look out for blue sheep and elusive snow leopards.",
    nights: 7,
    days: 8,
    price: 32999,
    oldPrice: 37999,
    difficulty: "Moderate",
    groupSize: "4 – 12",
    bestSeason: "June – September",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Classic homestay trek through Markha Valley",
      "Cross Kongmaru La (17,060 ft)",
      "Views of Kang Yatse & Stok Kangri",
      "Hemis National Park wildlife",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Rest and acclimatisation." },
      { day: 2, title: "Leh Acclimatisation", desc: "Short hike and gear check." },
      { day: 3, title: "Drive Chilling → Trek to Skiu", desc: "Begin the trek along the Markha river." },
      { day: 4, title: "Skiu → Markha", desc: "Gentle valley walk to Markha village." },
      { day: 5, title: "Markha → Thachungtse", desc: "Ascend with views of Kang Yatse." },
      { day: 6, title: "Thachungtse → Nimaling → Shang Sumdo", desc: "Cross Kongmaru La and descend." },
      { day: 7, title: "Drive to Leh", desc: "Return and celebration dinner." },
      { day: 8, title: "Departure", desc: "Airport transfer." },
    ],
    inclusions: [
      "Accommodation in Leh + trek homestays/camps",
      "All meals on trek",
      "Trek guide, cook & support staff",
      "Hemis National Park permits",
    ],
    exclusions: ["Airfare", "Sleeping bag (rentable)", "Personal gear", "Insurance"],
  },
  {
    slug: "ladakh-family-holiday",
    title: "Ladakh Family Holiday",
    category: "Family",
    region: "Leh • Nubra • Pangong",
    summary:
      "A gentle, well-paced itinerary designed for families with kids and elders — comfortable hotels, shorter drives, extra acclimatisation time and all the Ladakh icons without the rush.",
    nights: 5,
    days: 6,
    price: 26999,
    oldPrice: 30999,
    difficulty: "Easy",
    groupSize: "Families up to 8",
    bestSeason: "May – September",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Comfort-first pacing with extra rest",
      "Camel ride for kids at Hunder",
      "Pangong Lake day visit",
      "Family-friendly hotels & cuisine",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh", desc: "Relaxed pickup and full rest day." },
      { day: 2, title: "Easy Leh Sightseeing", desc: "Shanti Stupa, Leh Palace at a gentle pace." },
      { day: 3, title: "Leh → Nubra", desc: "Khardung La and a fun camel ride at Hunder." },
      { day: 4, title: "Nubra → Pangong", desc: "Scenic drive and lakeside time." },
      { day: 5, title: "Pangong → Leh", desc: "Return with a Thiksey stop." },
      { day: 6, title: "Departure", desc: "Airport transfer." },
    ],
    inclusions: [
      "5 nights family rooms",
      "Breakfast and dinner",
      "Private vehicle & driver-guide",
      "All permits",
    ],
    exclusions: ["Airfare", "Lunches", "Personal expenses", "Insurance"],
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(tours.map((t) => t.category))),
];

export function getTour(slug) {
  return tours.find((t) => t.slug === slug);
}

export function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}
