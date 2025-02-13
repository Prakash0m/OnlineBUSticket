import React from "react";
import PriceRangeSlider from "../../components/pricerange/PriceRangeSlider";

const Filter = ({ className }) => {
  const [rangeValue, setRangeValue] = React.useState({
    min: 0,
    max: 100,
  });
  const handleRangeChange = (values) => {
    setRangeValue({ values });
  };

  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-xl text-neutral-700 font-semibold">Apply Filter</h1>
      {/* Price Filter */}
      <div className="w-full border border-neutral-300 rouned-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">Apply Filter</h1>
        <PriceRangeSlider min={1000} max={3000} onChange={handleRangeChange} />
      </div>

      {/* Bus Types Filter */}
      <div className="w-full border  border-neutral-300 rouned-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Bus Types</h1>
        <div className="space-y-2 5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="ac"
              className="h-3.5 w-3.5 border-neutral-300 text-neutral-300 cursor-pointer "
            />
            <lable className="text-sm text-neutral-600 font-normal cursor-pointer">
              AC Deluxe <span className="text-xs text-neutral-600">(10)</span>
            </lable>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="tourist"
              className="h-3.5 w-3.5 border-neutral-300 text-neutral-300 cursor-pointer "
            />
            <lable className="text-sm text-neutral-600 font-normal cursor-pointer">
              Tourist AC Deluxe{" "}
              <span className="text-xs text-neutral-600">(10)</span>
            </lable>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="airsuspension"
              className="h-3.5 w-3.5 border-neutral-300 text-neutral-300 cursor-pointer "
            />
            <lable className="text-sm text-neutral-600 font-normal cursor-pointer">
              Air Suspension{" "}
              <span className="text-xs text-neutral-600">(10)</span>
            </lable>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="luxuryac"
              className="h-3.5 w-3.5 border-neutral-300 text-neutral-300 cursor-pointer "
            />
            <lable className="text-sm text-neutral-600 font-normal cursor-pointer">
              Luxury AC Deluxe{" "}
              <span className="text-xs text-neutral-600">(10)</span>
            </lable>
          </div>
        </div>
      </div>
      {/* Amenities Filter */}
      <div className="w-full border  border-neutral-300 rouned-xl p-4 space-y-3"></div>
    </div>
  );
};

export default Filter;
