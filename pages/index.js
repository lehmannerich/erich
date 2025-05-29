import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Script from "next/script";
import { Headline, Main, TextBlock } from "../components/Structure";

function Home() {
  return (
    <>
      <Main>
        <Headline>Erich Lehmann</Headline>
        <TextBlock>
          <p>Here, in short, is who I am.</p>
          <p>
            I think deeply about what it means to live a good life. I enjoy building
            things that people love. As a founder I built two successful companies from
            the ground up. I can code, I can sell and I have never stopped learning.
          </p>
          <p>
            Currently, I'm applying to OpenAI. So, if you're from OpenAI... hello! You are
            on my personal website. You can get to know me here or check out a{" "}
            <a
              href="https://reel-rose.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              reel
              <ArrowTopRightOnSquareIcon className="h-4 w-4 inline pb-1 ml-1" />
            </a>{" "}
            on all the reasons you should hire me that I vibe coded.
          </p>
        </TextBlock>
        <Headline>Experience</Headline>
        <TextBlock>
          {experience.map((exp, i) => (
            <div
              key={i}
              className="border rounded p-4 text-sm flex flex-col sm:flex-row gap-4 print:border-gray-300 print:break-inside-avoid"
            >
              {exp.img && (
                <div className="w-full sm:w-auto max-w-[40px] print:hidden">
                  <Image
                    src={exp.img}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    alt={exp.company}
                  />
                </div>
              )}
              <div className="w-full">
                <p className="font-medium">
                  {exp.title} @ {exp.company}
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noreferrer">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 inline pb-1 m-1 text-stone-500 hover:text-stone-800" />
                    </a>
                  )}
                </p>
                <p className="text-stone-500">
                  {exp.date} · {exp.time}
                </p>
                <p className="mt-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </TextBlock>
        <Headline>Education</Headline>
        <TextBlock>
          {education.map((edu, i) => (
            <div
              key={i}
              className="border rounded p-4 text-sm flex flex-col sm:flex-row gap-4 print:border-gray-300 print:break-inside-avoid"
            >
              {edu.img && (
                <div className="w-full sm:w-auto max-w-[40px] print:hidden">
                  <Image
                    width={40}
                    height={40}
                    src={edu.img}
                    className="h-10 w-10 rounded-sm"
                    alt={edu.school}
                  />
                </div>
              )}
              <div className="w-full">
                <p className="font-medium">
                  {edu.degree}{" "}
                  {edu.link && (
                    <a href={edu.link} target="_blank" rel="noreferrer">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 inline pb-1 m-1 text-stone-500 hover:text-stone-800" />
                    </a>
                  )}
                </p>
                <p className="text-stone-500">
                  {edu.school} {edu.date}
                </p>
              </div>
            </div>
          ))}
        </TextBlock>
        <Headline>Publications</Headline>
        <TextBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {essays.map((essay, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm print:break-inside-avoid"
              >
                <Image
                  src="/logos/substack.png"
                  width={20}
                  height={20}
                  className="h-5 w-5 mt-0.5 flex-shrink-0 print:hidden"
                  alt="Substack"
                />
                <div className="min-w-0">
                  <p className="font-medium truncate">
                    {essay.title}
                    <a href={essay.link} target="_blank" rel="noreferrer">
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 inline pb-0.5 ml-1 text-stone-500 hover:text-stone-800" />
                    </a>
                  </p>
                </div>
              </div>
            ))}
            {podcasts.map((podcast, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm print:break-inside-avoid"
              >
                <Image
                  src="/logos/youtube.png"
                  width={20}
                  height={20}
                  className="h-5 w-5 mt-0.5 flex-shrink-0 print:hidden"
                  alt="YouTube"
                />
                <div className="min-w-0">
                  <p className="font-medium truncate">
                    {podcast.title}
                    <a href={podcast.link} target="_blank" rel="noreferrer">
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 inline pb-0.5 ml-1 text-stone-500 hover:text-stone-800" />
                    </a>
                  </p>
                  <p className="text-stone-500 text-xs">{podcast.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TextBlock>
        <Headline>Contact</Headline>
        <TextBlock>
          <div className="text-sm flex flex-wrap gap-2 sm:gap-4 print:gap-4">
            {contact.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-black transition print:text-black"
              >
                {c.name}
                <ArrowTopRightOnSquareIcon className="h-4 w-4 inline pb-1 print:hidden" />
              </a>
            ))}
          </div>
        </TextBlock>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8270843836660200"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </Main>
    </>
  );
}

const contact = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/erichlehmann/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/lehmannerich",
  },
  {
    name: "Substack",
    link: "https://substack.com/profile/1536365-erich-lehmann",
  },
  {
    name: "Github",
    link: "https://github.com/lehmannerich/",
  },
  {
    name: "Podcast",
    link: "/podcast",
  },
  {
    name: "Email",
    link: "mailto:erichjohannlehmann@gmail.com",
  },
];

const getTimeFromJan2018 = () => {
  const jan2018 = new Date(2018, 0, 1);
  const today = new Date();
  const diff = today - jan2018;
  const diffInDays = diff / (1000 * 60 * 60 * 24);
  const diffInYears = diffInDays / 365;
  const diffInMonths = diffInDays / 30;
  const years = Math.floor(diffInYears);
  const months = Math.floor(diffInMonths - years * 12);
  return `${years} yrs ${months} mos`;
};

const experience = [
  {
    company: "DieForschungszulage",
    title: "Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Present", // Placeholder date
    time: "", // Placeholder time
    link: "https://www.dieforschungszulage.de/",
    img: "/diefz.png",
  },
  {
    company: "MeetAnyway",
    title: "Co-Founder",
    description:
      "MeetAnyway helps researchers to organize online conferences. Some of the most renowned reasearch institutes in the world are our customers. I co-founded it with 2 friends in 2018. We have over 30,000 users. I am Co-CEO, which means I am responsible for product and sales. I learned how to ship products fast with a  very small team. I learned to sell to large organizations. I also discovered the value of regular usability testing, which is a fundamental thing to do when you try to build something your users love.",
    date: "Jan 2018 - Present",
    time: getTimeFromJan2018(),
    link: "https://www.ycombinator.com/companies/meetanyway",
    img: "/MA.jpg",
  },
  {
    company: "Academy Ventures",
    title: "Founder",
    date: "2016 - 2018",
    description:
      "Studipost was a free messenger for teachers and parents. I founded this alone, raised some money and hired an agency to build it with me. I made many 'first-time-founder' mistakes and learned from them. The app never grew fast enough. Moreover, I couldn't figure out how to shorten the sales cycle when dealing with schools. Eventually, I had to close it down. Still, I'm proud of it - it provided value to over 4000 people.",
    time: "2 yrs",
    img: "/AV.jpg",
  },
  {
    company: "Deloitte Digital",
    title: "Venture Architect",
    description:
      "Deloitte Digital helps German DAX companies build new businesses. I was employee #3 - by the time I left it was a team of 40. I learned from so many wonderful people here. I discovered that I want to start my own thing and took the plunge to become a founder.",
    date: "2014 - 2016",
    time: "2 yrs",
    link: "https://www.deloittedigital.com/",
    img: "/DD.jpg",
  },
];

const education = [
  {
    school: "Ludwig-Maximilians-Universität München",
    degree: "Bachelor of Science, Business Administration",
    date: "2010 - 2014",
    img: "/LMU.jpg",
    link: "https://www.som.lmu.de/en/index.html",
  },
  {
    school: "Y Combinator",
    degree: "Alumni of Batch W21",
    date: "",
    img: "/YC.jpg",
    link: "https://www.ycombinator.com/why",
  },
];

const essays = [
  {
    title: "The Thousand Brains Theory",
    link: "https://buildingher.substack.com/p/the-thousand-brains-theory",
  },
  {
    title: "Bookshelf 2022",
    link: "https://erich.substack.com/p/bookshelf-2022",
  },
  {
    title: "The basics of predictive processing",
    link: "https://buildingher.substack.com/p/predictive-processing",
  },
  {
    title: "The right kind of optimism",
    link: "https://erich.substack.com/p/the-right-kind-of-optimism",
  },
];

const podcasts = [
  {
    title: "Johannes Hartl: Sinn des Lebens, Freier Wille, Wer ist Gott?",
    description: "129,480 Views",
    link: "https://youtu.be/G-QTQxhCzHE?si=X0NpqACvn4w0_KcY",
  },
  {
    title: "Hermann Simon: Deutschlands Zukunft und Hidden Champions",
    description: "85,706 Views",
    link: "https://youtu.be/qjp3yKTa-lc?si=ZLzBXy2Th3ORrzR_",
  },
  {
    title:
      "Pfarrer Rainer M. Schießler: Zölibat, Synodaler Weg, Was ist ein gutes Leben?",
    description: "55,995 Views",
    link: "https://youtu.be/RKajbUdXB_U?si=F-wdKLPRMsX5wkmI",
  },
];

const showLinks = false;

export default Home;
