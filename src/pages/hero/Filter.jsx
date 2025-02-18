import React from "react";
import PriceRangeSlider from "../../components/pricerange/PriceRangeSlider";

const Filter = ({ className }) => {
  const [rangeValue, setRangeValue] = React.useState({
    min: 0,
    max: 100,
  });

  const handleRangeChange = (values) => {
    setRangeValue(values); // ✅ Corrected state update
  };

  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-xl text-neutral-700 font-semibold">Apply Filter</h1>

      {/* Price Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">Price Range</h1>
        <PriceRangeSlider min={1000} max={3000} onChange={handleRangeChange} />
      </div>

      {/* Bus Types Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Bus Types</h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="ac"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="ac"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              AC Deluxe <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="tourist"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="tourist"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Tourist AC Deluxe{" "}
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>
        </div>
      </div>
      {/* Bus Company */}

      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Bus Company </h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="koshideluxe"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="koshideluxe"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Koshi Deluxe{" "}
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="miterideluxe"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="miterideluxe"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Mitiri Deluxe
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="makaludeluxe"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="makaludeluxe"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Makalu Deluxe
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="amayadeluxe"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="samayadeluxe"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Samaya Deluxe
              <span className="text-xs text-neutral-600">(10)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Amenities Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Bus Amenities</h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="wifi"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="wifi"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Internet/WiFi
            </label>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="charging"
              className="h-3.5 w-3.5 cursor-pointer"
            />
            <label
              htmlFor="charging"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              Charging Port
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
