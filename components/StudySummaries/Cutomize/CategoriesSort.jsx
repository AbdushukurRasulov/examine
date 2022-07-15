import { Allergy } from "@/components/IconsSvg";
import React from "react";

export const CategoriesSort = ({ categories }) => {
  return (
    <>
      <div className="py-6">
        <div className="space-y-5">
          {categories.map(({ title }, index) => (
            <button
              key={index}
              className="flex w-full cursor-pointer items-center rounded-lg border border-gray-200 py-3 px-5 transition-shadow duration-200 hover:shadow"
            >
              <svg
                className="mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.875 12H5.125"
                  stroke="#6C757D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.875 8.80005H5.125"
                  stroke="#6C757D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.875 15.2H5.125"
                  stroke="#6C757D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Allergy />
              <span className="ml-2.5 text-lg">{title}</span>
            </button>
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
      </div>
    </>
  );
};
