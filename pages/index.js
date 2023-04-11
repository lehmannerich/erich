function Home() {
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

  return (
    <main className="mx-auto max-w-2xl p-4">
      <div className="pt-16">
        <Headline>Erich Lehmann</Headline>
        <TextBlock>
          <p>Here, in short, is who I am.</p>
          <p>
            I think a lot about what it means to live a good life. I love having
            intellectual conversations. I&#39;ve built multiple businesses - one of them
            became really successful. I can code, I can ship products, and I can write. I
            have never stopped learning.
          </p>
          <p>Of these, the most important is that I have never stopped learning.</p>
        </TextBlock>
        <Headline>Work Experience</Headline>
        <TextBlock>
          <div className="border rounded p-4 text-sm">
            <p className="font-medium">Co-Founder @ MeetAnyway</p>
            <p className="text-sm text-stone-500">
              Jan 2018 - Present · {getTimeFromJan2018()}
            </p>
          </div>
          <div className="border rounded p-4 text-sm">
            <p className="font-medium">Founder @ Academy Ventures</p>
            <p className="text-sm text-stone-500">2016 - 2018 · 2 yrs</p>
          </div>
          <div className="border rounded p-4 text-sm">
            <p className="font-medium">Venture Architect @ Deloitte Digital</p>
            <p className="text-sm text-stone-500">2014 - 2016 · 2 yrs</p>
          </div>
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

export default Home;
