import React from "react";

// PLEASE NOTE THAT YOU HAVE TO FILL IN YOUR OWN PRIVACY POLICY HERE / NOT A LEGAL ADVICE

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-10 py-10 font-sans">
      <h1 className="text-3xl fade-in">Privacy Policy</h1>
      <div className="flex flex-col bg-white-100 rounded-lg p-10 gap-5 fade-in">
        <h2 className="text-2xl gradient-text uppercase tracking-wider">
          Welcome!
        </h2>
        <p>Some welcome text :)</p>
      </div>
      <div className="flex flex-col bg-white-100 rounded-lg p-10 gap-5 fade-in">
        <h2 className="text-2xl gradient-text uppercase tracking-wider">
          1. Heading
        </h2>
        <p>Introduction text</p>
        <h2 className="text-xl gradient-text uppercase">1.1 Subheading</h2>
        <p>More text</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
