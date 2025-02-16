import { CloudLightning } from "lucide-react";
import React from "react";

const LogoText = ({ className }: { className?: boolean }) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className={className?"section-header2":`header-title text-lg`}>HybriD </h1>
      <CloudLightning className={className?`text-yellow-500 w-6 h-6`:`text-yellow-500 `} />
    </div>
  );
};

export default LogoText;
