import { Allergy } from "@/components/IconsSvg";
import React from "react";

const CategoriesSelection = ({ categories }) => {
  return (
    <>
      {/* Presets */}
      <div>
        <p className="text-lg text-gray-600">Presets:</p>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-examine-purple-100 px-2 py-1.5 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
          >
            Fitness
          </button>
          <button
            type="button"
            className="rounded-md border border-examine-purple-100 px-2 py-1.5 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
          >
            Aging
          </button>
          <button
            type="button"
            className="rounded-md border border-examine-purple-100 px-2 py-1.5 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
          >
            Diets & Supplements
          </button>
          <button
            type="button"
            className="rounded-md border border-examine-purple-100 px-2 py-1.5 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
          >
            All
          </button>
        </div>
      </div>

      <form className="py-6">
        <div className="space-y-5">
          {categories.map(({ title }, index) => (
            <label
              key={index}
              htmlFor={title.split(" ").join("-")}
              className="flex cursor-pointer items-center rounded-lg border border-gray-200 py-3 px-5 transition-shadow duration-200 hover:shadow"
            >
              <Allergy />
              <span className="ml-2.5 text-lg">{title}</span>
              <input
                type="checkbox"
                id={title.split(" ").join("-")}
                className="ml-auto h-5 w-5 border-2 !border-gray-600 text-examine-green-500 checked:!border-examine-green-500 focus:!border-gray-600 focus:checked:!border-examine-green-500"
              />
            </label>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            className="text-lg font-medium leading-8 -tracking-2 text-gray-600  hover:text-primary"
          >
            Deselect All
          </button>

          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-white hover:bg-examine-purple-400 hover:text-white"
          >
            Save Settings
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoriesSelection;
