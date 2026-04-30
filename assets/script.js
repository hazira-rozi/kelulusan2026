// 1. KONFIGURASI WAKTU BUKA
const waktuPengumuman = new Date("2026-04-04T10:00:00").getTime();

// 2. DATA SISWA (Kunci menggunakan Kode Acak)
// Kode inilah yang harus dibagikan ke masing-masing siswa
const dataSiswa = {
    // === UNIT LAYANAN WISATA (ULW) ===
    "ULW-A1B2C": { nama: "Angra Permata Desta", nisn: "0088291435", ttl: "Tanjung Alai, 19 Januari 2008", jurusan: "Unit Layanan Wisata", status: true },
    "ULW-X9Y8Z": { nama: "Dara Atrilani", nisn: "0073590125", ttl: "Tanjung Alai, 02 Agustus 2007", jurusan: "Unit Layanan Wisata", status: true },
    "ULW-M4N5P": { nama: "David Saputra", nisn: "0078149378", ttl: "Tanjung Alai, 09 November 2007", jurusan: "Unit Layanan Wisata", status: true },
    "ULW-Q1W2E": { nama: "Fahri Yuarifta", nisn: "0081048487", ttl: "Tanjung Alai, 28 Mei 2008", jurusan: "Unit Layanan Wisata", status: true },
    "ULW-R3T4Y": { nama: "Muhammad Zikri", nisn: "0087775606", ttl: "Tanjung Alai, 02 Juli 2008", jurusan: "Unit Layanan Wisata", status: true },
    "ULW-U5I6O": { nama: "NADYA ISELA", nisn: "0072370226", ttl: "BENGKULU, 17 Juni 2007", jurusan: "Unit Layanan Wisata", status: true },

    // === AKUNTANSI ===
    "AKL-P7A8S": { nama: "INSAN SAKINAH", nisn: "0085576666", ttl: "PEKAN BARU, 05 Mei 2008", jurusan: "Akuntansi", status: true },
    "AKL-D9F0G": { nama: "Maharani Putri Rahayu", nisn: "0084342182", ttl: "Tanjung Alai, 09 Januari 2008", jurusan: "Akuntansi", status: true },
    "AKL-H1J2K": { nama: "Nazila Ramesya Alya", nisn: "0084140720", ttl: "Solok, 10 Juni 2008", jurusan: "Akuntansi", status: true },
    "AKL-L3Z4X": { nama: "RIDHO MAULANA", nisn: "0088313740", ttl: "Jakarta, 16 April 2008", jurusan: "Akuntansi", status: true },
    "AKL-C5V6B": { nama: "Tika Oktavia", nisn: "0071557389", ttl: "Tanjung Alai, 07 November 2007", jurusan: "Akuntansi", status: true },
    "AKL-N7M8Q": { nama: "Vixi Radiathul Fitri", nisn: "0074450728", ttl: "Sulit Air, 14 Oktober 2007", jurusan: "Akuntansi", status: true },

    // === MANAJEMEN PERKANTORAN ===
    "MPLB-W9E0R": { nama: "Afifatun Zaskiah", nisn: "0087971049", ttl: "Cilegon, 03 Februari 2008", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-T1Y2U": { nama: "Aidil Fikri", nisn: "0053828418", ttl: "Tanjung Alai, 04 November 2005", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-I3O4P": { nama: "Fuji Lestari", nisn: "0078019563", ttl: "Tanjung Alai, 11 November 2007", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-A5S6D": { nama: "Nikhen Agustya", nisn: "0089823232", ttl: "Tanjung Alai, 28 Agustus 2008", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-F7G8H": { nama: "RIFKA NAFISA", nisn: "0078806545", ttl: "TANJUNG ALAI, 18 Desember 2007", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-J9K0L": { nama: "Shaskia Ananda Putri", nisn: "0071629970", ttl: "Tanjung Alai, 15 Agustus 2007", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-Z1X2C": { nama: "Sindi Vairani", nisn: "0089342816", ttl: "Tanjung Alai, 05 Agustus 2008", jurusan: "Manajemen Perkantoran", status: true },
    "MPLB-V3B4N": { nama: "Siska Ramadani", nisn: "0078569885", ttl: "Rangkasbitung-Lebak, 23 September 2007", jurusan: "Manajemen Perkantoran", status: true },

    // === REKAYASA PERANGKAT LUNAK ===
    "RPL-M5Q6W": { nama: "Fahri Marsel Ramadhan", nisn: "0089540179", ttl: "Sulit Air, 24 September 2008", jurusan: "Rekayasa Perangkat Lunak", status: true },
    "RPL-E7R8T": { nama: "Kesha Novita", nisn: "0078017325", ttl: "Tanjung Alai, 03 November 2007", jurusan: "Rekayasa Perangkat Lunak", status: true },
    "RPL-Y9U0I": { nama: "Sultan Muhammad Nabil", nisn: " ", ttl: "000", jurusan: "Rekayasa Perangkat Lunak", status: true },
    "RPL-O1P2A": { nama: "MUHAMMAD RAFLY", nisn: "0081916352", ttl: "Solok, 21 Maret 2008", jurusan: "Rekayasa Perangkat Lunak", status: true },
    "RPL-S3D4F": { nama: "RAFSHAN JANI", nisn: "0075280898", ttl: "Tanjung Alai, 24 Agustus 2007", jurusan: "Rekayasa Perangkat Lunak", status: true }
};

// 3. LOGIKA HITUNG MUNDUR
const timerElement = document.getElementById("timer");
const countdownSection = document.getElementById("countdown-section");
const cekSection = document.getElementById("cek-section");

const interval = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = waktuPengumuman - sekarang;

    if (selisih <= 0) {
        clearInterval(interval);
        countdownSection.classList.add("d-none");
        cekSection.classList.remove("d-none");
    } else {
        const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
        const detik = Math.floor((selisih % (1000 * 60)) / 1000);

        const fJam = jam.toString().padStart(2, '0');
        const fMenit = menit.toString().padStart(2, '0');
        const fDetik = detik.toString().padStart(2, '0');

        let teksTimer = `${fJam}:${fMenit}:${fDetik}`;
        if(hari > 0) teksTimer = `${hari} Hari, ` + teksTimer;
        
        timerElement.innerHTML = teksTimer;
    }
}, 1000);

// 4. LOGIKA CEK KELULUSAN
function cekKelulusan() {
    const input = document.getElementById("input-kode").value.trim();
    const resultBox = document.getElementById("result");
    
    if (input === "") {
        alert("Kode kelulusan tidak boleh kosong!"); 
        return;
    }

    const siswa = dataSiswa[input];
    resultBox.classList.remove("d-none", "alert-success", "alert-danger");
    
    if (siswa) {
        if (siswa.status === true) {
            resultBox.classList.add("alert-success");
            resultBox.innerHTML = `
                <div class="p-1">
                    <h4 class="alert-heading fw-bold mb-3">Selamat! 🎉</h4>
                    <hr>
                    <table class="table table-sm table-borderless bg-transparent mb-3 fs-6">
                        <tr>
                            <td style="width: 40%;" class="text-secondary">Nama</td>
                            <td class="fw-bold text-dark">: ${siswa.nama}</td>
                        </tr>
                        <tr>
                            <td class="text-secondary">NISN</td>
                            <td class="fw-bold text-dark">: ${siswa.nisn}</td>
                        </tr>
                        <tr>
                            <td class="text-secondary">Tempat, Tgl Lahir</td>
                            <td class="fw-bold text-dark">: ${siswa.ttl}</td>
                        </tr>
                        <tr>
                            <td class="text-secondary">Konsentrasi Keahlian</td>
                            <td class="fw-bold text-dark">: ${siswa.jurusan}</td>
                        </tr>
                    </table>
                    <div class="mt-3 p-3 bg-white rounded shadow-sm d-flex align-items-center justify-content-between border border-success">
                        <span class="fw-bold text-secondary mb-0 fs-5">Status Kelulusan</span>
                        <span class="badge text-bg-success py-2 px-4 fs-5">LULUS</span>
                    </div>
                </div>
            `;
            tembakConfetti();
        } else {
            resultBox.classList.add("alert-danger");
            resultBox.innerHTML = `
                <div class="p-2">
                    <h3 class="alert-heading fw-bold mb-3">Mohon Maaf</h3>
                    <hr>
                    <p class="fs-5 mb-2">Nama : <strong>${siswa.nama}</strong></p>
                    <p class="fs-5 mb-3">Status : <span class="badge text-bg-danger py-2 px-3">TIDAK LULUS</span></p>
                    <p class="mb-0 text-muted">Tetap semangat dan jangan menyerah!</p>
                </div>
            `;
        }
    } else {
        resultBox.classList.add("alert-danger");
        resultBox.innerHTML = `
            <div class="p-2 text-center">
                <p class="fs-5 mb-0 text-danger">Kode Kelulusan <strong>${input}</strong> tidak valid.</p>
                <small class="text-muted">Pastikan Anda memasukkan kode dengan benar (perhatikan huruf besar/kecil dan tanda strip).</small>
            </div>
        `;
    }
}

// 5. FUNGSI EFEK CONFETTI
function tembakConfetti() {
    var duration = 4 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, { particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}