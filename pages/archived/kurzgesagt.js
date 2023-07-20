import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Headline, Main, TextBlock } from "../../components/Structure";

export default function Kurzgesagt({}) {
  return (
    <>
      <Main>
        <Headline>
          Liebe Isabella, <br></br> Liebes kurzgesagt Team,
        </Headline>

        <TextBlock>
          <p>vor 8 Jahren habe ich zum ersten Mal ein Video von euch gesehen:</p>
          <Image
            src="/YT.png"
            width={1280}
            height={720}
            className="rounded border my-4 shadow-md"
            alt="Kurzgesagt Screenshot"
          />
        </TextBlock>
        <TextBlock>
          Das war 2015. Seitdem schaue ich eure Videos regelmäßig und bin ein Fan
          geworden. Es hat Spaß gemacht, eurer Erfolgsgeschichte zuzuschauen. Ihr seid von
          einer kleinen Agentur zu einer sehr großen Plattform herangewachsen. So viele
          Menschen haben in euren Videos gesehen, was ich auch sehe: eine Liebe für
          Wissen, Neugierde und Philosophie.
        </TextBlock>
        <TextBlock>
          Auch ich war fleißig in der Zeit. Ich habe mein BWL-Studium abgeschlossen und
          wurde ein Unternehmensberater bei Deloitte Digital. Ich habe schnell gemerkt,
          dass ich lieber mein eigenes Ding machen möchte. Deshalb habe ich mir
          beigebracht zu programmieren und habe zwei Unternehmen gegründet. Eines davon
          war richtig erfolgreich.
        </TextBlock>
        <div className="-mb-6">
          <Headline>
            Ich möchte mich für die Stelle als Senior Project Manager bewerben.
            <Image
              src="/HR_Birb.svg"
              width={40}
              height={40}
              className="inline ml-3 pb-6"
              alt="HR_Birb"
            />
          </Headline>
        </div>
        <TextBlock>
          Mit anderen Worten: ich will euch dabei helfen Produkte zu entwickeln, die eure
          Fans begeistern.
        </TextBlock>
        <TextBlock>
          Der großartige Erfolg eures Shops ist beeindruckend, aber natürlich auch mit
          viel Arbeit verbunden. Der Drop neuer Produkte muss geplant werden, Zeitpläne
          müssen mit Lieferanten abgestimmt werden und am Ende muss geschaut werden, ob
          die Fans zufrieden sind und die Produkte profitabel waren. Ich bewerbe mich bei
          euch, weil ich diese Arbeit gut machen würde.
        </TextBlock>
        <TextBlock>
          Aber noch wichtiger ist, dass ich gut darin wäre neue Produkte für eure Fans zu
          entwickeln. Ich lege hier ein besonderes Augenmerk auf digitale Produkte mit
          wiederkehrenden Einnahmequellen. An eurem Patreon Account sieht man, dass viele
          Menschen euch regelmäßig unterstützen wollen. Obwohl es nur ein Zehntel der
          Einnahmen ausmacht, ist es eine der wichtigsten Einnahmequellen, weil sie so
          verlässlich ist. Es ist nicht undenkbar ein kurzgesagt Produkt zu entwickeln,
          das sogar euren Kalender überholt und gleichzeitig &#39;monthly recurring&#39;
          ist. Wer weiß, vielleicht erfüllt das Game an dem ihr gerade arbeitet ja schon
          genau diesen Zweck. In jedem Fall sehe ich hier viele Chancen.
        </TextBlock>
        <Headline>Ich baue schon seit über 10 Jahren digitale Produkte -</Headline>
        <TextBlock>
          zuerst ganz alleine als Freelancer neben dem Studium, und dann ganz
          professionell in verschiedenen Teams und für anspruchsvolle Kunden. Das
          erfolgreichste Produkt das ich gebaut habe ist MeetAnyway, eine Plattform für
          Online-Veranstaltungen. Wir hatten über 30.000 Teilnehmer und unsere Plattform
          wurde von renommierten Instituten genutzt, wie das Max-Planck-Institut oder der
          Fraunhofer Gesellschaft. Ich habe MeetAnyway mit zwei Freunden gegründet und war
          für das Produkt und für Sales verantwortlich.
        </TextBlock>
        <TextBlock>
          Die Herausforderung eines Project Managers besteht hier darin Geld zu verdienen
          ohne jemals das Vertrauen der Fan zu beeinträchtigen. Ganz im Gegenteil - am
          besten schafft es jedes Produkt das Vertrauen der Fans in kurzgesagt noch weiter
          zu festigen. Als ein solcher Fan würde ich die Herausforderung gerne in Angriff
          nehmen.
        </TextBlock>
        <TextBlock>Viele Grüße</TextBlock>
        <TextBlock>
          {" "}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="-m-2 p-2 rounded flex items-center gap-2 group hover:bg-stone-50 hover:px-4 transition-all"
          >
            <div>
              <p className="">Erich Lehmann</p>
            </div>
            <ArrowUpRightIcon className="h-4 w-4 inline text-neutral-400 group-hover:text-neutral-800 transition print:invisible" />
          </a>{" "}
        </TextBlock>
      </Main>
    </>
  );
}
