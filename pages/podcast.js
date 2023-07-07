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
          <div className=" flex">
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
              <div className="flex gap-2 mt-8">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-14 bg-zinc-800 rounded text-center hover:bg-slate-700 transition-all"
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
            <div
              place="right"
              className="max-w-sm grid content-center justify-center mx-auto"
            >
              <img src="/erich-lehmann-darkbg.jpg" alt="Erich Lehmann" />
            </div>
          </div>
        </main>
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
