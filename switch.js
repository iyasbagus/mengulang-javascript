var item = prompt('Masukkan makanan dan minuman yang sehat dan tidak sehat /n seperti daging, susu, roti, bacitul, seblak, mie jebew')

switch (item) {
    case 'daging':
        alert('makanan ini sehat !!!');
        break;
    case 'susu':
        alert('minuman ini sehat !!!');
        break;
    case 'roti':
        alert('makanan ini sehat !!!');
        break;
    case 'bacitul':
        alert('makanan ini tidak sehat, JANGAN DIMAKAN !!!');
        break;
    case 'seblak':
        alert('makanan ini tidak sehat, NANTI KAMU NYERI BEUTEUNG !!!');
        break;
    case 'mie jebew':
        alert('makanan ini tidak sehat, Ngenah sih tapi lada engke nyeri beuteung !!!');
        break;
    default:
        alert('makanan dan minuman yang kamu masukkan tidak ada didalam daftar');
}