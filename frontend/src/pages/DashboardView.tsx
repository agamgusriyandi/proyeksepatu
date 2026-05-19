import { useState } from 'react';
import MetricCard from '../components/MetricCard';
import { Package, Wrench, FileText, ShoppingCart, CreditCard, AlertTriangle, Clock, TrendingUp, BarChart3, Wallet } from 'lucide-react';

interface DashboardProps {
  setCurrentView: (view: string) => void;
}

const DashboardView = ({ setCurrentView }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<'service' | 'sales' | 'purchase'>('service');

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Executive Dashboard</h2>
          <p className="text-slate-400">Ringkasan operasional dan keuangan perusahaan secara real-time.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setCurrentView('reports')}
            className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-dark-700 border border-slate-600 hover:bg-dark-600 transition-colors text-sm"
          >
            Lihat Laporan Detail
          </button>
        </div>
      </div>

      {/* C-Level Alerts / Bottlenecks */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex items-start space-x-4">
          <div className="bg-red-500/20 p-2 rounded-lg">
            <AlertTriangle className="text-red-500" size={20} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-red-400">2 Tagihan Penjualan Jatuh Tempo (Overdue)</h4>
            <p className="text-xs text-slate-400 mt-1">Total piutang berisiko: <span className="font-bold text-slate-300">Rp 4.500.000</span>. Segera *follow-up* PT Makmur Jaya.</p>
          </div>
        </div>
        <div className="bg-warning/10 border border-warning/30 p-4 rounded-xl flex items-start space-x-4">
          <div className="bg-warning/20 p-2 rounded-lg">
            <Clock className="text-warning" size={20} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-warning">3 Servis Mendekati Batas SLA</h4>
            <p className="text-xs text-slate-400 mt-1">Tiket #SRV-87421 dan 2 lainnya harus dikirim hari ini sebelum pukul 15.00 WIB.</p>
          </div>
        </div>
      </div>

      {/* Top Level Financial & Operational Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Pendapatan (Revenue) Bulan Ini" total="Rp 128.4M" icon={<Wallet size={24} />} trend="up" trendValue="8.5%" />
        <MetricCard title="Piutang Berjalan (AR)" total="Rp 24.5M" icon={<TrendingUp size={24} />} trend="up" trendValue="15%" />
        <MetricCard title="Hutang Supplier (AP)" total="Rp 8.2M" icon={<CreditCard size={24} />} trend="down" trendValue="5%" />
        <MetricCard title="Servis Produksi Aktif" total="32" icon={<Wrench size={24} />} trend="up" trendValue="12" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Tabbed Operational Data */}
        <div className="xl:col-span-2 glass-panel p-0 overflow-hidden flex flex-col">
          <div className="flex space-x-6 px-6 pt-6 border-b border-slate-700/50">
            <button 
              onClick={() => setActiveTab('service')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'service' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              Monitor Produksi (Servis)
            </button>
            <button 
              onClick={() => setActiveTab('sales')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'sales' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              Sales Pipeline
            </button>
            <button 
              onClick={() => setActiveTab('purchase')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'purchase' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              Logistik & PO
            </button>
          </div>
          
          <div className="p-6 flex-1">
            {activeTab === 'service' && (
              <div className="space-y-4">
                {[
                  { id: 'SRV-87421', name: 'Balenciaga Sneaker', status: 'SLA Warning', client: 'Budi Santoso', date: 'Jatuh Tempo: HARI INI' },
                  { id: 'SRV-87422', name: 'LV Loafer Heel', status: 'Pewarnaan', client: 'Siska', date: 'Est. 28 Okt' },
                  { id: 'SRV-87423', name: 'Nike Dunk', status: 'Selesai QC', client: 'Andi', date: 'Siap Kirim' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-dark-700/50 transition-colors border border-transparent hover:border-slate-700/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-dark-800 border border-slate-700 flex items-center justify-center text-primary-500">
                        <Wrench size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.id} • {item.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`badge-${item.status.includes('Selesai') ? 'success' : item.status.includes('SLA') ? 'danger' : 'warning'}`}>
                        {item.status}
                      </span>
                      <p className={`text-xs mt-1 font-medium ${item.status.includes('SLA') ? 'text-red-400' : 'text-slate-500'}`}>{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'sales' && (
              <div className="space-y-4">
                {[
                  { id: 'QUO-1002', name: 'PT PPN - Alpha Sejahtera', status: 'Nego Final', total: 'Rp 45.500.000', date: 'Quotation' },
                  { id: 'SO-9904', name: 'Toko Sepatu Bersama', status: 'Menunggu DP', total: 'Rp 8.000.000', date: 'Sales Order' },
                  { id: 'INV-1022', name: 'CV Karya Utama', status: 'Overdue', total: 'Rp 4.500.000', date: 'Invoice Tagihan' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-dark-700/50 transition-colors border border-transparent hover:border-slate-700/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-dark-800 border border-slate-700 flex items-center justify-center text-secondary-500">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.id} • {item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`badge-${item.status === 'Overdue' ? 'danger' : item.status === 'Nego Final' ? 'primary' : 'warning'}`}>
                        {item.status}
                      </span>
                      <p className="text-xs text-slate-300 font-bold mt-1">{item.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'purchase' && (
              <div className="space-y-4">
                {[
                  { id: 'PO-5012', name: 'Supplier Angelus Indo', status: 'Terlambat', item: 'Cat Akrilik 20pcs', date: 'Harusnya Tiba 23 Okt' },
                  { id: 'PO-5011', name: 'Distributor Sol Vibram', status: 'Sebagian (GR)', item: 'Sol Karet 50pcs', date: 'Est. 29 Okt' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-dark-700/50 transition-colors border border-transparent hover:border-slate-700/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-dark-800 border border-slate-700 flex items-center justify-center text-emerald-500">
                        <ShoppingCart size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.id} • {item.item}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`badge-${item.status === 'Terlambat' ? 'danger' : 'warning'}`}>
                        {item.status}
                      </span>
                      <p className={`text-xs mt-1 font-medium ${item.status === 'Terlambat' ? 'text-red-400' : 'text-slate-500'}`}>{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Executive Right Column: Charts & Logs */}
        <div className="space-y-6">
          
          {/* Chart Placeholder */}
          <div className="glass-panel p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-slate-200">Tren Kas (30 Hari)</h3>
              <BarChart3 size={18} className="text-slate-400" />
            </div>
            
            <div className="h-40 flex items-end space-x-2 w-full justify-between pt-4 border-b border-slate-700/50 pb-2">
              {/* Dummy Bar Chart */}
              {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                <div key={i} className="w-full relative group flex flex-col justify-end h-full">
                  <div 
                    className="w-full bg-primary-500/80 rounded-t-sm group-hover:bg-primary-400 transition-colors"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-700 text-xs text-white px-2 py-1 rounded transition-opacity whitespace-nowrap z-10 pointer-events-none">
                    Rp {h}0k
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-medium">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>

          {/* Activity Log */}
          <div className="glass-panel p-6 flex-1">
            <h3 className="text-lg font-semibold text-slate-200 mb-6">Aktivitas Kritis</h3>
            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-700/50"></div>
              <div className="space-y-5 relative z-10">
                <div className="flex space-x-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-200">Invoice <span className="font-medium text-red-500">#INV-1022</span> Jatuh Tempo</p>
                    <p className="text-xs text-slate-500 mt-1">CV Karya Utama gagal bayar H+1.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 border border-primary-500/50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-200">Quotation Disetujui</p>
                    <p className="text-xs text-slate-500 mt-1">PT Alpha menyetujui Q-1002 (Rp 45M).</p>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('system-logs')}
              className="w-full mt-6 py-2 rounded-lg border border-slate-700 text-xs font-medium text-slate-400 hover:bg-dark-700 hover:text-slate-300 transition-colors"
            >
              Lihat Semua Log
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
