import Image from "next/image";
import FloatingSVG from "../components/FloatingSVG/FloatingSVG";
import { Headline, Main, TextBlock } from "../components/Structure";

export default function Kurzgesagt({}) {
  return (
    <>
      <FloatingSVG svgPath="/HR_Birb.svg" />
      <Main>
        {/* <img src="/HR_Birb.svg" alt="HR_Birb" /> */}
        <Headline>
          Hello Isabella, <br></br> Hello Kurzgesagt,
        </Headline>

        <TextBlock>
          <p>A huge fan here.</p>
          <p>
            Going through my YouTube history, I found the first video that caught my
            attention:
          </p>
          <Image
            src="/YT.png"
            width={1280}
            height={720}
            className="rounded border my-4 shadow-md"
            alt="Kurzgesagt Screenshot"
          />
        </TextBlock>
        <TextBlock>
          That was back in 2015. So much has changed since then. Your audience has
          expanded from a couple of thousands to several million viewers. I finished my
          studies and became a founder.
        </TextBlock>
        <Headline>I’m applying for the Senior Product Manager role.</Headline>
        <TextBlock>
          I think I can help Kurzgesagt with making things your fans love and find a way
          to create a recurring revenue stream. The success of the calendar and shop is
          really great! It speaks to the wonderful fanbase you have. But unfortunately
          it’s not strictly recurring. Patreon is the only recurring income you currently
          have, which makes planning difficult. It’s not totally unreasonable to aim for
          creating a product that blows the calendar revenue out of the water AND is
          recurring.
        </TextBlock>
      </Main>
    </>
  );
}
