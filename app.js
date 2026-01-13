// const iniHari = prompt('Isikan hari?').toLowerCase();

// if (iniHari === 'senin'){
//   console.log('Selamat bekerja kawan!!');
// } else if (iniHari ==='sabtu'){
//   console.log('Semoga jangan cepat berlalu');
// } else {
//   console.log('Yah biasa aja');
// }

// const password = prompt("Buatlah Password?");

// Password harus sepanjang 6 karakter
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak boleh ada spasi");
//   }
// } else {
//   console.log("Password minimal 6 karakter");
// }

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Password tidak memenuhi syarat");
// }

const role = prompt("Masukkan role akun?").toLowerCase();

if (role == "admin" || role == "spv") {
  console.log("Akses diterima");
} else {
  console.log("Akses ditolak");
}
