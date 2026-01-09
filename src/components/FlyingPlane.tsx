import { Plane } from "lucide-react";

const FlyingPlane = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Primary flying plane */}
      <div className="absolute top-[15%] animate-fly-plane">
        <Plane 
          className="w-8 h-8 text-navy/20 rotate-45" 
          strokeWidth={1.5}
        />
      </div>
      
      {/* Secondary flying plane (reverse direction) */}
      <div className="absolute top-[60%] animate-fly-plane-reverse">
        <Plane 
          className="w-6 h-6 text-sky/30 rotate-45" 
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

export default FlyingPlane;
