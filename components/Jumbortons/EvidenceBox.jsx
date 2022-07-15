import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Doc, Grid, User } from "../IconsSvg";
import EvidenceFullInfoPopup from "./EvidenceFullInfoPopup";

const EvidenceBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mt-12 flex flex-col items-center text-center text-white">
        <div className="inline-block rounded-t bg-examine-purple-600 px-1.5">
          <ChevronUpIcon className="h-3.5 w-5" />
        </div>
        <div className="w-full space-y-4 rounded-lg bg-examine-purple-700 px-5 py-8 -tracking-2 text-gray-200">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <Doc />
              <span>Studies</span>
            </div>
            <p>328</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <User />
              <span>Participants</span>
            </div>
            <p className="text-gray-100">6,420</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <Grid />
              <span>Parameters</span>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="flex w-36 shrink-0 cursor-pointer items-center divide-x-2 divide-examine-purple-700 overflow-hidden rounded-md text-black"
            >
              <p className="flex-1 bg-research-green py-1.5">
                <span className="pr-0.5 font-extrabold">A:</span>
                <span className="text-sm -tracking-wider">210</span>
              </p>
              <p className="flex-1 bg-research-yellow py-1.5">
                <span className="pr-0.5 font-extrabold">B:</span>
                <span className="text-sm -tracking-wider">14</span>
              </p>
              <p className="flex-1 bg-gray-500 py-1.5">
                <span className="pr-0.5 font-extrabold">C:</span>
                <span className="text-sm -tracking-wider">11</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <EvidenceFullInfoPopup {...{ open, setOpen }} />
    </>
  );
};

export default EvidenceBox;
