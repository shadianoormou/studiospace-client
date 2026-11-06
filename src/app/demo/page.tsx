import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiospace-client-gamma-pink.vercel.app"),
  title: "StudioSpace — Product demo",
  description:
    "A two-minute walkthrough of StudioSpace, a calm marketplace for discovering and booking creative spaces.",
  openGraph: {
    url: "https://studiospace-client-gamma-pink.vercel.app/demo",
    title: "StudioSpace — Product demo",
    description:
      "See how StudioSpace makes it easier to discover, compare, and book creative spaces.",
    type: "website",
    images: ["/media/studiospace-demo-poster.jpg"],
    videos: [{ url: "/media/studiospace-demo.mp4", type: "video/mp4", width: 1920, height: 1080 }],
  },
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0d1a14] px-5 py-10 text-[#f3f6f0] sm:px-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
          <span className="grid size-10 place-items-center rounded-xl border-2 border-[#c1e58c] text-[#c1e58c]">◌</span>
          studiospace.
        </div>
        <p className="mt-16 text-xs font-extrabold uppercase tracking-[0.2em] text-[#c1e58c]">Product walkthrough · 2 minutes</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-7xl">Make room for your next idea.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#aeb9b2]">StudioSpace is a creative workspace marketplace for people who need a great room for a shoot, session, podcast, workshop, or the work in between.</p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#355442] bg-[#101e17] shadow-2xl">
          <video className="aspect-video w-full bg-[#08100b]" controls preload="metadata" poster="/media/studiospace-demo-poster.jpg">
            <source src="/media/studiospace-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
        <div className="mt-7 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-[#2e4939] bg-[#14251b] p-6">
            <h2 className="text-lg font-semibold">The product story</h2>
            <p className="mt-2 leading-7 text-[#aeb9b2]">Studio discovery is often scattered across messages, spreadsheets, and incomplete listings. This flow brings search, transparent pricing, availability, booking requests, and host management into one calm experience.</p>
          </section>
          <section className="rounded-2xl border border-[#2e4939] bg-[#14251b] p-6">
            <h2 className="text-lg font-semibold">Explore the build</h2>
            <p className="mt-2 leading-7 text-[#aeb9b2]">Try the live product or read the implementation notes and setup guide.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#c1e58c] px-4 py-2.5 font-semibold text-[#0d1a14]" href="/">Live demo</a>
              <a className="rounded-full bg-[#294334] px-4 py-2.5 font-semibold text-[#eaf1e8]" href="https://github.com/shadianoormou/studiospace-client">GitHub</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
