import { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, X } from 'lucide-react';

interface Column {
  key: string;
  label: string;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[];
}

interface GenericTableViewProps {
  title: string;
  subtitle: string;
  columns: Column[];
  data: any[];
  onAddNew?: () => void;
  formFields?: FormField[];
}

const GenericTableView = ({ title, subtitle, columns, data, onAddNew, formFields }: GenericTableViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNew = () => {
    if (onAddNew) {
      onAddNew();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="p-8 h-full flex flex-col relative">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
          <p className="text-slate-400">{subtitle}</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-slate-300 bg-dark-700 border border-slate-600 hover:bg-dark-600 transition-colors text-sm">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button 
            onClick={handleAddNew}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-white bg-primary-600 hover:bg-primary-500 transition-colors text-sm shadow-lg shadow-primary-500/20"
          >
            <Plus size={16} />
            <span>Buat Baru</span>
          </button>
        </div>
      </div>

      <div className="glass-panel flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-dark-800/50">
          <div className="flex items-center bg-dark-900 border border-slate-700 rounded-lg px-3 py-2 w-64 focus-within:border-primary-500/50 transition-colors">
            <Search size={16} className="text-slate-500 mr-2" />
            <input 
              type="text" 
              placeholder="Cari data..." 
              className="bg-transparent border-none outline-none text-sm text-slate-200 placeholder-slate-500 w-full focus:ring-0" 
            />
          </div>
          <div className="text-sm text-slate-400">
            Menampilkan {data.length} data
          </div>
        </div>

        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-dark-900/80 sticky top-0 z-10 backdrop-blur-sm">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50">
                    {col.label}
                  </th>
                ))}
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50 text-right">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-dark-700/30 transition-colors group">
                  {columns.map((col, colIndex) => {
                    const cellValue = row[col.key];
                    let renderContent = cellValue;

                    // Special rendering for Status column
                    if (col.key === 'status') {
                      let badgeClass = 'badge-primary';
                      if (cellValue.includes('Selesai') || cellValue.includes('Disetujui') || cellValue.includes('Lunas') || cellValue === 'Aktif') {
                        badgeClass = 'badge-success';
                      } else if (cellValue.includes('Overdue') || cellValue.includes('Ditolak') || cellValue.includes('Terlambat')) {
                        badgeClass = 'badge-danger';
                      } else if (cellValue.includes('Pending') || cellValue.includes('Proses') || cellValue.includes('Sebagian') || cellValue === 'Draft') {
                        badgeClass = 'badge-warning';
                      }
                      renderContent = <span className={badgeClass}>{cellValue}</span>;
                    }

                    return (
                      <td key={colIndex} className="px-6 py-4 text-sm text-slate-300 whitespace-nowrap">
                        {renderContent}
                      </td>
                    );
                  })}
                  <td className="px-6 py-4 text-sm text-slate-400 text-right">
                    <button className="p-1 rounded-md hover:bg-slate-700 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-slate-500 text-sm">
                    Belum ada data tersedia.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Generic Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-dark-800 border border-slate-700/80 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-dark-900/30">
              <h3 className="text-lg font-semibold text-slate-100">Tambah Data Baru</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 flex-1 text-slate-300">
              {formFields ? (
                <div className="space-y-4">
                  {formFields.map(field => (
                    <div key={field.id} className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400">{field.label}</label>
                      {field.type === 'select' ? (
                        <select className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none appearance-none cursor-pointer">
                          <option value="">-- Pilih --</option>
                          {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      ) : field.type === 'textarea' ? (
                         <textarea rows={3} placeholder={field.placeholder} className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none resize-none"></textarea>
                      ) : (
                         <input type={field.type} placeholder={field.placeholder} className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-sm text-slate-400 mb-6">
                    Formulir untuk <span className="font-semibold text-slate-200">{title}</span> sedang dalam tahap perancangan (WIP).
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400">Contoh Input Field</label>
                      <input type="text" placeholder="Ketik sesuatu..." className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400">Deskripsi / Keterangan</label>
                      <textarea rows={3} placeholder="Tambahkan catatan..." className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors resize-none"></textarea>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="px-6 py-4 border-t border-slate-700/50 bg-dark-900/30 flex justify-end space-x-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-transparent hover:bg-dark-700 transition-colors text-sm"
              >
                Batal
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="btn-primary"
              >
                Simpan Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenericTableView;
