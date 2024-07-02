import type { NextPage } from "next";

export type InputFieldType = {
  className?: string;
  text?: string;
};

const InputField: NextPage<InputFieldType> = ({ className = "", text }) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-gray-200 box-border flex flex-col items-start justify-start pt-[1.375rem] px-[2.437rem] pb-[1.312rem] gap-[1.25rem] min-w-[23.125rem] max-w-full text-left text-[1.375rem] text-absolute-white font-barlow border-[1px] border-solid border-grey-15 mq825:min-w-full ${className}`}
    >
      <div className="self-stretch relative leading-[150%] font-medium mq450:text-[1.125rem] mq450:leading-[1.625rem]">
        {text}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem] text-[1.125rem] text-grey-40">
        <div className="self-stretch relative leading-[150%]">Type here</div>
        <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-grey-20" />
      </div>
    </div>
  );
};

export default InputField;
