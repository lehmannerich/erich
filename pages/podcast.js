import Head from "next/head";
import Image from "next/image";

export default function Kurzgesagt({}) {
  return (
    <>
      <Head>
        {/* Make a dot in between Erich Lehmann and CV */}
        <title>Lehmann Podcast</title>
      </Head>
      <div className="bg-black">
        <main className="mx-auto max-w-5xl bg-black text-white py-24">
          <div className="flex">
            <div place="left" className="grid content-center ">
              <Image
                src="/lehmannpod.svg"
                alt="Lehmann Podcast"
                width={300}
                height={100}
              />
              <div className="text-lg">
                Conversations about philosophy, science and business.
              </div>
              <div className="flex gap-2 mt-8 ">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-14 bg-zinc-900 rounded text-center hover:bg-zinc-800 transition-all"
                  >
                    <p className="mb-1 font-medium text-sm">Watch on</p>
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={100}
                      height={50}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div place="right" className="max-w-sm mx-auto">
              <img
                src="/erich-lehmann-darkbg.jpg"
                alt="Erich Lehmann"
                className="h-full"
              />
            </div>
          </div>
        </main>
        <div className="grid grid-cols-10 gap-1 max-h-[290px] overflow-hidden max-w-screen-xl mx-auto rounded">
          <img
            src="/people/rainer.png"
            alt="Rainer Maria Schiessler"
            className="col-span-4"
          />
          <img src="/people/joern.png" alt="Joern" className="col-span-2" />
          <img src="/people/coletta.png" alt="Coletta" className="col-span-2" />
          <img src="/people/jost.png" alt="Jost" className="col-span-2" />
        </div>
        <main className="mx-auto max-w-5xl grey text-white py-48">
          <div className="flex">
            <div place="left" className="grid content-center max-w-lg">
              <div className="text-lg font-bold">
                The Lehmann Podcast is an unguarded exploration into the stories of people
                who have shaped industries, defined culture and achieved greatness.
              </div>
              <div className="text-base mt-4">
                Erich Lehmann, a thriving entrepreneur and esteemed Y Combinator alumnus,
                invites some of the most impactful people, scholars, and founders to join
                him on a quest driven by pure curiosity.
              </div>
              <div className="text-base mt-4">
                The Lehmann Podcast is special because it's honest. Conversations
                transcends the usual confines of an interview - at best it's a
                conversation that is both captivating and educational.
              </div>
            </div>
            <div place="right" className="max-w-sm grid mx-auto">
              <img src="/people/erich.png" alt="Erich Lehmann" className="rounded" />
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-5xl grey text-white py-12">footer</div>
        </footer>
      </div>
    </>
  );
}

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/3Upxs0s95HvbKHqLld5UrO?si=b4509a8c2eb74266",
    logo: "/logos/spotify.svg",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCpSRQYhdyxc-wSa-zpeCKfw",
    logo: "/logos/youtube.svg",
  },
];
