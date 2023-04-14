import Image from "next/image";
import { Headline, Main, TextBlock } from "../components/Structure";

export default function Kurzgesagt({}) {
  return (
    <>
      <Main>
        {/* <img src="/HR_Birb.svg" alt="HR_Birb" /> */}
        <Headline>
          Liebe Isabella, <br></br> Liebes kurzgesagt Team,
        </Headline>

        <TextBlock>
          <p>ich bin ein großer Fan.</p>
          <p>
            Meine YouTube History zeigt das erste Video, welches meine Neugierde entfacht
            hat:
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
          Das war 2015. Seitdem ist viel passiert. Eure Fanbase ist von Tausenden auf
          Millionen gewachsen. Ich habe zwei Unternehmen gegründet und bin ein Experte
          darin geworden neue Produkte zu bauen.
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
          Der Erfolg des Shops ist wirklich großartig! Es gibt Zeitpläne zu erstellen und
          Lieferanten zu verwalten, KPIs zu berechnen… alles mit genügend Weitblick und
          Fürsorge, damit reichlich Platz für Kreativität bleibt. Ich denke, dass ich das
          gut hinbekommen würde.
        </TextBlock>
        <TextBlock>
          Aber noch wichtiger ist, wenn Ihr mir den Vorschlag gestattet, dass ich gut
          darin wäre Produkte zu bauen die eine wiederkehrende Einnahmequelle schaffen.
          Offensichtlich habt ihr Fans die euch richtig toll finden und euch regelmäßig,
          monatlich oder jährlich, unterstützen wollen. Man sieht es am Patreon account.
          Es ist nich unvorstellbar ein kurzgesagt Produkt zu entdecken, dass sogar den
          Kalender überholt. Wer weiß, vielleicht ist das Game an dem ihr arbeitet ja
          schon genau das. In jedem Fall denke ich, dass es noch viel zu Experimentieren
          und Entdecken gibt.
        </TextBlock>
        <Headline>Produktentwicklung ist etwas, das ich wirklich gut kann.</Headline>
        <TextBlock>
          Ich baue seit über 10 Jahren Produkte - zuerst ganz alleine, neben dem Studium,
          und dann ganz professionell mit einem Team und echten Kunden. Das erfolgreichste
          Produkt, das ich gebaut habe, ist MeetAnyway, eine Plattform für
          Online-Veranstaltungen. Wir hatten über 30.000 Teilnehmer und haben bis zu
          40.000 € pro Veranstaltung berechnet. Ich habe MeetAnyway mit zwei Freunden
          gegründet und war hauptsächlich für Produkt und Sales verantwortlich. Wir wurden
          vom Y Combinator aufgenommen. YC hat mir nochmal einen Wissensschub gegeben
          darin, wie man Produkte baut, die Menschen wirklich haben wollen.
        </TextBlock>
        <TextBlock>
          Letztendlich können nur eure Fans sagen, was die richtigen Next Steps sind. Ich
          wette, dass es manchmal einen Trade-Off gibt zwischen eurer Mission
          (Wissenschaft für alle frei zugänglich zu machen) und harten wirtschaftlichen
          Realitäten (60 Personen, die ihren Lebensunterhalt verdienen müssen). Die
          Herausforderung eines Project Managers besteht hier darin, Wege zu finden, Geld
          zu verdienen, ohne jemals, auch nur im Geringsten, das Vertrauen zu
          beeinträchtigen, das kurzgesagt bei seinen Fans aufgebaut hat. Vor allem als ein
          solcher Fan würde ich die Stelle gerne in Angriff nehmen.
        </TextBlock>
        <TextBlock>Viele Grüße</TextBlock>
        <TextBlock>Erich Lehmann</TextBlock>
      </Main>
    </>
  );
}
