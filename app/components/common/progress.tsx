import { AiOutlineDashboard } from "react-icons/ai";

interface ProgressProps {
  name: string;
  color: string;
  icon: React.ReactNode;
  skillLvl: "Beginner" | "Middle" | "Advanced";
  percentage: number
}

const Progress = ({ name, color, icon, skillLvl, percentage }: ProgressProps) => {
  return (
    <div className="one row-center p-4" style={{ '--progress-color': color } as React.CSSProperties}>
      <div className="relative size-full">
        <div className="absolute -top-15 left-3 row-center size-23 bg-background rounded-full p-2">
          <div className="relative row-center size-full rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] initial-before before:size-5 custom-bf-background-color before:rounded-full before:blur-md">
            {icon}
          </div>
        </div>

        <div className="flex flex-col justify-between items-center size-full rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.5)] py-1 px-3 pt-6">
          <div className="flex justify-between items-center w-full h-1/2 pl-25 pr-2">
            <h4 className="text-lg capitalize">{name}</h4>
            <h4 className="text-sm py-0.5 px-1.5 border rounded-md bg-[rgba(88,196,220,0.1)]" 
                style={{ color, borderColor: color }}>
              {skillLvl}
            </h4>
          </div>
          <div className="flex justify-between items-center w-full h-1/2 px-2">
            <div className="relative flex justify-start items-center w-85/100 h-1/2 rounded shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] overflow-hidden">
              <div style={{ width: `${percentage}%`, backgroundColor: color }} 
                   className="h-full rounded shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]">
              </div>
            </div>
            <AiOutlineDashboard style={{ color }} className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Progress;