// var nama = "Iyas";
// var umur = 17;
// console.log('Hello',nama);
// console.log('Umur kamu adalah ' + umur)

// alert('Selamat Datang');
// alert(nama);

// var hari = prompt('Masukkan Hari:');
// alert(hari)

// var tes = confirm('kamu yakin?');
// if ( tes === true ){
//     alert("kamu telah setuju") 
// } else {
//     alert("kamu membatalkannya")
// }

alert('Hai Selamat Datang');
var lagi = true;

while (lagi) {
    var nama = prompt('Masukkan Nama');
    alert('Hai ' + nama);

    lagi = confirm('Mau Coba Lagi?');
}

alert('Terima kasih..');