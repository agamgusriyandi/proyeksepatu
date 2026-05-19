import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './pages/DashboardView';
import ServiceTicketView from './pages/ServiceTicketView';
import GenericTableView from './components/GenericTableView';
import AccountSettingsView from './pages/AccountSettingsView';
import RBACSettingsView from './pages/RBACSettingsView';
import ReportsView from './pages/ReportsView';
import { Search, Bell, ChevronDown, LogOut, User, Settings as SettingsIcon, Menu } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdowns when clicking outside (simplified logic)
  useEffect(() => {
    const handleClickOutside = () => {
      setShowProfileMenu(false);
      setShowNotifMenu(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotifMenu(false);
    setShowProfileMenu(!showProfileMenu);
  };

  const handleNotifClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowProfileMenu(false);
    setShowNotifMenu(!showNotifMenu);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView setCurrentView={setCurrentView} />;
      case 'reports':
        return <ReportsView />;
      case 'system-logs':
        return <GenericTableView 
          title="Log Aktivitas Sistem" subtitle="Jejak audit dan riwayat aktivitas seluruh entitas." 
          columns={[{key: 'date', label: 'Waktu'}, {key: 'module', label: 'Modul'}, {key: 'action', label: 'Aktivitas'}, {key: 'user', label: 'Pengguna'}, {key: 'status', label: 'Status'}]}
          data={[
            {date: 'Hari ini, 09:12', module: 'Penjualan (AR)', action: 'Invoice #INV-1022 Jatuh Tempo', user: 'System (Auto)', status: 'Kritis'},
            {date: 'Hari ini, 08:45', module: 'Penjualan (QUO)', action: 'Quotation Q-1002 Disetujui PT Alpha', user: 'Alex Wijaya', status: 'Sukses'},
            {date: 'Kemarin, 16:30', module: 'Pembelian (GR)', action: 'Penerimaan Barang PO-5011 (Sebagian)', user: 'Joko', status: 'Info'},
            {date: 'Kemarin, 14:15', module: 'Servis', action: 'Tiket #SRV-87421 Melewati SLA', user: 'System (Auto)', status: 'Warning'},
          ]} 
          formFields={[
            {id: 'module', label: 'Pilih Modul', type: 'select', options: ['Penjualan', 'Pembelian', 'Servis', 'Sistem']},
            {id: 'action', label: 'Deskripsi Log (Manual)', type: 'textarea', placeholder: 'Masukkan catatan manual ke dalam sistem...'}
          ]}
        />;
      case 'service-tracking':
        return <ServiceTicketView />;
      case 'account-settings':
        return <AccountSettingsView />;
      case 'sales-quotation':
        return <GenericTableView 
          title="Data Penawaran (Quotation)" subtitle="Kelola penawaran harga ke pelanggan B2B." 
          columns={[{key: 'id', label: 'ID Dokumen'}, {key: 'client', label: 'Pelanggan'}, {key: 'date', label: 'Tanggal'}, {key: 'total', label: 'Total Nilai'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'QUO-1002', client: 'PT Alpha Sejahtera', date: '19 Mei 2026', total: 'Rp 45.500.000', status: 'Draft'},
            {id: 'QUO-1001', client: 'CV Karya Utama', date: '18 Mei 2026', total: 'Rp 1.250.000', status: 'Disetujui'},
          ]} 
          formFields={[
            {id: 'quotation_number', label: 'No Bukti (quotation_number)', type: 'text', placeholder: 'Contoh: QUO-1003'},
            {id: 'customer_id', label: 'Pilih Pelanggan (customer_id)', type: 'select', options: ['PT Alpha Sejahtera', 'CV Karya Utama']},
            {id: 'date', label: 'Tanggal (date)', type: 'date'},
            {id: 'valid_until', label: 'Masa Berlaku (valid_until)', type: 'date'},
            {id: 'reference_delivery_id', label: 'Ref SJ Sparepart Opsional (reference_delivery_id)', type: 'text'},
            {id: 'notes', label: 'Catatan (notes)', type: 'textarea'}
          ]}
        />;
      case 'sales-order':
        return <GenericTableView 
          title="Pesanan Penjualan (SO)" subtitle="Daftar pesanan yang telah disetujui pelanggan." 
          columns={[{key: 'id', label: 'ID SO'}, {key: 'quo_id', label: 'Ref Quotation'}, {key: 'client', label: 'Pelanggan'}, {key: 'total', label: 'Total (Fixed)'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'SO-9904', quo_id: 'QUO-0990', client: 'Toko Sepatu Bersama', total: 'Rp 8.000.000', status: 'Diproses'},
            {id: 'SO-9903', quo_id: 'QUO-0988', client: 'Bapak Andi', total: 'Rp 450.000', status: 'Selesai'},
          ]} 
          formFields={[
            {id: 'so_number', label: 'No Bukti SO (so_number)', type: 'text'},
            {id: 'quotation_id', label: 'Ref Quotation (quotation_id)', type: 'text'},
            {id: 'customer_id', label: 'Pilih Pelanggan (customer_id)', type: 'select', options: ['PT Alpha Sejahtera', 'CV Karya Utama']},
            {id: 'date', label: 'Tanggal (date)', type: 'date'},
            {id: 'notes', label: 'Catatan (notes)', type: 'textarea'}
          ]}
        />;
      case 'sales-delivery':
        return <GenericTableView 
          title="Surat Jalan (Delivery Order)" subtitle="Pantau pengiriman barang / pengembalian servis ke pelanggan." 
          columns={[{key: 'id', label: 'ID Surat Jalan'}, {key: 'ref', label: 'Ref SO / Servis'}, {key: 'client', label: 'Penerima'}, {key: 'courier', label: 'Kurir'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'DO-4421', ref: 'SO-9903', client: 'Bapak Andi', courier: 'Kurir Internal (Joko)', status: 'Dalam Perjalanan'},
          ]} 
          formFields={[
            {id: 'do_number', label: 'No Surat Jalan (do_number)', type: 'text'},
            {id: 'sales_order_id', label: 'Ref SO (sales_order_id)', type: 'text'},
            {id: 'customer_id', label: 'Pelanggan Tujuan (customer_id)', type: 'select', options: ['PT Alpha Sejahtera', 'Bapak Andi']},
            {id: 'courier_id', label: 'Kurir Internal (courier_id)', type: 'select', options: ['Karyawan A', 'Karyawan B']},
            {id: 'date', label: 'Tanggal Pengiriman (date)', type: 'date'},
            {id: 'type', label: 'Tipe SJ (type)', type: 'select', options: ['Normal', 'Sparepart']},
            {id: 'courier_name_ext', label: 'Ekspedisi Luar Opsional (courier_name_ext)', type: 'text'},
            {id: 'tracking_number', label: 'No Resi (tracking_number)', type: 'text'}
          ]}
        />;
      case 'sales-invoice':
        return <GenericTableView 
          title="Tagihan Penjualan (AR)" subtitle="Faktur tagihan yang dikeluarkan untuk pelanggan." 
          columns={[{key: 'id', label: 'ID Invoice'}, {key: 'client', label: 'Pelanggan'}, {key: 'due', label: 'Jatuh Tempo'}, {key: 'total', label: 'Total Tagihan'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'INV-1022', client: 'CV Karya Utama', due: '18 Mei 2026', total: 'Rp 4.500.000', status: 'Overdue'},
            {id: 'INV-1023', client: 'Toko Sepatu Bersama', due: '25 Mei 2026', total: 'Rp 8.000.000', status: 'Belum Lunas'},
          ]} 
          formFields={[
            {id: 'invoice_number', label: 'No Invoice (invoice_number)', type: 'text'},
            {id: 'customer_id', label: 'Pelanggan (customer_id)', type: 'select', options: ['CV Karya Utama', 'Toko Sepatu Bersama']},
            {id: 'company_id', label: 'PT Acuan PPN (company_id)', type: 'select', options: ['PT Velour', 'Non-PKP']},
            {id: 'date', label: 'Tanggal Invoice (date)', type: 'date'},
            {id: 'due_date', label: 'Jatuh Tempo (due_date)', type: 'date'},
            {id: 'tax_amount', label: 'Nilai PPN (tax_amount)', type: 'number'},
            {id: 'total_amount', label: 'Total Tagihan (total_amount)', type: 'number'}
          ]}
        />;
      case 'purchase-order':
        return <GenericTableView 
          title="Pesanan Pembelian (PO)" subtitle="Pesanan pengadaan bahan baku / sparepart ke supplier." 
          columns={[{key: 'id', label: 'ID PO'}, {key: 'supplier', label: 'Supplier'}, {key: 'item', label: 'Deskripsi'}, {key: 'est', label: 'Estimasi Tiba'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'PO-5012', supplier: 'Supplier Angelus Indo', item: 'Cat Akrilik Putih (20pcs)', est: '18 Mei 2026', status: 'Terlambat'},
            {id: 'PO-5011', supplier: 'Distributor Sol Vibram', item: 'Sol Karet (50pcs)', est: '25 Mei 2026', status: 'Sebagian'},
          ]} 
          formFields={[
            {id: 'po_number', label: 'No PO (po_number)', type: 'text'},
            {id: 'supplier_id', label: 'Supplier (supplier_id)', type: 'select', options: ['Supplier Angelus Indo', 'Distributor Sol Vibram']},
            {id: 'date', label: 'Tanggal (date)', type: 'date'},
            {id: 'payment_term', label: 'Termin Pembayaran (payment_term)', type: 'select', options: ['Cash', 'TOP']},
            {id: 'reference_quotation_id', label: 'Ref Quotation Opsional (reference_quotation_id)', type: 'text'},
            {id: 'notes', label: 'Catatan (notes)', type: 'textarea'}
          ]}
        />;
      case 'purchase-receipt':
        return <GenericTableView 
          title="Penerimaan Barang (GR)" subtitle="Tanda terima fisik atas barang dari supplier." 
          columns={[{key: 'id', label: 'ID GR'}, {key: 'po_ref', label: 'Ref PO'}, {key: 'supplier', label: 'Supplier'}, {key: 'date', label: 'Tgl Terima'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'GR-992', po_ref: 'PO-5011', supplier: 'Distributor Sol Vibram', date: '19 Mei 2026', status: 'Selesai'},
          ]} 
          formFields={[
            {id: 'gr_number', label: 'No Bukti Terima (gr_number)', type: 'text'},
            {id: 'po_id', label: 'Ref PO (po_id)', type: 'text'},
            {id: 'date', label: 'Tanggal Terima (date)', type: 'date'},
            {id: 'received_by', label: 'Diterima Oleh (received_by)', type: 'select', options: ['Karyawan A', 'Karyawan B']},
            {id: 'notes', label: 'Catatan (notes)', type: 'textarea'}
          ]}
        />;
      case 'purchase-invoice':
        return <GenericTableView 
          title="Tagihan Pembelian (AP)" subtitle="Faktur tagihan yang diterima dari supplier." 
          columns={[{key: 'id', label: 'No Faktur'}, {key: 'supplier', label: 'Supplier'}, {key: 'due', label: 'Jatuh Tempo'}, {key: 'total', label: 'Nominal'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'FAK-771', supplier: 'Supplier Angelus Indo', due: '20 Mei 2026', total: 'Rp 3.500.000', status: 'Belum Lunas'},
          ]} 
          formFields={[
            {id: 'invoice_number', label: 'No Faktur (invoice_number)', type: 'text'},
            {id: 'supplier_id', label: 'Supplier (supplier_id)', type: 'select', options: ['Supplier Angelus Indo']},
            {id: 'date', label: 'Tanggal Faktur (date)', type: 'date'},
            {id: 'due_date', label: 'Jatuh Tempo (due_date)', type: 'date'},
            {id: 'tax_amount', label: 'PPN Masukan (tax_amount)', type: 'number'},
            {id: 'total_amount', label: 'Total Tagihan (total_amount)', type: 'number'}
          ]}
        />;
      case 'inventory':
        return <GenericTableView 
          title="Stok & Inventaris" subtitle="Data master bahan baku dan sparepart sepatu." 
          columns={[{key: 'code', label: 'Kode Barang'}, {key: 'name', label: 'Nama Barang'}, {key: 'stock', label: 'Stok Saat Ini'}, {key: 'unit', label: 'Satuan'}, {key: 'status', label: 'Status'}]}
          data={[
            {code: 'BRG-001', name: 'Cat Angelus Flat White 1oz', stock: '24', unit: 'Botol', status: 'Aman'},
            {code: 'BRG-002', name: 'Sol Vibram Karet', stock: '5', unit: 'Pasang', status: 'Restock (Warning)'},
          ]} 
          formFields={[
            {id: 'code', label: 'Kode Produk (code)', type: 'text'},
            {id: 'name', label: 'Nama Produk (name)', type: 'text'},
            {id: 'type', label: 'Tipe (type)', type: 'select', options: ['Barang', 'Jasa']},
            {id: 'base_price', label: 'Harga Modal (base_price)', type: 'number'},
            {id: 'stock_quantity', label: 'Stok Awal (stock_quantity)', type: 'number'},
            {id: 'unit', label: 'Satuan Default (unit)', type: 'text'}
          ]}
        />;
      case 'master-data':
        return <GenericTableView 
          title="Master Pelanggan (Customers)" subtitle="Daftar pelanggan dan PIC perusahaan (Sesuai ERD)." 
          columns={[{key: 'id', label: 'ID'}, {key: 'name', label: 'Nama Pelanggan'}, {key: 'company', label: 'Perusahaan'}, {key: 'phone', label: 'Kontak'}, {key: 'status', label: 'Status'}]}
          data={[
            {id: 'CUST-01', name: 'Bapak Andi', company: 'Pribadi', phone: '0812-xxxx-xxxx', status: 'Aktif'},
            {id: 'CUST-02', name: 'Budi (Purchasing)', company: 'PT Alpha Sejahtera', phone: '022-xxxxx', status: 'Aktif'},
          ]} 
          formFields={[
            {id: 'company_id', label: 'Pilih Perusahaan Induk (company_id)', type: 'select', options: ['PT Alpha Sejahtera', 'CV Karya Utama']},
            {id: 'name', label: 'Nama Pelanggan / PIC (name)', type: 'text'},
            {id: 'position', label: 'Jabatan (position)', type: 'text'},
            {id: 'phone', label: 'Telepon (phone)', type: 'text'},
            {id: 'address', label: 'Alamat (address)', type: 'textarea'}
          ]}
        />;
      case 'settings':
        return <RBACSettingsView />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-300 mb-2">Work in Progress</h2>
              <p className="text-slate-500">Modul {currentView.replace('-', ' ')} sedang dalam tahap pengembangan MVP.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex text-slate-200 font-sans selection:bg-primary-500/30">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        isMobileOpen={isMobileMenuOpen}
        setIsMobileOpen={setIsMobileMenuOpen}
      />
      <main className="md:ml-64 flex-1 h-screen overflow-y-auto custom-scrollbar w-full">
        <header className="sticky top-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-slate-700/50 px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button 
              className="md:hidden text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-slate-400 capitalize hover:text-slate-200 transition-colors cursor-pointer hidden sm:block">
                Velour & Vogue
              </span>
              <span className="text-slate-600 hidden sm:block">/</span>
              <span className="text-sm font-medium text-slate-200 capitalize">
                {currentView.replace('-', ' ')}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-dark-800 border border-slate-700/80 rounded-lg px-3 py-1.5 focus-within:border-primary-500/50 transition-colors">
              <Search size={16} className="text-slate-500 mr-2" />
              <input 
                type="text" 
                placeholder="Cari transaksi..." 
                className="bg-transparent border-none outline-none text-sm text-slate-200 placeholder-slate-500 w-48 focus:ring-0" 
              />
            </div>
            
            {/* Notification */}
            <div className="relative">
              <button 
                onClick={handleNotifClick}
                className={`relative transition-colors ${showNotifMenu ? 'text-primary-400' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center border-2 border-dark-900">
                  3
                </span>
              </button>
              
              {showNotifMenu && (
                <div 
                  className="absolute right-0 mt-4 w-72 bg-dark-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-3 border-b border-slate-700 bg-dark-900/50 flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-slate-200">Notifikasi (3)</h4>
                    <span className="text-xs text-primary-500 cursor-pointer hover:text-primary-400">Tandai dibaca</span>
                  </div>
                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                    <div className="p-3 border-b border-slate-700/50 hover:bg-dark-700/50 cursor-pointer transition-colors">
                      <p className="text-sm text-slate-200"><span className="text-red-400 font-medium">Overdue:</span> Invoice INV-1022</p>
                      <p className="text-xs text-slate-500 mt-1">1 jam yang lalu</p>
                    </div>
                    <div className="p-3 border-b border-slate-700/50 hover:bg-dark-700/50 cursor-pointer transition-colors">
                      <p className="text-sm text-slate-200"><span className="text-warning font-medium">SLA Alert:</span> Tiket SRV-87421</p>
                      <p className="text-xs text-slate-500 mt-1">3 jam yang lalu</p>
                    </div>
                    <div className="p-3 hover:bg-dark-700/50 cursor-pointer transition-colors">
                      <p className="text-sm text-slate-200"><span className="text-success font-medium">Sukses:</span> PO-5011 Tiba</p>
                      <p className="text-xs text-slate-500 mt-1">Kemarin</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Divider */}
            <div className="w-px h-6 bg-slate-700/80 hidden sm:block"></div>
            
            {/* User Profile */}
            <div className="relative">
              <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={handleProfileClick}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-slate-200 group-hover:text-primary-400 transition-colors">Alex Wijaya</p>
                  <p className="text-xs text-slate-500">Superadmin</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-9 h-9 rounded-full bg-slate-700 overflow-hidden border transition-colors shadow-sm ${showProfileMenu ? 'border-primary-500' : 'border-slate-600 group-hover:border-primary-400'}`}>
                    <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${showProfileMenu ? 'text-primary-500 rotate-180' : 'text-slate-500 group-hover:text-slate-300'}`} />
                </div>
              </div>

              {showProfileMenu && (
                <div 
                  className="absolute right-0 mt-4 w-48 bg-dark-800 border border-slate-700 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-4 py-2 border-b border-slate-700/50 mb-1 sm:hidden">
                    <p className="text-sm font-medium text-slate-200">Alex Wijaya</p>
                    <p className="text-xs text-slate-500">Superadmin</p>
                  </div>
                  <button 
                    onClick={() => setCurrentView('account-settings')}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-dark-700/50 transition-colors"
                  >
                    <User size={16} className="text-slate-400" />
                    <span>Profil Saya</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('settings')}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-dark-700/50 transition-colors"
                  >
                    <SettingsIcon size={16} className="text-slate-400" />
                    <span>Pengaturan Sistem</span>
                  </button>
                  <div className="my-1 border-t border-slate-700/50"></div>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                    <LogOut size={16} />
                    <span>Keluar (Logout)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="pb-12 h-[calc(100vh-73px)]" onClick={() => { setShowProfileMenu(false); setShowNotifMenu(false); }}>
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;
