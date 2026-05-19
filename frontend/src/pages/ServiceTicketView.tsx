import ProgressTimeline from '../components/ProgressTimeline';
import type { TimelineStep } from '../components/ProgressTimeline';
import { User, Calendar, Tag, AlertCircle } from 'lucide-react';

const ServiceTicketView = () => {
  const steps: TimelineStep[] = [
    { label: 'Diterima', date: '20 Okt, 10:30', status: 'completed' },
    { label: 'Pembersihan', date: '22 Okt, 14:15', status: 'completed' },
    { label: 'Pewarnaan', date: '24 Okt, Aktif', status: 'active' },
    { label: 'Reparasi Sol', status: 'pending' },
    { label: 'Cek Kualitas', status: 'pending' },
    { label: 'Siap Diambil', status: 'pending' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-2xl font-bold text-slate-100">Tiket Servis: #SST-87421</h2>
            <span className="badge-primary">Dalam Proses</span>
          </div>
          <p className="text-slate-400">Pelanggan: Budi Santoso</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-dark-700 border border-slate-600 hover:bg-dark-600 transition-colors">
            Cetak Laporan
          </button>
          <button className="btn-primary">
            Perbarui Status
          </button>
        </div>
      </div>

      <ProgressTimeline steps={steps} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Informasi Tiket</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-slate-500 mb-1 flex items-center"><Tag size={12} className="mr-1"/> Layanan</p>
                <p className="text-sm font-medium text-slate-200">Cuci Premium & Ganti Sol</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1 flex items-center"><User size={12} className="mr-1"/> Teknisi</p>
                <p className="text-sm font-medium text-slate-200">Mark K.</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1 flex items-center"><Calendar size={12} className="mr-1"/> Tgl Diterima</p>
                <p className="text-sm font-medium text-slate-200">20 Okt 2023</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1 flex items-center"><Calendar size={12} className="mr-1"/> Est. Selesai</p>
                <p className="text-sm font-medium text-warning">28 Okt 2023</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Foto Kondisi Sepatu</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square rounded-lg bg-dark-800 border border-slate-700/50 flex items-center justify-center relative overflow-hidden group">
                    <span className="text-slate-500 text-xs">Foto {i}</span>
                    <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-medium text-white">Lihat</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-300">Kondisi {i}</p>
                    <p className="text-[10px] text-slate-500">10:38 WIB</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-0 overflow-hidden">
            <div className="p-5 border-b border-slate-700/50 flex justify-between items-center bg-dark-800/30">
              <h3 className="text-lg font-semibold text-slate-200">Bahan & Sparepart</h3>
              <button className="text-xs font-medium text-primary-500 bg-primary-500/10 px-2 py-1 rounded border border-primary-500/20 hover:bg-primary-500/20">Tambah Item</button>
            </div>
            
            <table className="w-full text-left text-sm">
              <thead className="bg-dark-800/50 text-slate-400 text-xs uppercase">
                <tr>
                  <th className="px-5 py-3 font-medium">Item</th>
                  <th className="px-5 py-3 font-medium">Qty</th>
                  <th className="px-5 py-3 font-medium text-right">Harga</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr className="hover:bg-dark-700/30 transition-colors">
                  <td className="px-5 py-3 text-slate-300">Sol Vibram Pengganti</td>
                  <td className="px-5 py-3 text-slate-400">1</td>
                  <td className="px-5 py-3 text-slate-300 text-right">Rp 450.000</td>
                </tr>
                <tr className="hover:bg-dark-700/30 transition-colors">
                  <td className="px-5 py-3 text-slate-300">Cat Angelus - Hitam</td>
                  <td className="px-5 py-3 text-slate-400">1</td>
                  <td className="px-5 py-3 text-slate-300 text-right">Rp 125.000</td>
                </tr>
                <tr className="hover:bg-dark-700/30 transition-colors">
                  <td className="px-5 py-3 text-slate-300">Crep Protect Pembersih</td>
                  <td className="px-5 py-3 text-slate-400">1</td>
                  <td className="px-5 py-3 text-slate-300 text-right">Rp 99.000</td>
                </tr>
              </tbody>
              <tfoot className="bg-dark-800/80 border-t border-slate-700">
                <tr>
                  <th colSpan={2} className="px-5 py-4 text-right text-slate-400 font-medium uppercase text-xs">Total Biaya Bahan</th>
                  <th className="px-5 py-4 text-right text-lg font-bold text-slate-200">Rp 674.000</th>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="glass-panel p-5 border-l-4 border-l-warning bg-warning/5 rounded-l-none">
            <div className="flex space-x-3">
              <AlertCircle className="text-warning shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-medium text-warning mb-1">Catatan Teknisi</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Setelah membuka sol lama, terlihat ada keausan berat di area tumit. Membutuhkan tambahan waktu untuk persiapan dan pengolesan *deglazer* sebelum sol Vibram bisa dipasang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTicketView;
