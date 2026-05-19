import { User, Mail, Phone, Shield, Bell, Save, Key } from 'lucide-react';

const AccountSettingsView = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto h-full pb-20">
      <div className="mb-8 border-b border-slate-700/50 pb-6">
        <h2 className="text-2xl font-bold text-slate-100">Pengaturan Akun Saya</h2>
        <p className="text-slate-400 mt-1">Kelola informasi profil dan keamanan akun Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Foto & Info Singkat */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-panel p-6 flex flex-col items-center text-center">
            <div className="relative mb-4 group cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-primary-500 transition-colors shadow-xl">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-dark-900/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-medium">Ubah Foto</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Alex Wijaya</h3>
            <p className="text-sm text-primary-500 mb-1">Superadmin</p>
            <span className="badge-success mt-2">Akun Aktif</span>
          </div>

          <div className="glass-panel p-6">
            <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center"><Shield size={16} className="mr-2 text-slate-400" /> Keamanan</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span>Login Terakhir</span>
                <span className="text-slate-200">Hari ini, 08:12</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span>Otentikasi 2FA</span>
                <span className="text-success font-medium">Aktif</span>
              </div>
              <button className="w-full text-left text-primary-500 hover:text-primary-400 font-medium transition-colors">
                Lihat Riwayat Login
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form Edit */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-6 border-b border-slate-700/50 pb-4">Informasi Dasar</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 flex items-center"><User size={14} className="mr-1.5" /> Nama Lengkap</label>
                  <input type="text" defaultValue="Alex Wijaya" className="w-full bg-dark-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 flex items-center"><User size={14} className="mr-1.5" /> Username</label>
                  <input type="text" defaultValue="alex.wijaya" disabled className="w-full bg-dark-900 border border-slate-700/50 text-slate-500 rounded-lg px-4 py-2 cursor-not-allowed" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 flex items-center"><Mail size={14} className="mr-1.5" /> Email</label>
                  <input type="email" defaultValue="alex@velourvogue.com" className="w-full bg-dark-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 flex items-center"><Phone size={14} className="mr-1.5" /> Nomor Telepon</label>
                  <input type="text" defaultValue="0812-3456-7890" className="w-full bg-dark-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="button" className="btn-primary flex items-center space-x-2">
                  <Save size={16} />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-6 border-b border-slate-700/50 pb-4">Ganti Password</h3>
            
            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400 flex items-center"><Key size={14} className="mr-1.5" /> Password Saat Ini</label>
                <input type="password" placeholder="••••••••" className="w-full bg-dark-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors max-w-md" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400">Password Baru</label>
                <input type="password" placeholder="Minimal 8 karakter" className="w-full bg-dark-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500 transition-colors max-w-md" />
              </div>
              
              <div className="pt-4 flex justify-start">
                <button type="button" className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-dark-700 border border-slate-600 hover:bg-dark-600 transition-colors text-sm flex items-center space-x-2">
                  <Key size={16} />
                  <span>Update Password</span>
                </button>
              </div>
            </form>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-700/50 pb-4 flex items-center"><Bell size={18} className="mr-2 text-primary-500" /> Preferensi Notifikasi</h3>
            <div className="space-y-4">
              {[
                { title: 'Notifikasi Email', desc: 'Terima email saat ada Servis yang mendekati SLA', checked: true },
                { title: 'Peringatan Dashboard', desc: 'Tampilkan pop-up merah saat ada tagihan Overdue', checked: true },
                { title: 'Notifikasi Telegram/WA', desc: 'Kirim rangkuman PO harian ke Telegram', checked: false },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium text-slate-200">{pref.title}</h5>
                    <p className="text-xs text-slate-500">{pref.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={pref.checked} />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccountSettingsView;
