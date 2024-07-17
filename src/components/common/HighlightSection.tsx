import React from "react";

interface SectionProps {
  title: string;
  description: string;
  bgImage: string;
}

const HighlightSection: React.FC<SectionProps> = ({
  title,
  description,
  bgImage
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full desk:gap-4 gap-1.5 py-12 lap:py-24 desk:py-[120px] relative border-x border-x-grey-15"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h2 className="text-[28px] text-center leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-semibold z-10">
        {title}
      </h2>
      <p className="desk:text-lg desk:leading-6 lap:text-base text-sm leading-6 z-10 text-center px-4 text-grey-90">
        {description}
      </p>
    </div>
  );
};

export default HighlightSection;
