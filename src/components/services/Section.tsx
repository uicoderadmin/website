import React from "react";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

interface SectionProps {
  title: string;
  description: string;
  buttonText: string;
  services: {
    category: string;
    items: {
      title: string;
      img: string;
    }[];
  }[];
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  buttonText,
  services
}) => {
  return (
    <section className="text-absolute-white ">
      <SectionHeader
        title={title}
        description={description}
        buttonText={buttonText}
      />
      {services.map((service) => (
        <div key={service.category} className="border-x border-x-grey-15">
          <h3 className="text-grey-60 text-xl lap:text-2xl desk:text-[28px] desk:leading-[34px] font-semibold py-10 text-center lap:text-left lap:px-10 desk:p-12">
            {service.category}
          </h3>
          <div className="grid grid-cols-2 lap:grid-cols-4 border-y border-y-grey-15">
            {service.items.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col items-start p-5 lap:p-10 desk:p-12 gap-5 lap:gap-6 text-grey-90 ${
                  index >= 2 ? "border-t border-grey-15" : "" // Add top border to items not in the first row
                } ${
                  index % 2 === 0 ? "border-r border-grey-15" : "" // Add right border to items not in the last column
                }`}
              >
                <div className="p-4 desk:p-6 bg-icon-gradient w-fit rounded-xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="!w-7 !h-7 lap:!w-8 lap:!h-8 desk:!h-10 desk:!w-10"
                  />
                </div>
                <p className="text-base desk:text-xl">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section;
