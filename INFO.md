# Analisis Sistem Tracking & ERP Mini (A Dadan)

Dokumen ini berisi hasil analisis dari dua file sumber yang terdapat pada proyek ini:
1. `SYSTEM TRACKING DOCUMENT A DADAN.xlsx` (Dokumen Excel detail fitur/modul)
2. `PHOTO-2026-05-18-23-18-52.jpg` (Gambar/Foto coretan alur sistem)

Berdasarkan kedua sumber tersebut, proyek ini bertujuan untuk membangun sebuah **Sistem ERP Mini / Sistem Tracking Terintegrasi** yang menangani proses pengadaan barang (purchasing), penjualan, pengiriman, dan pelacakan servis (service tracking).

---

## 1. Modul Master Data
Sistem membutuhkan manajemen data inti (Master Data) untuk menunjang operasional:
*   **Master Product (Barang/Jasa):** Menyimpan detail seperti Kode Barang, Nama Barang, Harga Modal. Mendukung pelampiran file/foto produk (baik dari kamera langsung maupun galeri).
*   **Master Supplier:** Menyimpan informasi kontak supplier (PIC, No. Telp, Sales Supplier, No. Rekening). Mendukung pelampiran dokumen/foto.
*   **Master Customer & Perusahaan:** 
    * Menyimpan data klien.
    * Terdapat pemisahan entitas PT menjadi dua kategori: **PT PPN** dan **PT Non-PPN** untuk keperluan perpajakan.
*   **Master Employee / Kurir:** Mengelola data karyawan internal dan daftar kurir pengiriman (contoh: JNE, kurir internal).

## 2. Modul Penawaran (Quotation)
Modul untuk membuat draf penawaran kepada customer sebelum terjadi transaksi.
*   **Header Penawaran:** No. Bukti, Tanggal, Tujuan (Customer), Jabatan, No. Tlp, Alamat.
*   **Detail Item:** Memasukkan Kode Barang, QTY, Satuan, Keterangan, dan Harga. Harga pada modul ini bersifat *fleksibel* (bisa diubah manual tanpa syarat).
*   **Workflow / Status:** Melacak status (*Progress*) dari tiap penawaran (Draft, Dikirim, Disetujui, Ditolak).
*   **Fitur Khusus:** 
    * Penawaran dapat ditarik/dibuat berdasarkan **Surat Jalan Sparepart** (Kasus: barang dikirim dulu, di akhir bulan baru direkap menjadi penawaran).
    * Satu transaksi dapat memiliki beberapa penawaran (*multiple quotation*).
    * Bisa dimasukkan secara bertahap.

## 3. Modul Pembelian (Purchase Order / Pengadaan)
Modul untuk melakukan pesanan barang ke supplier.
*   **Bentuk Dokumen:** Bisa berupa *Purchase Order (PO)* resmi atau sekadar Surat Pemesanan Barang.
*   **Relasi PO ke Penawaran:** Saat membuat PO, sistem dapat melacak barang pesanan tersebut ditujukan untuk nomor Penawaran yang mana.
*   **Sourcing:** Satu jenis barang bisa didapatkan/dibeli dari banyak toko atau supplier yang berbeda.
*   **Term of Payment (TOP):** Mendukung metode pembayaran *Cash* maupun *Term of Payment* (Kredit).

## 4. Modul Surat Jalan & Pengiriman (Delivery)
Modul untuk mengatur pengiriman barang ke customer.
*   Pengiriman dapat dilakukan secara **bertahap**.
*   Sistem mencatat siapa kurir yang mengantar (diambil dari Master Employee / Kurir).
*   **Surat Jalan Sparepart:** Alur khusus di mana barang (sparepart) dikirim terlebih dahulu ke customer, baru ditagihkan kemudian di akhir bulan.

## 5. Modul Servis (Service Tracking)
Modul operasional untuk melacak perbaikan barang/mesin milik customer.
*   **Workflow Status Servis:**
    1. Terima Barang (Tanda terima masuk).
    2. Proses Perbaikan.
    3. Selesai (Bukti sudah beres).
    4. Dikirim Kembali.
    5. Diterima oleh Customer (Bukti serah terima).
*   **Detail Kerusakan:** Menampilkan rincian masalah teknis.
*   **Opsi Eksekusi:** Sistem mencatat apakah servis **Dikerjakan Sendiri** (Internal) atau **Dilempar ke Vendor** (Pihak Ketiga).

## 6. Modul Invoice (Tagihan)
*   Mengakumulasi tagihan baik untuk penjualan **Barang** maupun **Jasa**.
*   Secara otomatis mengkalkulasi total berdasarkan tipe Master PT (PPN atau Non-PPN).

## 7. Output & Pelaporan (Reporting)
*   **Cetak & Ekspor:** Seluruh dokumen transaksi (Penawaran, PO, Surat Jalan, Invoice) harus dapat dicetak langsung (*Print*) dan diekspor ke dalam format **PDF**.

---

## Kesimpulan & Next Steps
Gambar `PHOTO-2026-05-18-23-18-52.jpg` secara visual memetakan hubungan antar-modul di atas, dari hulu (pemesanan & servis) hingga ke hilir (invoice & pelacakan).

Sistem ini sangat menekankan pada **fleksibilitas alur kerja**, terutama untuk penanganan sparepart (kirim dulu, tagih belakangan) dan integrasi antara modul Servis dengan Pembelian/Penawaran.

**Tahap Selanjutnya (Rekomendasi):**
1. Merancang **Entity Relationship Diagram (ERD)** atau Struktur Database berdasarkan entitas yang ada (Master, Transaksi Penawaran, Transaksi PO, Servis).
2. Merancang **Wireframe/Mockup UI** berdasarkan coretan yang ada pada gambar.
3. Memilih *Tech Stack* (Framework Frontend & Backend) yang sesuai untuk pengembangan sistem ERP ini.
