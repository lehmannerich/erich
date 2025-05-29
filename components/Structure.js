import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Headline({ children }) {
  return (
    <h2 className="font-bold text-2xl mt-12 print:mt-6 print:text-lg">{children}</h2>
  );
}

function TextBlock({ children }) {
  return (
    <div className="font-light flex flex-col gap-4 mt-4 print:gap-3 print:mt-3">
      {children}
    </div>
  );
}

function Main({ children }) {
  return (
    <>
      <main className="mx-auto max-w-2xl p-4 pt-0 md:pt-10 print:pt-0 print:px-16 print:max-w-none">
        {children}
      </main>
      <div className="h-32 print:hidden"></div>
    </>
  );
}

function Link({ href, children, size = "normal" }) {
  const sizeClasses = {
    small: "text-sm",
    normal: "text-base",
    large: "text-lg",
  };

  const iconSizes = {
    small: "h-3 w-3",
    normal: "h-4 w-4",
    large: "h-5 w-5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`font-medium text-black hover:text-blue-600 transition-colors inline-flex items-center gap-1 ${sizeClasses[size]} print:text-black`}
    >
      <span>{children}</span>
      <ArrowTopRightOnSquareIcon className={`${iconSizes[size]} print:hidden`} />
    </a>
  );
}

export { Headline, Link, Main, TextBlock };
