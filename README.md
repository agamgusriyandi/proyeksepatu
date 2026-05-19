# Sistem Tracking & ERP Mini (A Dadan) - "Proyek Sepatu"

Selamat datang di repositori dokumentasi dan kode sumber untuk **Sistem Tracking & ERP Mini**. Proyek ini dirancang secara khusus untuk mendigitalisasi alur kerja **Bisnis Shoe Care & Repair (Perawatan Sepatu)**, dengan tetap mempertahankan kerangka *Business-to-Business* (B2B) yang komprehensif, mencakup manajemen stok (bahan baku sepatu), penjualan (Invoice), pembelian (Purchase Order), dan pelacakan servis (*Service Tracking*).

## 📋 Tentang Proyek

Sistem ini dirancang untuk menyelesaikan masalah pencatatan operasional sehari-hari agar lebih terintegrasi dan transparan. Sistem ini mengamodasi 3 alur (flow) bisnis utama:
1. **Sales Flow (Jalur Penjualan):** Mengelola siklus dari Quotation ➔ Sales Order ➔ Delivery Order (Surat Jalan) ➔ Sales Invoice ➔ Pembayaran (Payment).
2. **Purchase Flow (Jalur Pembelian):** Mengelola siklus dari Purchase Order (PO) ➔ Terima Barang Fisik (Goods Receipt) ➔ Purchase Invoice ➔ Pembayaran ke Supplier (Vendor Sparepart/Cat Sepatu).
3. **Service Flow (Jalur Servis Khusus Sepatu):** Melacak status sepatu yang diservis mulai dari masuk, pengerjaan (internal atau vendor pihak ketiga), pencatatan penggunaan *sparepart* (seperti Cat Angelus, Sol Vibram) yang otomatis memotong stok, hingga pengiriman balik dan penagihan.

## 💻 Tech Stack & Fitur Saat Ini

Saat ini, aplikasi web *Frontend (MVP)* telah dikembangkan dengan teknologi modern dan standar UX bahasa Indonesia, berfokus pada estetika premium (*Dark Mode & Glassmorphism*).
*   **Framework:** React 19 + Vite + TypeScript.
*   **Styling:** Tailwind CSS (dengan palet Dark Mode kustom).
*   **Ikonografi:** Lucide React.
*   **Fitur Frontend:**
    *   **Sidebar Navigasi Dinamis** (Sesuai dengan hierarki ERD: Beranda, Master Data, Pembelian, Penjualan, Tiket Servis, Inventaris, Tagihan).
    *   **Dashboard Overview** (Menampilkan ringkasan metrik servis aktif, pesanan, pendapatan dalam Rupiah, dan status kurir).
    *   **Shoe Service Ticket View** (Menampilkan detail pengerjaan sepatu, timeline interaktif, laporan kerusakan, dan tabel tagihan bahan baku).

## 📂 Struktur Dokumentasi & File

*   [`INFO.md`](INFO.md) - Rangkuman analisis sistem secara detail dari penjabaran alur dokumen mentah klien (beserta catatan RBAC terbaru).
*   [`ERD.md`](ERD.md) - Berisi desain struktur *database* (Entity Relationship Diagram) final dengan **28 Tabel**, termasuk sistem keamanan harga (*hardcopy pricing*), riwayat mutasi stok, dan modul **Role-Based Access Control (RBAC)** dinamis.
*   `frontend/` - Direktori utama untuk seluruh *source code* antarmuka React/Vite.
*   `task.md` - Papan pemantauan kemajuan tugas harian (*checklist*).

## 🚀 Status Eksekusi

Saat ini proyek berada di **Fase 3: Perakitan Halaman UI**.
*   ✅ **Fase 1:** Inisiasi Proyek & Konfigurasi (Vite, React, Tailwind).
*   ✅ **Fase 2:** Pembuatan Komponen Inti (Design System, Timeline, Cards).
*   ✅ **Fase 3:** Perakitan Halaman (Dashboard & Tiket Servis).
*   ⏳ **Fase 4:** Pengujian Mobile-First & Commit ke GitHub (Sedang berjalan).

---
*Repositori ini diinisiasi pada Mei 2026. Dibangun dengan fokus pada fungsionalitas ERP yang kokoh dan desain UI yang elegan.*
