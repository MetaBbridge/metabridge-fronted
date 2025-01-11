import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-onboarding-bg bg-cover bg-fixed bg-center bg-no-repeat p-4">
      <div className="w-full max-w-[600px] rounded-[32px] bg-white/80 p-8 shadow-lg backdrop-blur-xl">
        {children}
      </div>
    </main>
  );
};

export default layout;
