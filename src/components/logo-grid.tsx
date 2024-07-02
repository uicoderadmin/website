import type { NextPage } from "next";

export type LogoGridType = {
  className?: string;
};

const LogoGrid: NextPage<LogoGridType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem] box-border max-w-full text-center text-[1.125rem] text-green-99 font-barlow ${className}`}
    >
      <div className="h-[10.688rem] w-[99.875rem] bg-gray-100 box-border flex flex-row items-end justify-between py-[3.75rem] pr-[3.625rem] pl-[4.625rem] gap-[1.25rem] max-w-full border-r-[1px] border-solid border-grey-15 border-b-[1px] border-l-[1px] mq450:h-auto mq1425:pl-[2.313rem] mq1425:pr-[1.813rem] mq1425:box-border">
        <div className="h-[3.125rem] w-[6.475rem] flex flex-col items-start justify-start py-[0rem] pr-[0.187rem] pl-[0rem] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
        <div className="h-[3.125rem] w-[9.275rem] flex flex-col items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/logo-1.svg"
          />
        </div>
        <div className="w-[24.35rem] flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border gap-[1.812rem] max-w-[calc(100%_-_585px)]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[2.625rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="rounded-81xl bg-grey-10 overflow-hidden flex flex-row items-start justify-start py-[1.125rem] px-[2.062rem] whitespace-nowrap border-[1px] border-solid border-grey-15">
              <div className="relative font-medium">
                Trusted By 250+ Companies
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
            <img
              className="self-stretch w-[6.381rem] relative max-h-full overflow-hidden shrink-0 min-h-[3.125rem]"
              loading="lazy"
              alt=""
              src="/logo-2.svg"
            />
            <img
              className="self-stretch w-[7.875rem] relative max-h-full overflow-hidden shrink-0 min-h-[3.125rem]"
              loading="lazy"
              alt=""
              src="/logo-3.svg"
            />
          </div>
        </div>
        <img
          className="h-[3.125rem] w-[7.163rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logo-4.svg"
        />
        <img
          className="h-[3.125rem] w-[8.656rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logo-5.svg"
        />
      </div>
    </section>
  );
};

export default LogoGrid;
