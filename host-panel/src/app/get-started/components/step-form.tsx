"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";



const Stepper = ({steps}: {steps: any[]}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 overflow-hidden">
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="flex flex-col items-center"
              onClick={() => setCurrentStep(index)}
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? "bg-emerald-600/20 border border-emerald-600"
                    : "bg-secondary text-neutral-400"
                }`}
                initial={false}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                }}
              >
                {index <= currentStep ? <CheckCircle size={15} /> : step.icon}
              </motion.div>
              <div className="text-sm mt-2">{step.label}</div>
            </div>
          ))}
        </div>
        <motion.div
          className="h-2 bg-emerald-600 rounded-full mt-4"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
	 <div className="my-12">
	 {steps[currentStep].component}
	 </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-6 py-1 text-sm bg-emerald-600/20 border border-emerald-600 rounded-full disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-1 text-sm bg-emerald-600/20 border border-emerald-600 rounded-full disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;