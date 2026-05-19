

interface MetricCardProps {
  title: string;
  total: number | string;
  subValue?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down';
  trendValue?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, total, subValue, icon, trend, trendValue }) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-3 bg-dark-800/80 rounded-lg border border-slate-700/50 text-primary-400">
          {icon}
        </div>
        {subValue && (
          <div className="text-sm text-slate-400 font-medium">
            {subValue}
          </div>
        )}
      </div>
      
      <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1 relative z-10">{title}</h3>
      <div className="flex items-end space-x-3 relative z-10">
        <span className="text-3xl font-bold text-slate-100">{total}</span>
        {trendValue && (
          <span className={`text-sm font-medium mb-1 ${trend === 'up' ? 'text-success' : 'text-warning'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </span>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
