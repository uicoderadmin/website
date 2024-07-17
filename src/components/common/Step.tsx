import React from "react";
import GridWrapper from "./GridWrapper";

interface StepProps {
  title: string;
  description: string;
}

interface StepComponentProps {
  steps: StepProps[];
}

const StepItem: React.FC<any> = ({ item, index }) => (
  <>
    <div className="flex items-end gap-4 w-full">
      <span className="text-[80px] leading-none lap:text-[120px] lap:leading-none desk:text-[150px] desk:leading-none font-semibold text-green-80">
        {(index + 1).toString().padStart(2, "0")}
      </span>
      <div className="text-xl lap:text-2xl desk:text-[28px] desk:leading-none font-medium text-grey-60 w-full flex-grow border-b border-b-grey-15 px-2.5 py-4 lap:py-6 desk:py-10 mb-1.5">
        {item.title}
      </div>
    </div>
    <p className="text-lg text-gray-300">{item.description}</p>
  </>
);

const Step: React.FC<StepComponentProps> = ({ steps }) => {
  return (
    <GridWrapper
      items={steps}
      renderItem={(item, index) => <StepItem item={item} index={index} />}
    />
  );
};

export default Step;
