import Link from "next/link";
import { gallery } from "@/data/gallery";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Gallery",
  description:
    "Photos and videos from OTHSAL Tour & Travel — real moments from our Ladakh tours across Leh, Nubra, Pangong and the high Himalaya.",
};

// Split the owner's gallery items into photos and videos so we can show each
// under its own heading. Videos are either a YouTube embed or a hosted file.
const photos = gallery.filter((item) => item.type === "image");
const videos = gallery.filter(
  (item) => item.type === "youtube" || item.type === "video"
);

// Accept a full YouTube link in the data (watch?v=…, youtu.be/…, /embed/…) and
// pull out the 11-char video ID for the embed URL. A bare ID is returned as-is,
// so old entries keep working.
function youtubeId(src = "") {
  const m = String(src).match(
    /(?:youtu\.be\/|watch\?v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/
  );
  return m ? m[1] : src;
}

export default function GalleryPage() {
  const isEmpty = photos.length === 0 && videos.length === 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-400">
            Gallery
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">
            Moments from the mountains
          </h1>
          <p className="mt-4 max-w-2xl text-stone-300">
            A glimpse of real journeys with OTHSAL — the landscapes, the people
            and the memories we make across Ladakh.
          </p>
        </div>
      </section>

      {isEmpty ? (
        <section className="py-20">
          <div className="container-x text-center">
            <div className="text-5xl">📷</div>
            <h2 className="mt-4 font-display text-2xl font-bold text-stone-900">
              Photos & videos coming soon
            </h2>
            <p className="mx-auto mt-2 max-w-md text-stone-600">
              We&apos;re putting together our best shots from the road. Check
              back shortly.
            </p>
            <Link
              href="/booking"
              className="mt-7 inline-block rounded-xl bg-saffron-500 px-8 py-3.5 font-semibold text-white shadow-lg hover:bg-saffron-600 transition"
            >
              Plan your trip
            </Link>
          </div>
        </section>
      ) : (
        <>
          {/* Photos */}
          {photos.length > 0 && (
            <section className="py-16">
              <div className="container-x">
                <SectionHeading eyebrow="Photos" title="From our tours" />
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((item, i) => (
                    <figure
                      key={`${item.src}-${i}`}
                      className="group relative overflow-hidden rounded-2xl ring-1 ring-stone-200 shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.caption || "OTHSAL Ladakh tour photo"}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      {item.caption && (
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Videos */}
          {videos.length > 0 && (
            <section className="bg-stone-50 py-16">
              <div className="container-x">
                <SectionHeading eyebrow="Videos" title="Watch the journey" />
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {videos.map((item, i) => (
                    <figure
                      key={`${item.url || item.id || item.src}-${i}`}
                      className="overflow-hidden rounded-2xl bg-black ring-1 ring-stone-200 shadow-sm"
                    >
                      <div className="aspect-video w-full">
                        {item.type === "youtube" ? (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${youtubeId(
                              item.url || item.id
                            )}`}
                            title={item.caption || "OTHSAL Ladakh tour video"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            className="h-full w-full border-0"
                          />
                        ) : (
                          <video
                            controls
                            preload="metadata"
                            className="h-full w-full object-cover"
                          >
                            <source src={item.src} />
                            Your browser doesn&apos;t support embedded videos.
                          </video>
                        )}
                      </div>
                      {item.caption && (
                        <figcaption className="bg-white p-3 text-sm font-medium text-stone-700">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
