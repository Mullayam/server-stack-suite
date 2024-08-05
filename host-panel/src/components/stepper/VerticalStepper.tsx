"use client";
import { Children, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    title: "Choose Service Type",
    description: "Multiple options to choose from",
  },
  {
    title: "Configure Mailbox",
    description: "Provide Some information to get started",
  },
  {
    title: "Create an account",
    description: "Create an account to get started",
  }, 
  {
    title: "Create an account",
    description: "Create an account to get started",
  }, 
  {
    title: "Complete",
    description: "You are all set",
  },
];

const VerticalStepper = ({children}: {children: React.ReactNode}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index:any) => {
    setCurrentStep(index);
  };
 
  return (
    <div className="w-full max-w-xl mx-auto p-6 overflow-hidden">
      <div>
        <h3>Getting Started with Mailbox </h3>
        <p className="text-neutral-500 text-sm">
          Let&apos;s get you started with our platform
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm">Steps</p>
        <div className="text-neutral-500 text-sm">
          {currentStep + 1}/{steps.length}
        </div>
      </div>
      <div className="relative h-2 bg-secondary rounded-full mt-4">
        <motion.div
          className="absolute top-0 left-0 h-2 bg-emerald-600 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%`}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`p-2 cursor-pointer border rounded-xl ${
              index === currentStep ? "bg-neutral-800/20" : ""
            }`}
            onClick={() => handleStepClick(index)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <motion.span
                className={`border w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 mr-4 ${
                  index <= currentStep
                    ? "border-emerald-600 bg-emerald-600/20"
                    : ""
                }`}
                initial={{ scale: 0.9 }}
                animate={{
                  scale: index === currentStep ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <AnimatePresence mode="wait">
                  {index < currentStep ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                      className="transition-all duration-300"
                    >
                      <Check className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="number"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index + 1}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.span>
              <div>
                <h4>{step.title}</h4>
                <p className="text-sm text-white/50">{step.description}</p>
              </div>
               
               
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VerticalStepper;