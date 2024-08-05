import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { OnboardingCustomCard } from "@/components/common/onboarding-tour/OnboardingCustomCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import SocketContextProvider from "@/context/SocketContext";
import { OnbordaProvider, Onborda, OnbordaProps } from 'onborda'

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const steps: OnbordaProps["steps"] = [
    {
      icon: <>👋</>,
      title: "Step 1",
      content: <>This is the first step</>,
      selector: "#onborda-step1",
      side: "top",
      showControls: true,
      pointerPadding: 10,
      pointerRadius: 10,
      nextRoute: "/foo",
      prevRoute: "/bar"
    }
  ]
  return (
    <SocketContextProvider>   
    <TooltipProvider>      
      <OnbordaProvider>
        <Onborda
          steps={steps}
          showOnborda={true}
          shadowRgb="55,48,163"
          shadowOpacity="0.8"
        // cardComponent={OnboardingCustomCard}
        >
          <AdminPanelLayout>
            {children}
          </AdminPanelLayout>
        </Onborda>
      </OnbordaProvider>
    </TooltipProvider>
    </SocketContextProvider>
  );
}
