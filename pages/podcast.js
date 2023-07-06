import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Headline, Main, TextBlock } from "../components/Structure";

export default function Kurzgesagt({}) {
  return (
    <>
      <Main>
        <Headline>Lehmann Podcast</Headline>
        <TextBlock>
          <p>Conversations about philosophy, science and business.</p>
        </TextBlock>
        <TextBlock>
          <iframe
            className="rounded-lg h-[220px] sm:h-[400px]"
            width="100%"
            src="https://www.youtube.com/embed/Jf0Y2FiL2XM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </TextBlock>

        <Headline>Here, in short, is who I am. </Headline>
        <TextBlock>
          <p>
            I think a lot about what it means to live a good life. I enjoy building things
            that people love. I built two companies from the ground up - one of them
            became really successful.
          </p>
          <p>
            This podcast is something I wanted to start for a long time now. It gives me
            an excuse to talk to wonderfully interesting people. And my motivation is
            really only that - talk to interesting people and learn from them.
          </p>
        </TextBlock>

        <Headline>People enjoy genuine conversations.</Headline>
        <TextBlock>
          <p>
            I want to show you something. This is the graph of the very first episode:
          </p>
          <Image
            src="/YT.png"
            width={1280}
            height={720}
            className="rounded border my-4 shadow-md"
            alt="Kurzgesagt Screenshot"
          />
          <p>Mind you, this is a 2 hour long conversation about ...</p>
        </TextBlock>

        <Headline>Links</Headline>
        <TextBlock>
          <div className="text-sm flex gap-4">
            {contact.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-black transition"
              >
                {c.name}
                <ArrowTopRightOnSquareIcon className="h-4 w-4 inline pb-1" />
              </a>
            ))}
          </div>
        </TextBlock>
      </Main>
    </>
  );
}
const contact = [
  {
    name: "Erich's CV",
    link: "https://erich.vercel.app/",
  },
  {
    name: "Podcast on Spotify",
    link: "https://open.spotify.com/show/3Upxs0s95HvbKHqLld5UrO?si=b4509a8c2eb74266",
  },
  {
    name: "Podcast on YouTube",
    link: "https://www.youtube.com/channel/UCpSRQYhdyxc-wSa-zpeCKfw",
  },
];
