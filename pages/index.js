import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <div className="pt-12">
        <Headline>Erich Lehmann</Headline>

        <TextBlock>
          <p>Here, in short, is who I am.</p>
          <p>
            I think a lot about what it means to live a good life. I love having
            intellectual conversations. I&#39;ve built many products - one of them became
            really successful. I can code, I can write, and I have never stopped learning.
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
                  <img src={exp.img} className="h-10 w-10" alt={exp.compnany} />
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
                  <img src={edu.img} className="h-10 w-10 rounded-sm" alt={edu.school} />
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
              <ArrowRightIcon className="h-5 w-5 inline pb-1 text-neutral-400 group-hover:text-neutral-800 transition" />
            </a>
          ))}
        </TextBlock>
      </div>
    </main>
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
    img: "https://media.licdn.com/dms/image/C4D0BAQGFz3EX7ftAuA/company-logo_100_100/0/1613729179057?e=1689206400&v=beta&t=HTu9zYZRM9qGq-oYrUlinPwhDtq54PSCBsHLKinSNqE",
  },
  {
    company: "Academy Ventures",
    title: "Founder",
    date: "2016 - 2018",
    time: "2 yrs",
    img: "https://media.licdn.com/dms/image/C4E0BAQHxK9OOoZrl4Q/company-logo_100_100/0/1519884749536?e=1689206400&v=beta&t=Y0Pv5CTpa8Udwilj_5iLodGsNnadfLy-ARwHVjN3fog",
  },
  {
    company: "Deloitte Digital",
    title: "Venture Architect",
    date: "2014 - 2016",
    time: "2 yrs",
    img: "https://media.licdn.com/dms/image/C510BAQG9x6s0x5PIxw/company-logo_100_100/0/1519904069133?e=1689206400&v=beta&t=0uA-fcEPHZWzwJ-QNV06HWtZuLMfbBtNZ6_3OL3FFBw",
  },
];

const education = [
  {
    school: "Ludwig-Maximilians-Universität München",
    degree: "Bachelor of Science, Business Administration and Management",
    date: "2010 - 2014",
    img: "https://media.licdn.com/dms/image/C4D0BAQH_R0ADkfGotA/company-logo_100_100/0/1626421339943?e=1689206400&v=beta&t=aVj_pT5YCGwa9gRq_wtv4bkFFj63hyTugY_Jz8QqmoI",
  },
  {
    school: "Y Combinator",
    degree: "Alumni of Batch W21",
    date: "",
    img: "https://media.licdn.com/dms/image/C4D0BAQGPzdBPNxrmEg/company-logo_100_100/0/1673555092951?e=1689206400&v=beta&t=OQm7hEnhq8PenmwQRmNOC0Gy5NPF9srbNuCC9Bd3ACg",
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

const showLinks = false;

export default Home;
