import { useState } from 'react';
import { Search, Plus, Shield, Users, Key, MoreHorizontal, Check, X } from 'lucide-react';

const RBACSettingsView = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'roles'>('users');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Dummy berdasarkan ERD RBAC
  const users = [
    { id: 'USR-001', username: 'alex.wijaya', name: 'Alex Wijaya', role: 'Superadmin', status: 'Aktif' },
    { id: 'USR-002', username: 'joko.kurir', name: 'Joko', role: 'Logistik', status: 'Aktif' },
    { id: 'USR-003', username: 'siska.finance', name: 'Siska', role: 'Keuangan', status: 'Aktif' },
    { id: 'USR-004', username: 'budi.sales', name: 'Budi Santoso', role: 'Sales', status: 'Nonaktif' },
  ];

  const roles = [
    { id: 'ROL-01', name: 'Superadmin', users: 1, desc: 'Akses penuh ke semua modul sistem.' },
    { id: 'ROL-02', name: 'Sales', users: 4, desc: 'Akses ke modul Quotation, SO, dan Pelanggan.' },
    { id: 'ROL-03', name: 'Logistik', users: 3, desc: 'Akses ke modul PO, GR, Surat Jalan, dan Stok.' },
    { id: 'ROL-04', name: 'Keuangan', users: 2, desc: 'Akses ke AR, AP, dan Laporan Keuangan.' },
  ];

  const permissions = [
    'View_Sales', 'Create_Sales', 'Edit_Sales', 'Delete_Sales',
    'View_Purchase', 'Create_Purchase', 'Edit_Purchase', 'Delete_Purchase',
    'View_Service', 'Create_Service', 'Edit_Service',
    'View_Finance', 'Manage_Users'
  ];

  return (
    <div className="p-8 h-full flex flex-col relative">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center"><Shield className="mr-3 text-primary-500" size={28} /> Pengaturan RBAC</h2>
          <p className="text-slate-400 mt-1">Manajemen Role-Based Access Control, Hak Akses, dan Pengguna Sistem.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-white bg-primary-600 hover:bg-primary-500 transition-colors text-sm shadow-lg shadow-primary-500/20"
        >
          <Plus size={16} />
          <span>{activeTab === 'users' ? 'Tambah Pengguna' : 'Buat Role Baru'}</span>
        </button>
      </div>

      <div className="glass-panel flex-1 flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="flex px-6 pt-4 border-b border-slate-700/50 bg-dark-900/50">
          <button 
            onClick={() => setActiveTab('users')}
            className={`flex items-center space-x-2 pb-4 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'users' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Users size={16} />
            <span>Manajemen Pengguna (User_Roles)</span>
          </button>
          <button 
            onClick={() => setActiveTab('roles')}
            className={`flex items-center space-x-2 pb-4 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'roles' ? 'border-primary-500 text-primary-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Key size={16} />
            <span>Manajemen Peran (Role_Permissions)</span>
          </button>
        </div>

        <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-dark-800/30">
          <div className="flex items-center bg-dark-900 border border-slate-700 rounded-lg px-3 py-2 w-64 focus-within:border-primary-500/50 transition-colors">
            <Search size={16} className="text-slate-500 mr-2" />
            <input 
              type="text" 
              placeholder={`Cari ${activeTab === 'users' ? 'pengguna' : 'role'}...`} 
              className="bg-transparent border-none outline-none text-sm text-slate-200 placeholder-slate-500 w-full focus:ring-0" 
            />
          </div>
        </div>

        {/* Tab Content: Users */}
        {activeTab === 'users' && (
          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead className="bg-dark-900/80 sticky top-0 z-10 backdrop-blur-sm">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50">Pengguna</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50">Username</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50">Role Terpasang</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/50 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-dark-700/30 transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-slate-200">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">@{user.username}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-primary-500/10 text-primary-400 border border-primary-500/20 px-2.5 py-1 rounded-md text-xs font-medium">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={user.status === 'Aktif' ? 'badge-success' : 'badge-danger'}>{user.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 text-right">
                      <button className="p-1.5 rounded-md hover:bg-slate-700 hover:text-white transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content: Roles & Permissions Matrix */}
        {activeTab === 'roles' && (
          <div className="flex-1 overflow-auto custom-scrollbar flex">
            {/* Roles List */}
            <div className="w-1/3 border-r border-slate-700/50 flex flex-col">
              {roles.map((role, i) => (
                <div key={role.id} className={`p-4 border-b border-slate-700/50 cursor-pointer transition-colors ${i === 0 ? 'bg-primary-600/10 border-l-4 border-l-primary-500' : 'hover:bg-dark-700/30 border-l-4 border-l-transparent'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className={`font-semibold ${i === 0 ? 'text-primary-400' : 'text-slate-200'}`}>{role.name}</h4>
                    <span className="text-xs bg-dark-900 px-2 py-0.5 rounded text-slate-400">{role.users} Users</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2">{role.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Permissions Matrix */}
            <div className="flex-1 p-6 bg-dark-900/20">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">Hak Akses: Superadmin</h3>
                  <p className="text-sm text-slate-400 mt-1">Konfigurasi <span className="font-mono text-primary-400 text-xs">ROLE_PERMISSIONS</span></p>
                </div>
                <button className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white text-sm font-medium rounded-lg transition-colors border border-slate-600">
                  Simpan Hak Akses
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {permissions.map((perm) => {
                  const isChecked = true; // Superadmin has all
                  return (
                    <label key={perm} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-dark-800/50 cursor-pointer hover:bg-dark-700/50 transition-colors">
                      <span className="text-sm text-slate-300 font-medium font-mono">{perm}</span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border ${isChecked ? 'bg-primary-500 border-primary-500 text-white' : 'border-slate-600'}`}>
                        {isChecked && <Check size={14} />}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RBAC Specific Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-dark-800 border border-slate-700/80 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-dark-900/30">
              <h3 className="text-lg font-semibold text-slate-100 flex items-center">
                {activeTab === 'users' ? <><Users className="mr-2 text-primary-500" size={18}/> Tambah Pengguna Sistem</> : <><Key className="mr-2 text-primary-500" size={18}/> Buat Role Baru</>}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 flex-1 space-y-5">
              {activeTab === 'users' ? (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400">Nama Karyawan / Pengguna</label>
                    <input type="text" placeholder="Masukkan nama..." className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400">Username (Login ID)</label>
                    <input type="text" placeholder="contoh: nama.divisi" className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400">Assign Role (USER_ROLES)</label>
                    <select className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none appearance-none cursor-pointer">
                      <option value="">-- Pilih Role --</option>
                      {roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400">Nama Peran (Role Name)</label>
                    <input type="text" placeholder="contoh: Manager Gudang" className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400">Deskripsi Role</label>
                    <textarea rows={3} placeholder="Jelaskan cakupan akses role ini..." className="w-full bg-dark-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:border-primary-500 outline-none resize-none"></textarea>
                  </div>
                  <div className="bg-warning/10 border border-warning/20 p-3 rounded-lg flex items-start space-x-2 mt-2">
                    <Shield className="text-warning shrink-0 mt-0.5" size={16} />
                    <p className="text-xs text-warning leading-relaxed">Hak akses (Permissions) untuk role ini dapat diatur melalui matriks permission setelah role ini berhasil dibuat.</p>
                  </div>
                </>
              )}
            </div>

            <div className="px-6 py-4 border-t border-slate-700/50 bg-dark-900/30 flex justify-end space-x-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:bg-dark-700 transition-colors text-sm">
                Batal
              </button>
              <button onClick={() => setIsModalOpen(false)} className="btn-primary">
                Simpan & Terapkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RBACSettingsView;
