import { 
  LayoutDashboard, 
  ShoppingCart, 
  FileText, 
  Truck, 
  Settings, 
  Users, 
  Package, 
  Wrench,
  CreditCard,
  FileCheck,
  ClipboardList,
  BarChart2,
  X
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (isOpen: boolean) => void;
}

const Sidebar = ({ currentView, setCurrentView, isMobileOpen, setIsMobileOpen }: SidebarProps) => {
  const handleNavClick = (viewName: string) => {
    setCurrentView(viewName);
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  const getNavClass = (viewName: string) => {
    return currentView === viewName 
      ? "flex items-center space-x-3 px-3 py-2.5 bg-primary-600/10 text-primary-400 rounded-lg font-medium transition-colors cursor-pointer text-sm border border-primary-500/20"
      : "flex items-center space-x-3 px-3 py-2.5 text-slate-400 hover:text-slate-200 hover:bg-dark-700/50 rounded-lg font-medium transition-colors cursor-pointer text-sm border border-transparent";
  };

  const getGroupClass = () => "text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 mt-6 px-3";

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`w-64 h-screen glass-panel rounded-none border-y-0 border-l-0 flex flex-col p-4 fixed left-0 top-0 z-50 shadow-xl transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-2 py-2 mb-6 border-b border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
              V
            </div>
            <h1 className="text-lg font-bold tracking-wider text-slate-100">VELOUR</h1>
          </div>
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto pr-2 pb-6 space-y-1 custom-scrollbar">
          <div onClick={() => handleNavClick('dashboard')} className={getNavClass('dashboard')}>
            <LayoutDashboard size={18} />
            <span>Beranda Dasbor</span>
          </div>
          <div onClick={() => handleNavClick('reports')} className={getNavClass('reports')}>
            <BarChart2 size={18} />
            <span>Laporan & Analitik</span>
          </div>

          {/* ALUR PENJUALAN */}
          <div className={getGroupClass()}>Penjualan</div>
          <div onClick={() => handleNavClick('sales-quotation')} className={getNavClass('sales-quotation')}>
            <FileText size={18} />
            <span>Penawaran (Quotation)</span>
          </div>
          <div onClick={() => handleNavClick('sales-order')} className={getNavClass('sales-order')}>
            <ClipboardList size={18} />
            <span>Pesanan (Sales Order)</span>
          </div>
          <div onClick={() => handleNavClick('sales-delivery')} className={getNavClass('sales-delivery')}>
            <Truck size={18} />
            <span>Surat Jalan (Delivery)</span>
          </div>
          <div onClick={() => handleNavClick('sales-invoice')} className={getNavClass('sales-invoice')}>
            <CreditCard size={18} />
            <span>Tagihan Penjualan</span>
          </div>

          {/* ALUR PEMBELIAN */}
          <div className={getGroupClass()}>Pembelian</div>
          <div onClick={() => handleNavClick('purchase-order')} className={getNavClass('purchase-order')}>
            <ShoppingCart size={18} />
            <span>Pesanan (PO)</span>
          </div>
          <div onClick={() => handleNavClick('purchase-receipt')} className={getNavClass('purchase-receipt')}>
            <FileCheck size={18} />
            <span>Terima Barang (GR)</span>
          </div>
          <div onClick={() => handleNavClick('purchase-invoice')} className={getNavClass('purchase-invoice')}>
            <CreditCard size={18} />
            <span>Tagihan Pembelian</span>
          </div>

          {/* ALUR SERVIS */}
          <div className={getGroupClass()}>Servis & Operasional</div>
          <div onClick={() => handleNavClick('service-tracking')} className={getNavClass('service-tracking')}>
            <Wrench size={18} />
            <span>Tiket Servis Aktif</span>
          </div>

          {/* MASTER DATA */}
          <div className={getGroupClass()}>Manajemen Data</div>
          <div onClick={() => handleNavClick('inventory')} className={getNavClass('inventory')}>
            <Package size={18} />
            <span>Stok Barang</span>
          </div>
          <div onClick={() => handleNavClick('master-data')} className={getNavClass('master-data')}>
            <Users size={18} />
            <span>Master Entitas</span>
          </div>
        </nav>

        <div className="pt-4 border-t border-slate-700/50 mt-auto">
          <div onClick={() => handleNavClick('settings')} className={getNavClass('settings')}>
            <Settings size={18} />
            <span>Pengaturan Sistem</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
