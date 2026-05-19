
import { Check } from 'lucide-react';

export interface TimelineStep {
  label: string;
  date?: string;
  status: 'completed' | 'active' | 'pending';
}

interface ProgressTimelineProps {
  steps: TimelineStep[];
}

const ProgressTimeline: React.FC<ProgressTimelineProps> = ({ steps }) => {
  return (
    <div className="glass-card p-6 w-full overflow-x-auto">
      <h3 className="text-lg font-semibold text-slate-200 mb-8">Service Progress</h3>
      <div className="flex items-center min-w-max px-4">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';
          
          return (
            <div key={index} className="flex items-center">
              {/* Step Circle & Text */}
              <div className="flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 bg-dark-800 transition-all duration-300
                  ${isCompleted ? 'border-success text-success bg-success/10' : 
                    isActive ? 'border-primary-500 text-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 
                    'border-slate-700 text-slate-500'}`}
                >
                  {isCompleted ? <Check size={20} /> : <span className="text-sm font-bold">{index + 1}</span>}
                </div>
                
                <div className="absolute top-12 text-center w-32">
                  <p className={`text-sm font-medium ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>{step.label}</p>
                  {step.date && <p className="text-xs text-slate-500 mt-1">{step.date}</p>}
                </div>
              </div>
              
              {/* Connecting Line */}
              {!isLast && (
                <div className="w-24 h-1 mx-2 rounded-full relative">
                  {/* Background line */}
                  <div className="absolute inset-0 bg-slate-700/50 rounded-full"></div>
                  {/* Active/Completed line */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 
                    ${isCompleted ? 'bg-success' : isActive ? 'bg-gradient-to-r from-success to-primary-500' : ''}`}
                    style={{ width: isCompleted || isActive ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="h-16"></div> {/* Spacer for absolute text */}
    </div>
  );
};

export default ProgressTimeline;
