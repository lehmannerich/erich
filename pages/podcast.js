import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Kurzgesagt({}) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Different depths for different layers:
  const depth1 = 0;
  const depth2 = -0.2;
  const depth3 = -0.3;
  const depth4 = -0.4;
  const maxScroll = 50;

  // Then limit the translateY values:
  const translateY1 = Math.min(offsetY * depth1, maxScroll);
  const translateY2 = Math.min(offsetY * depth2, maxScroll);
  const translateY3 = Math.min(offsetY * depth3, maxScroll);
  const translateY4 = Math.min(offsetY * depth4, maxScroll);

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
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUw8AAd0BLYXeJFEAAAAASUVORK5CYII="
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
        <div className="grid grid-cols-10 gap-1 max-h-[290px] max-w-screen-xl mx-auto ">
          <motion.img
            src="/people/rainer.png"
            alt="Rainer Maria Schiessler"
            className="col-span-6 md:col-span-4 rounded"
            style={{ transform: `translateY(${translateY1}px)` }}
          />
          <motion.img
            src="/people/joern.png"
            alt="Joern"
            className="col-span-4 md:col-span-2 rounded"
            style={{ transform: `translateY(${translateY2}px)` }}
          />
          <motion.img
            src="/people/coletta.png"
            alt="Coletta"
            className="col-span-5 md:col-span-2 rounded"
            style={{ transform: `translateY(${translateY3}px)` }}
          />
          <motion.img
            src="/people/jost.png"
            alt="Jost"
            className="col-span-5 md:col-span-2 rounded"
            style={{ transform: `translateY(${translateY4}px)` }}
          />
        </div>

        <motion.div className="mx-auto max-w-5xl grey text-white py-8 pt-20 md:pt-48 px-4">
          {
            <div className="grid gap-2 md:gap-6">
              {reviews.map((review) => (
                <motion.img
                  key={review.path}
                  src={review.path}
                  alt="review"
                  className="rounded"
                  // fly in from the left but only when it scroll is more than 50
                  initial={{ x: -100, opacity: 0 }}
                  // add transition speed
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
                  }}
                  // animate={{ x: 0, opacity: 1 }}
                />
              ))}
            </div>
          }
        </motion.div>

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
            <div place="left" className="grid gap-4">
              <div className="text-lg font-bold mt-8">
                The Lehmann Podcast is an unguarded exploration into the stories of people
                who have shaped industries and defined culture.
              </div>
              <div className="text-base">
                Erich Lehmann, a successful founder and esteemed Y Combinator alumnus,
                invites some of the most impactful people, scholars, and founders to join
                him on a quest driven by pure curiosity.
              </div>
              <div className="text-base">
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

const reviews = [
  {
    path: "/reviews/e1.png",
  },
  {
    path: "/reviews/e2.png",
  },
  {
    path: "/reviews/e3.png",
  },
  {
    path: "/reviews/e4.png",
  },
];

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
