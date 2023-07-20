import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Kurzgesagt({}) {
  return (
    <>
      <Head>
        <title>Lehmann Podcast</title>
      </Head>
      <div className="bg-black">
        <main className="mx-auto max-w-5xl bg-black text-white py-8 md:py-24 px-6">
          <div className="md:flex md:flex-row-reverse">
            <div className="max-w-sm mx-auto">
              <Image
                src="/erich-lehmann-darkbg.jpg"
                alt="Erich Lehmann"
                width={1934}
                height={2578}
                className="h-full w-full cover"
              />
            </div>
            <div className="grid content-center ">
              <Image
                src="/lehmannpod.svg"
                alt="Lehmann Podcast"
                width={290}
                height={100}
              />
              <div className="text-lg">
                Conversations about philosophy, science and business.
              </div>
              <Platforms />
            </div>
          </div>
        </main>
        <motion.div className="mx-auto max-w-5xl grey text-white md:py-48 px-4">
          <div className="md:flex md:flex-row-reverse">
            <div place="right" className="max-w-lg grid">
              <Image
                src="/people/erich.png"
                alt="Erich Lehmann"
                className="rounded"
                width={1280}
                height={1042}
              />
            </div>
            <div place="left" className="grid items-center">
              <div className="text-lg font-bold mt-8 md:mt-0">
                The Lehmann Podcast is an unguarded exploration into the stories of people
                who have shaped industries, defined culture and achieved greatness.
              </div>
              <div className="text-base mt-4">
                Erich Lehmann, a successful founder and esteemed Y Combinator alumnus,
                invites some of the most impactful people, scholars, and founders to join
                him on a quest driven by pure curiosity.
              </div>
              <div className="text-base mt-4">
                The Lehmann Podcast is special because it&apos;s honest. Conversations
                transcends the usual confines of an interview - at best it&apos;s a
                conversation that is both captivating and educational.
              </div>
            </div>
          </div>
          <Platforms />
        </motion.div>
        <footer className="mx-auto max-w-5xl grey text-white py-12 md:flex justify-between text-sm px-4">
          <div className="">
            <div className=" uppercase font-extrabold">Lehmann Podcast</div>
            <div className="text-xs text-zinc-500 mt-2">
              Copyright Erich Lehmann 2023, All rights reserved.
            </div>
          </div>
          <div className="text-zinc-500 flex gap-4 font-semibold mt-4">
            <Link href="/" className="underline hover:no-underline">
              About Erich
            </Link>
            {/* <Link href="/imprint" className="hover:underline">
              Imprint
            </Link> */}
          </div>
        </footer>
      </div>
    </>
  );
}

function Platforms() {
  return (
    <div className="flex flex-col md:flex-row gap-2 mt-8 ">
      {platforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-14 bg-zinc-800 rounded text-center hover:bg-zinc-700 transition-all grid justify-center"
        >
          <p className="mb-1 font-medium text-sm">Watch on</p>
          <Image src={platform.logo} alt={platform.name} width={100} height={50} />
        </a>
      ))}
    </div>
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
