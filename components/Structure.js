import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Headline({ children }) {
  return (
    <h2 className="font-bold text-2xl mt-12 print:mt-4 print:text-lg print:mb-1">
      {children}
    </h2>
  );
}

function TextBlock({ children }) {
  return (
    <div className="font-light flex flex-col gap-4 mt-4 print:gap-2 print:mt-2">
      {children}
    </div>
  );
}

function Main({ children }) {
  return (
    <>
      <main className="mx-auto max-w-2xl p-4 pt-0 md:pt-10 print:pt-4 print:px-8 print:pb-4 print:max-w-none">
        {children}
      </main>
      <div className="h-32 print:hidden"></div>
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            margin: 0.3in;
            size: letter;
          }
          body {
            font-size: 12pt;
          }
          .print-left-column {
            width: 40%;
            float: left;
            padding-right: 20px;
          }
          .print-right-column {
            width: 60%;
            float: left;
          }
          .print-clear {
            clear: both;
          }
        }
      `}</style>
    </>
  );
}

function Link({
  href,
  children,
  size = "normal",
  printBlue = false,
  className = "",
  ...props
}) {
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

  const printColorClass = printBlue ? "print:text-blue-600" : "print:text-black";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`font-medium text-black hover:text-blue-600 transition-colors inline-flex items-center gap-1 ${sizeClasses[size]} ${printColorClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowTopRightOnSquareIcon className={`${iconSizes[size]} print:hidden`} />
    </a>
  );
}

export { Headline, Link, Main, TextBlock };
