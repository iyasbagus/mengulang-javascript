let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1

for (i = noAngkot; i <= jmlAngkot; i++) {
    if (i <= angkotBeroperasi && i !== 5) {
        console.log('Angkot No. ' + i + ' Beroprasi dengan baik');
    } else if (i === 8 || i === 10 || i === 5) {
        console.log('Angkot No. ' + i + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + i + ' Sedang tidak baik2 saja');
    }
}