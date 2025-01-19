import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MilestoneProps {
  number: number;
  title: string;
  description: string;
  funding: {
    amount: string;
    roi: string;
    startDate: string;
    endDate: string;
  };
  kpis: string[];
}

export function ProjectMilestone({
  number,
  title,
  description,
  funding,
  kpis,
}: MilestoneProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-[14px] font-medium">
          {number}. {title}
        </h3>
        <p className="text-[14px] font-normal text-[#656571]">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h4 className="text-[14px] font-medium">KPIs</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {kpis.map((kpi, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-[14px] font-normal text-[#656571]">
                  •
                </span>
                {kpi}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-[8px] border border-[#D4D4D8] bg-[#F2F2F3] p-2">
          <div>
            <p className="text-[12px] font-normal text-[#656571]">Funding:</p>
            <p className="text-[12px] font-medium">{funding.amount}</p>
          </div>
          <div>
            <p className="text-[12px] font-normal text-[#656571]">ROI:</p>
            <p className="text-[12px] font-medium">{funding.roi}</p>
          </div>
          <div>
            <p className="text-[12px] font-normal text-[#656571]">
              Start Date:
            </p>
            <p className="text-[12px] font-medium">{funding.startDate}</p>
          </div>
          <div>
            <p className="text-[12px] font-normal text-[#656571]">End Date:</p>
            <p className="text-[12px] font-medium">{funding.endDate}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
