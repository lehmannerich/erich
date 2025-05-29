import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { formatDistanceToNow, intervalToDuration } from "date-fns";
import Image from "next/image";
import Script from "next/script";
import { Headline, Link, Main, TextBlock } from "../components/Structure";

function Home() {
  return (
    <>
      <Main>
        <div className="print:hidden">
          <Headline>Erich Lehmann</Headline>
          <TextBlock>
            <p>Here, in short, is who I am.</p>
            <p>
              I think deeply about what it means to live a good life. I enjoy making
              things that people love. I have built two successful companies from the
              ground up. I can code, I can sell and I have never stopped learning.
            </p>
            <p>
              Currently, I'm applying to OpenAI. So, if you are from OpenAI... hello 👋
              I'm glad you made it here! This is my CV and these are{" "}
              <Link href="https://reel-rose.vercel.app/" printBlue={true}>
                18 reasons you should hire me
              </Link>
            </p>
          </TextBlock>
          <Headline>Experience</Headline>
          <TextBlock>
            {experience.map((exp, i) => (
              <div
                key={i}
                className="border rounded p-4 text-sm flex flex-col sm:flex-row gap-4 print:border-gray-400 print:p-3 print:break-inside-avoid"
              >
                {exp.img && (
                  <div className="w-full sm:w-auto max-w-[40px]">
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
                    {exp.title} @{" "}
                    {exp.link ? (
                      <Link href={exp.link} size="small">
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
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
                className="border rounded p-4 text-sm flex flex-col sm:flex-row gap-4 print:border-gray-400 print:p-3 print:break-inside-avoid"
              >
                {edu.img && (
                  <div className="w-full sm:w-auto max-w-[40px]">
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
                    {edu.link ? (
                      <Link href={edu.link} size="small">
                        {edu.school}
                      </Link>
                    ) : (
                      edu.school
                    )}
                  </p>
                  <p className="text-stone-500">
                    {edu.degree} {edu.date && `· ${edu.date}`}
                  </p>
                </div>
              </div>
            ))}
          </TextBlock>
          <Headline>Publications</Headline>
          <TextBlock>
            <div className="flex flex-col gap-2">
              {allPublications.map((item, i) => (
                <div
                  key={item.link || i}
                  className="text-sm flex items-start gap-2 print:break-inside-avoid"
                >
                  <Image
                    src={item.logo}
                    width={16}
                    height={16}
                    className="h-4 w-4 mt-0.5 flex-shrink-0"
                    alt={item.type === "essay" ? "Substack logo" : "YouTube logo"}
                  />
                  <div className="min-w-0 flex-grow">
                    <Link href={item.link} size="small">
                      {item.title}
                    </Link>
                    <span className="text-stone-500 text-xs ml-2">
                      {item.description
                        ? item.description
                        : formatDistanceToNow(new Date(item.date), { addSuffix: true })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TextBlock>
          <Headline>Contact</Headline>
          <TextBlock>
            <div className="text-sm flex flex-wrap gap-2 sm:gap-4 print:gap-4 print:hidden">
              {contact.map((c, i) => (
                <Link key={i} href={c.link} size="small">
                  {c.name}
                </Link>
              ))}
            </div>
            <div className="hidden print:block print:text-sm">
              {contactPrint.map((c, i) => (
                <div key={i} className="mb-1">
                  <span className="font-medium">{c.name}:</span>{" "}
                  <span className="text-stone-600">{c.display}</span>
                </div>
              ))}
            </div>
          </TextBlock>
        </div>

        {/* Print-only two-column layout */}
        <div className="hidden print:block">
          <div className="print-left-column">
            <h1 className="font-bold text-2xl mb-4">Erich Lehmann</h1>
            <div className="mb-6 text-sm">
              <p className="mb-2">Here, in short, is who I am.</p>
              <p>
                I think deeply about what it means to live a good life. I enjoy making
                things that people love. I have built two successful companies from the
                ground up. I can code, I can sell and I have never stopped learning.
              </p>
            </div>
            <h2 className="font-bold text-lg mb-2">Reel</h2>
            <div className="mb-6 text-sm">
              <Link href="https://reel-rose.vercel.app/" printBlue={true} size="small">
                18 reasons you should hire me
              </Link>
            </div>
            <h2 className="font-bold text-lg mb-2">Contact</h2>
            <div className="bg-gray-50 p-3 rounded">
              {contactPrint.map((c, i) => (
                <div key={i} className="mb-1 flex items-center">
                  {c.isFaIcon ? (
                    <FontAwesomeIcon
                      icon={c.icon}
                      className="h-3.5 w-3.5 mr-2 flex-shrink-0 text-gray-600"
                    />
                  ) : (
                    c.icon && (
                      <c.icon className="h-3.5 w-3.5 mr-2 flex-shrink-0 text-gray-600" />
                    )
                  )}
                  <span
                    className="text-stone-600 text-xs"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    {c.display}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="print-right-column">
            <h2 className="font-bold text-lg mt-0 mb-3">Experience</h2>
            <div className="mb-4">
              {experience.map((exp, i) => (
                <div key={i} className="mb-3 text-sm print:break-inside-avoid">
                  <p className="font-medium">
                    {exp.title} @ {exp.company}
                  </p>
                  <p className="text-stone-500 text-xs">
                    {exp.date} · {exp.time}
                  </p>
                  <p className="mt-1 text-xs">{exp.description}</p>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-lg mt-4 mb-3">Education</h2>
            <div className="mb-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="mb-3 text-sm print:break-inside-avoid flex gap-2 items-start"
                >
                  {edu.img && (
                    <div className="flex-shrink-0">
                      <Image
                        src={edu.img}
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-sm"
                        alt={edu.school}
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="font-medium">{edu.school}</p>
                    <p className="text-stone-500 text-xs">
                      {edu.degree} {edu.date && `· ${edu.date}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-lg mt-4 mb-3">Publications</h2>
            <div className="text-xs">
              {allPublications.map((item, i) => (
                <div key={item.link || i} className="mb-1 flex items-start gap-1">
                  <Image
                    src={item.logo}
                    width={12}
                    height={12}
                    className="h-3 w-3 mt-0.5 flex-shrink-0"
                    alt={item.type === "essay" ? "Substack" : "YouTube"}
                  />
                  <div className="flex-grow">
                    <span>{item.title}</span>
                    {item.description && (
                      <span className="text-stone-500 ml-1">· {item.description}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="print-clear"></div>
        </div>

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
    name: "X (Twitter)",
    link: "https://x.com/LehmannErich",
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

const contactPrint = [
  {
    name: "Phone",
    display: "+49 176 209 566 86",
    icon: PhoneIcon,
    isFaIcon: false,
  },
  {
    name: "Email",
    display: "erichjohannlehmann@gmail.com",
    icon: EnvelopeIcon,
    isFaIcon: false,
  },
  {
    name: "LinkedIn",
    display: "linkedin.com/in/erichlehmann",
    icon: faLinkedin,
    isFaIcon: true,
  },
  {
    name: "X (Twitter)",
    display: "x.com/LehmannErich",
    icon: faXTwitter,
    isFaIcon: true,
  },
  {
    name: "Github",
    display: "github.com/lehmannerich",
    icon: faGithub,
    isFaIcon: true,
  },
];

const formatYearsMonths = (durationObject) => {
  const years = durationObject.years || 0;
  const months = durationObject.months || 0;

  let result = "";
  if (years > 0) {
    result += `${years} yr${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    if (result.length > 0) result += " ";
    result += `${months} mo${months > 1 ? "s" : ""}`;
  }

  if (result.length > 0) {
    return result;
  } else {
    if (years === 0 && months === 0 && (durationObject.days || 0) >= 0) {
      return "Less than a month";
    }
    return "";
  }
};

const getDurationToPresent = (startYear, startMonthZeroIndexed) => {
  const startDate = new Date(startYear, startMonthZeroIndexed, 1);
  const today = new Date();
  if (startDate > today) return "";
  const duration = intervalToDuration({ start: startDate, end: today });
  return formatYearsMonths(duration);
};

const experience = [
  {
    company: "DieForschungszulage",
    title: "Founder",
    description:
      "DieForschungszulage is a Service that helps startups get government funding. I closed €400k of deal volume in the first year and built the entire customer base from scratch.",
    date: "Jan 2023 - Present",
    time: getDurationToPresent(2023, 0),
    link: "https://www.dieforschungszulage.de/",
    img: "/diefz.png",
  },
  {
    company: "MeetAnyway",
    title: "Co-Founder",
    description:
      "MeetAnyway helps researchers to organize online conferences. We made over €1M in revenue and had over 30k users in the first two years. I closed over 100 of some of the most renowned research institutes in the world.",
    date: "Jan 2018 - Dec 2024",
    time: "7 yrs",
    link: "https://www.ycombinator.com/companies/meetanyway",
    img: "/MA.jpg",
  },
  {
    company: "Academy Ventures",
    title: "Founder",
    date: "2016 - 2018",
    description:
      "Studipost was a free messenger for teachers and parents. We made it to 4k weekly active users. In the end I couldn't get the business model to work - the sales cycles were too long and not profitable enough.",
    time: "2 yrs",
    img: "/AV.jpg",
  },
  {
    company: "Deloitte Digital",
    title: "Venture Architect",
    description:
      "Deloitte Digital helps German DAX companies build new businesses. I was employee #3 and by the time I left we were a team of 40 and closed 5 really big deals. I was not the closer, but I got to watch from some skilled people do it.",
    date: "2014 - 2016",
    time: "2 yrs",
    link: "https://www.deloittedigital.com/",
    img: "/DD.jpg",
  },
];

const education = [
  {
    school: "Y Combinator",
    degree: "Alumnus of Batch W21",
    date: "",
    img: "/YC.jpg",
    link: "https://www.ycombinator.com/why",
  },
  {
    school: "Ludwig-Maximilians-Universität München",
    degree: "Bachelor of Science, Business Administration",
    date: "2010 - 2014",
    img: "/LMU.jpg",
    link: "https://www.som.lmu.de/en/index.html",
  },
];

const essaysData = [
  {
    title: "The Thousand Brains Theory",
    description: "185 views",
    link: "https://buildingher.substack.com/p/the-thousand-brains-theory",
    date: "2022-12-07",
    type: "essay",
    logo: "/logos/substack.png",
    visible: true,
  },
  {
    title: "A roadmap to the mind",
    link: "https://buildingher.substack.com/p/a-roadmap-to-the-mind",
    date: "2022-09-08",
    description: "742 Views",
    type: "essay",
    logo: "/logos/substack.png",
    visible: true,
  },
  {
    title: "Bookshelf 2022",
    link: "https://erich.substack.com/p/bookshelf-2022",
    date: "2022-10-21",
    type: "essay",
    logo: "/logos/substack.png",
    visible: false,
  },
  {
    title: "The basics of predictive processing",
    description: "136 views",
    link: "https://buildingher.substack.com/p/predictive-processing",
    date: "2022-08-27",
    type: "essay",
    logo: "/logos/substack.png",
    visible: true,
  },
  {
    title: "The right kind of optimism",
    link: "https://erich.substack.com/p/the-right-kind-of-optimism",
    date: "2023-04-11",
    type: "essay",
    logo: "/logos/substack.png",
    visible: false,
  },
];

const podcastsData = [
  {
    title: "Johannes Hartl: Sinn des Lebens, Freier Wille...",
    description: "129,480 Views",
    link: "https://youtu.be/G-QTQxhCzHE?si=X0NpqACvn4w0_KcY",
    date: "2023-10-07",
    type: "podcast",
    logo: "/logos/youtube.png",
    visible: true,
  },
  {
    title: "Hermann Simon: Hidden Champions...",
    description: "85,706 Views",
    link: "https://youtu.be/qjp3yKTa-lc?si=ZLzBXy2Th3ORrzR_",
    date: "2023-12-26",
    type: "podcast",
    logo: "/logos/youtube.png",
    visible: true,
  },
  {
    title:
      "Pfarrer Rainer M. Schießler: Zölibat, Synodaler Weg, Was ist ein gutes Leben?",
    description: "55,995 Views",
    link: "https://youtu.be/RKajbUdXB_U?si=F-wdKLPRMsX5wkmI",
    date: "2023-04-01",
    type: "podcast",
    logo: "/logos/youtube.png",
    visible: false,
  },
];

const allPublications = [...essaysData, ...podcastsData]
  .filter((item) => item.visible)
  .sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

const showLinks = false;

export default Home;
