import { useState } from 'react';
import { FileText, Download, BarChart2, PieChart, TrendingUp, Calendar, Filter } from 'lucide-react';

const ReportsView = () => {
  const [reportType, setReportType] = useState('finance');

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center">
            <BarChart2 className="mr-3 text-primary-500" size={28} /> Laporan & Analitik
          </h2>
          <p className="text-slate-400 mt-1">Pusat pelaporan detail keuangan, operasional, dan performa bisnis.</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-slate-700 text-sm text-slate-300">
            <Calendar size={14} className="text-slate-500" />
            <span>Okt 2026 - Nov 2026</span>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-white bg-primary-600 hover:bg-primary-500 transition-colors text-sm shadow-lg shadow-primary-500/20">
            <Download size={16} />
            <span>Unduh Laporan (PDF)</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-2 mb-6">
        <button 
          onClick={() => setReportType('finance')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border ${reportType === 'finance' ? 'bg-primary-500/10 border-primary-500/50 text-primary-400' : 'bg-dark-800 border-slate-700/50 text-slate-400 hover:text-slate-200'}`}
        >
          Keuangan (Laba/Rugi)
        </button>
        <button 
          onClick={() => setReportType('sales')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border ${reportType === 'sales' ? 'bg-primary-500/10 border-primary-500/50 text-primary-400' : 'bg-dark-800 border-slate-700/50 text-slate-400 hover:text-slate-200'}`}
        >
          Penjualan & Piutang
        </button>
        <button 
          onClick={() => setReportType('inventory')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border ${reportType === 'inventory' ? 'bg-primary-500/10 border-primary-500/50 text-primary-400' : 'bg-dark-800 border-slate-700/50 text-slate-400 hover:text-slate-200'}`}
        >
          Pergerakan Stok
        </button>
      </div>

      {reportType === 'finance' && (
        <div className="flex-1 overflow-auto custom-scrollbar space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 border-t-4 border-t-success">
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Total Pendapatan (Kotor)</h3>
              <p className="text-3xl font-bold text-slate-100">Rp 128.450.000</p>
              <p className="text-success text-xs mt-2 font-medium flex items-center"><TrendingUp size={12} className="mr-1" /> +8.5% dari bulan lalu</p>
            </div>
            <div className="glass-panel p-6 border-t-4 border-t-danger">
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Pengeluaran (Pembelian & HPP)</h3>
              <p className="text-3xl font-bold text-slate-100">Rp 42.100.000</p>
              <p className="text-danger text-xs mt-2 font-medium flex items-center"><TrendingUp size={12} className="mr-1" /> +2.1% dari bulan lalu</p>
            </div>
            <div className="glass-panel p-6 border-t-4 border-t-primary-500 bg-primary-900/10">
              <h3 className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">Laba Bersih (Net Profit)</h3>
              <p className="text-3xl font-bold text-white">Rp 86.350.000</p>
              <p className="text-success text-xs mt-2 font-medium flex items-center"><TrendingUp size={12} className="mr-1" /> Margin 67.2%</p>
            </div>
          </div>

          <div className="glass-panel p-0 overflow-hidden">
            <div className="p-4 border-b border-slate-700/50 bg-dark-900/50 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center"><FileText size={16} className="mr-2 text-slate-400"/> Rincian Transaksi Pendapatan</h3>
              <button className="text-xs flex items-center text-slate-400 hover:text-white transition-colors"><Filter size={14} className="mr-1"/> Filter Data</button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead className="bg-dark-800/80">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase border-b border-slate-700/50">ID Transaksi</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase border-b border-slate-700/50">Tanggal</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase border-b border-slate-700/50">Kategori</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase border-b border-slate-700/50">Klien/Pelanggan</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase border-b border-slate-700/50 text-right">Nominal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {[
                  {id: 'INV-1022', date: '28 Okt 2026', cat: 'B2B Sales', client: 'CV Karya Utama', val: 'Rp 4.500.000'},
                  {id: 'INV-1021', date: '27 Okt 2026', cat: 'Retail Sales', client: 'Bapak Andi', val: 'Rp 450.000'},
                  {id: 'SRV-8742', date: '26 Okt 2026', cat: 'Shoe Care Service', client: 'Siska', val: 'Rp 300.000'},
                  {id: 'INV-1019', date: '24 Okt 2026', cat: 'B2B Sales', client: 'PT Alpha Sejahtera', val: 'Rp 45.500.000'},
                  {id: 'INV-1018', date: '22 Okt 2026', cat: 'Shoe Care Service', client: 'Budi Santoso', val: 'Rp 1.200.000'},
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-dark-700/30 transition-colors">
                    <td className="px-6 py-3 text-sm font-medium text-slate-300">{item.id}</td>
                    <td className="px-6 py-3 text-sm text-slate-400">{item.date}</td>
                    <td className="px-6 py-3 text-sm text-slate-300">{item.cat}</td>
                    <td className="px-6 py-3 text-sm text-slate-400">{item.client}</td>
                    <td className="px-6 py-3 text-sm font-bold text-success text-right">{item.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 border-t border-slate-700/50 bg-dark-900/50 text-center">
              <button className="text-xs text-primary-500 font-medium hover:text-primary-400 transition-colors">Tampilkan 50 Baris Selanjutnya</button>
            </div>
          </div>
        </div>
      )}

      {reportType !== 'finance' && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <PieChart size={48} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">Modul Laporan Sedang Disiapkan</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">Grafik detail untuk modul {reportType === 'sales' ? 'Penjualan' : 'Inventaris'} sedang dalam tahap pengembangan (MVP Phase 4).</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReportsView;
