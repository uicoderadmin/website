import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  buttonText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  buttonText
}) => {
  return (
    <div className="flex flex-col px-5 py-10 lap:px-10 lap:pt-20 lap:pb-10 desk:pl-12 border border-grey-15">
      <h2 className="text-[28px] leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-semibold ">
        {title}
      </h2>
      <p className="desk:text-lg desk:leading-6 lap:text-base text-sm leading-5 pt-1.5 pb-8 text-grey-90">
        {description}
      </p>
      <button className="bg-grey-15 p-2.5 rounded-lg w-fit text-base lap:text-lg lap:leading-5 desk:text-[22px] desk:leading-7">
        {buttonText}
      </button>
    </div>
  );
};

export default SectionHeader;
