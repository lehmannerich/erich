import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Headline, Main, TextBlock } from "../components/Structure";

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
          geworden. Es hat Spaß gemacht eurer Erfolgsgeschichte zuzuschauen. Ihr seid von
          einer kleinen Agentur zu einer riesen Plattform geworden. So viele Menschen
          haben in euren Video gesehen was ich auch sehe: eine Liebe für Wissen, Neugierde
          und Philosophie.
        </TextBlock>
        <TextBlock>
          Auch ich war fleißig in der Zeit. Ich habe mein BWL Studium abgeschlossen und
          wurde ein Unternehmensberater bei Deloitte Digital. Ich habe schnell gemerkt,
          dass ich lieber mein eigenes Ding machen möchte. Ich habe mir beigebracht zu
          Programmieren und habe zwei Unternehmen gegründet. Eines davon war sogar richtig
          erfolgreich.
        </TextBlock>
        <div className="-mb-6">
          <Headline>
            Ich bewerbe mich für die Stelle als Senior Project Manager.
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
          Ich will euch dabei helfen, Dinge zu schaffen, die eure Fans lieben.
        </TextBlock>
        <TextBlock>
          Der Erfolg des Shops ist wirklich großartig! Aber er bring viele Aufgaben mit
          sich. Es gibt Zeitpläne zu erstellen, Lieferanten zu managen, KPIs zu berechnen…
          alles mit reichlich Weitblick und Fürsorge, damit reichlich Platz für
          Kreativität bleibt. Ich denke, dass ich das gut hinbekommen würde.
        </TextBlock>
        <TextBlock>
          Aber noch wichtiger ist, wenn Ihr mir den Vorschlag gestattet, dass ich gut
          darin wäre Produkte zu bauen, die eine wiederkehrende Einnahmequelle schaffen.
          Ihr habt Fans, die euch richtig toll finden und euch regelmäßig unterstützen
          wollen. Man sieht es am Patreon Account. Es ist nicht undenkbar ein kurzgesagt
          Produkt zu entwickeln, dass sogar euren Kalender überholt. Wer weiß, vielleicht
          ist das Game an dem ihr gerade arbeitet ja schon genau das. In jedem Fall gibt
          es hier viele Chancen.
        </TextBlock>
        <Headline>Produktentwicklung ist etwas, das ich wirklich gut kann.</Headline>
        <TextBlock>
          Ich baue seit über 10 Jahren Produkte - zuerst ganz alleine neben dem Studium,
          und dann ganz professionell mit einem Team und echten Kunden. Das erfolgreichste
          Produkt das ich gebaut habe ist MeetAnyway, eine Plattform für
          Online-Veranstaltungen. Wir hatten über 30.000 Teilnehmer und haben bis zu
          40.000 € pro Veranstaltung verdient. Ich habe MeetAnyway mit zwei Freunden
          gegründet und war hauptsächlich für Produkt und Sales verantwortlich. Wir wurden
          vom Y Combinator aufgenommen. YC hat mir nochmal einen Wissensschub gegeben
          darin, wie man Produkte baut, die Menschen wirklich haben wollen.
        </TextBlock>
        <TextBlock>
          Letztendlich können nur eure Fans sagen, was die richtigen nächsten Schritte
          sind. Ich wette, dass es manchmal einen Konflikt gibt zwischen eurer Mission
          (Wissenschaft für alle frei zugänglich zu machen) und harten wirtschaftlichen
          Realitäten (60 Personen, die ihren Lebensunterhalt verdienen müssen). Die
          Herausforderung eines Project Managers besteht hier darin Geld zu verdienen ohne
          jemals auch nur im Geringsten das Vertrauen zu beeinträchtigen, das kurzgesagt
          bei seinen Fans aufgebaut hat.
        </TextBlock>
        <TextBlock>
          Als ein solcher Fan würde ich die Herausforderung gerne in Angriff nehmen.
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
