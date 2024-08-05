import React from "react"
import { Circle } from "lucide-react";

import { Step1 } from "./components/step1";
import { Step2 } from "./components/step2";
import StepperCustomIcons from "./components/step-form"

export default function GetStarted() {
  const steps = [
    { label: "Account Creation", icon: <Circle size={15} />, component: <Step1 /> },
    { label: "Database Configuration", icon: <Circle size={15} />, component: <Step2/> },
    { label: "Review & Submit", icon: <Circle size={15} />, component: <>3</> },
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto   flex-wrap items-center justify-center    gap-6">
          <div className=" gap-2 text-center">
            <h1 className="text-3xl font-bold">Get Started</h1>
            <p className="text-balance text-muted-foreground">
              Setup your Server Stack Suite Configuration
            </p>
          </div>
         <Step1/>

        </div>
      </div>
    </div>
  )
}
