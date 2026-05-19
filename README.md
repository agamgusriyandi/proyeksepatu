# Sistem Tracking & ERP Mini (A Dadan)

Selamat datang di repositori dokumentasi dan pengembangan untuk **Sistem Tracking & ERP Mini**. Proyek ini diinisiasi untuk mendigitalisasi alur kerja perusahaan yang meliputi manajemen stok, penjualan, pembelian, dan pelacakan servis (*service tracking*).

## 📋 Tentang Proyek

Sistem ini dirancang untuk menyelesaikan masalah pencatatan operasional sehari-hari agar lebih terintegrasi dan transparan. Sistem ini mengamodasi 3 alur (flow) bisnis utama:
1. **Sales Flow (Jalur Penjualan):** Mengelola siklus dari Quotation ➔ Sales Order ➔ Delivery Order (Surat Jalan) ➔ Sales Invoice ➔ Pembayaran (Payment).
2. **Purchase Flow (Jalur Pembelian):** Mengelola siklus dari Purchase Order (PO) ➔ Terima Barang Fisik (Goods Receipt) ➔ Purchase Invoice ➔ Pembayaran ke Supplier.
3. **Service Flow (Jalur Servis):** Melacak status barang yang diservis mulai dari masuk, pengerjaan (internal atau vendor pihak ketiga), pencatatan penggunaan *sparepart* yang otomatis memotong stok, hingga pengiriman balik dan penagihan.

## 📂 Struktur Dokumentasi

Di dalam repositori ini terdapat file-file krusial sebagai fondasi awal proyek:

*   [`INFO.md`](INFO.md) - Rangkuman analisis sistem secara detail dari penjabaran alur dokumen mentah klien.
*   [`ERD.md`](ERD.md) - Berisi desain struktur *database* (Entity Relationship Diagram) final yang sudah mendukung keamanan harga (*hardcopy pricing*) dan riwayat mutasi stok. Ditulis dalam format *Mermaid*.
*   `PHOTO-2026-05-18-23-18-52.jpg` - Gambar coretan visual *flowchart* alur kerja asli (sebagai referensi).
*   `SYSTEM TRACKING DOCUMENT A DADAN.xlsx` - Bahan mentah spreadsheet yang memuat detail daftar *field* dan fitur yang dibutuhkan A Dadan.

## 🚀 Rencana Selanjutnya

Saat ini proyek baru saja menyelesaikan fase **System Analysis & Database Engineering**.
Langkah-langkah yang akan dilakukan selanjutnya:
- [ ] Merancang antarmuka sistem (UI/UX Wireframing)
- [ ] Menyepakati dan menyiapkan *Tech Stack* (Backend & Frontend Framework)
- [ ] Membangun dan meluncurkan *Minimum Viable Product* (MVP)

---
*Repositori ini diinisiasi pada Mei 2026.*
