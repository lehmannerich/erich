function Headline({ children }) {
  return <h2 className="font-bold mt-12">{children}</h2>;
}

function TextBlock({ children }) {
  return <div className="font-light flex flex-col gap-4 mt-4">{children}</div>;
}

export { Headline, TextBlock };
