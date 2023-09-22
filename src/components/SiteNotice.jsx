import React from "react";

// PLEASE NOTE THAT YOU HAVE TO FILL IN YOUR OWN INFORMATION HERE / NOT A LEGAL ADVICE

const SiteNotice = () => {
  return (
    <div className="flex flex-col gap-4 self-start h-full overflow-y-auto py-10 fade-in">
      <h1 className="text-3xl">Site Notice</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-white-900">Heading</h2>
        <p className="font-sans">Text</p>
      </div>
    </div>
  );
};

export default SiteNotice;
