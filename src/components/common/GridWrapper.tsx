import React from "react";

interface GridWrapperProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

const GridWrapper: React.FC<GridWrapperProps> = ({ items, renderItem }) => {
  return (
    <div className="grid grid-cols-1 lap:grid-cols-2 border border-grey-15 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-start py-10 px-8 lap:p-14 desk:p-20 gap-5 lap:gap-6 text-grey-90 ${
            index === 1 ? "lap:border-t" : "" // Add top border to items not in the first row
          } ${
            index >= 1 ? "border-t border-grey-15" : "" // Add top border to items not in the first row
          } ${
            index % 2 === 0 ? "lap:border-r border-grey-15" : "" // Add right border to items not in the last column
          }`}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};

export default GridWrapper;
