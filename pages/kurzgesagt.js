import { Headline, TextBlock } from "../components/Structure";

export default function Kurzgesagt({}) {
  return (
    <>
      <main className="mx-auto max-w-2xl p-4">
        <div className="pt-0 md:pt-10 print:pt-0">
          <Headline>Erich Lehmann</Headline>

          <TextBlock>
            <p>Here, in short, is who I am.</p>
          </TextBlock>
        </div>
      </main>
    </>
  );
}
