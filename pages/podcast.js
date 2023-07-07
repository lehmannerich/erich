import Image from "next/image";

export default function Kurzgesagt({}) {
  return (
    <div className="bg-black">
      <main className="mx-auto max-w-5xl bg-black text-white">
        <div className=" flex">
          <div place="left" className="grid content-center">
            <Image src="/lehmannpod.svg" alt="Lehmann Podcast" width={300} height={100} />
            <div className="">Conversations about philosophy, science and business.</div>
            <div className="flex">
              <div className="">Watch on Spotify</div>
              <div>Watch on YouTube</div>
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
  );
}
