//membuat object
// object literal
var mhs1 = {
    nama: 'Iyas Bagus',
    nrp: '04040030',
    email: 'iyas123@gmail.com',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    nama: 'John',
    nrp: '04040132',
    email: 'john123@gmail.com',
    jurusan: 'Teknik Informatika'
}

//function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Leon', '02391131', 'leon@gmail.com', 'Teknik informatika');

//Constractor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('Doyok', '01231231', 'doyok@gmail.com', 'Sistem Informasi')