let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1

for (i = noAngkot; i <= jmlAngkot; i++) {
    if (i <= angkotBeroperasi) {
        console.log('Angkot No. ' + i + ' Beroprasi dengan baik');
    } else if (i === 8) {
        console.log('Angkot No. ' + i + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + i + ' Sedang tidak baik2 saja');
    }
}