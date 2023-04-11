import { ArrowTopRightOnSquareIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Home() {
  return (
    <>
      <main className="mx-auto max-w-2xl p-4">
        <div className="pt-10 print:pt-0">
          <Headline>Erich Lehmann</Headline>

          <TextBlock>
            <p>Here, in short, is who I am.</p>
            <p>
              I think a lot about what it means to live a good life. I love having
              intellectual conversations. I&#39;ve built many products - one of them
              became really successful. I can code, I can write, and I have never stopped
              learning.
            </p>
            <p>Of these, the most important is that I have never stopped learning.</p>
          </TextBlock>

          <Headline>
            Experience{" "}
            {showLinks && (
              <a href="https://www.linkedin.com/in/erichlehmann/">
                <ArrowTopRightOnSquareIcon className="h-5 w-5 inline pb-1" />
              </a>
            )}
          </Headline>
          <TextBlock>
            {experience.map((exp, i) => (
              <div key={i} className="border rounded p-4 text-sm flex gap-4 items-center">
                {exp.img && (
                  <div>
                    <Image
                      src={exp.img}
                      width={40}
                      height={40}
                      className="h-10 w-10"
                      alt={exp.company}
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium">
                    {exp.title} @ {exp.company}
                  </p>
                  <p className="text-stone-500">
                    {exp.date} · {exp.time}
                  </p>
                </div>
              </div>
            ))}
          </TextBlock>
          <Headline>
            Education{" "}
            {showLinks && (
              <a href="https://www.linkedin.com/in/erichlehmann/">
                <ArrowTopRightOnSquareIcon className="h-5 w-5 inline pb-1" />
              </a>
            )}
          </Headline>
          <TextBlock>
            {education.map((edu, i) => (
              <div key={i} className="border rounded p-4 text-sm flex gap-4 items-center">
                {edu.img && (
                  <div>
                    <Image
                      width={40}
                      height={40}
                      src={edu.img}
                      className="h-10 w-10 rounded-sm"
                      alt={edu.school}
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-stone-500">
                    {edu.school} {edu.date}
                  </p>
                </div>
              </div>
            ))}
          </TextBlock>
          <Headline>Experiments</Headline>
          <TextBlock>
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm -m-2 p-2 rounded flex items-center justify-between group hover:bg-stone-50 hover:px-4 transition-all"
              >
                <div>
                  <p className="font-medium">{project.title}</p>
                  <p className="text-stone-500">{project.description}</p>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 group-hover:h-5 group-hover:w-5 inline pb-1 text-neutral-400 group-hover:text-neutral-800 transition" />
              </a>
            ))}
          </TextBlock>
          <Headline>Essays</Headline>
          <TextBlock>
            {essays.map((essay, i) => (
              <a
                key={i}
                href={essay.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm -m-2 p-2 rounded flex items-center justify-between group hover:bg-stone-50 hover:px-4 transition-all"
              >
                <div>
                  <p className="font-medium">{essay.title}</p>
                  <p className="text-stone-500">{essay.description}</p>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 group-hover:h-5 group-hover:w-5 inline pb-1 text-neutral-400 group-hover:text-neutral-800 transition" />
              </a>
            ))}
          </TextBlock>
        </div>
      </main>
      <footer>
        <div className="h-32"></div>
      </footer>
    </>
  );
}

function Headline({ children }) {
  return <h2 className="font-bold mt-12">{children}</h2>;
}

function TextBlock({ children }) {
  return <div className="font-light flex flex-col gap-4 mt-4">{children}</div>;
}

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
    company: "MeetAnyway",
    title: "Co-Founder",
    date: "Jan 2018 - Present",
    time: getTimeFromJan2018(),
    img: "/MA.jpg",
  },
  {
    company: "Academy Ventures",
    title: "Founder",
    date: "2016 - 2018",
    time: "2 yrs",
    img: "/AV.jpg",
  },
  {
    company: "Deloitte Digital",
    title: "Venture Architect",
    date: "2014 - 2016",
    time: "2 yrs",
    img: "/DD.jpg",
  },
];

const education = [
  {
    school: "Ludwig-Maximilians-Universität München",
    degree: "Bachelor of Science, Business Administration and Management",
    date: "2010 - 2014",
    img: "/LMU.jpg",
  },
  {
    school: "Y Combinator",
    degree: "Alumni of Batch W21",
    date: "",
    img: "/YC.jpg",
  },
];

const essays = [
  {
    title: "The Thousand Brains Theory",
    link: "https://buildingher.substack.com/p/the-thousand-brains-theory",
  },
  {
    title: "The basics of predictive processing",
    link: "https://buildingher.substack.com/p/predictive-processing",
  },
  {
    title: "The right kind of optimism",
    link: "https://erich.substack.com/p/the-right-kind-of-optimism",
  },
  {
    title: "Bookshelf 2022",
    link: "https://erich.substack.com/p/bookshelf-2022",
  },
];

const projects = [
  {
    title: "Negotiation Simulator",
    description: "Next.js, Tailwind, Typescript, OpenAI GPT-4",
    link: "https://next-chatbot-one.vercel.app/",
  },
  {
    title: "Talk to Books",
    description:
      "Next.js, Tailwind, Typescript, Supabase, OpenAI Embeddings, OpenAI GPT-3.5",
    link: "https://library-gpt.vercel.app/",
  },
];

const showLinks = false;

export default Home;
