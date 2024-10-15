// manipulasi array

// 1. menambahkan isi array
// var arr = [];

// arr[0] = 'iyas';
// arr[1] = 2;
// arr[2] = true;

// console.log(arr)

//2. menghapus array
// var arr = ['iyas', 2, true];

// arr[0] = undefined;

// console.log(arr)

//3. menampilkan isi array
// var arr = ['iyas', 'bagus', 'arya', 'putra'];

// for (i = 0; i < arr.length; i++){
//     console.log('Nama ke - '+ i + ' Adalah ' + arr[i])
// }

//method pada array
// 1. join
// join untuk mengganti menjadi bukan object
// var arr = ['Iyas', 'Morgan', 'John', 'Robert'];

// console.log(arr.join(' '));

// 2. push & pop
// noted push itu untuk menambah element akhir
// arr.push('Melina', 'Ada Wong')

// pop untuk mengurangi element terakhir
// arr.pop();
// console.log(arr.join(' - '));

//3. unshift dan shift digunakan untuk element awal
// unshift untuk menambahkan
// arr.unshift('Leon')

// shift untuk menghilangkan
// arr.shift()
// console.log(arr.join(' - '));

//4. splice
// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)
// arr.splice(2, 0, 'Natsu', 'Erza');
// console.log(arr.join(' - '));

//5. slice
// var arr = ['Iyas', 'Morgan', 'John', 'Robert', 'Travor'];

// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(' - '))

//6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Iyas', 'Morgan', 'Steve']

// angka.forEach(function (e) {
//     console.log(e)
// })

// nama.forEach(function (name, nomor) {
//     console.log('Mahasiwa ke - ' + (nomor+1) + ' Adalah ' + name)
// })

//7. map
// var angka = [1, 3, 2, 6, 5, 4, 8, 7];

// var angka2 = angka.map(function (e) {
//     return e * 5;
// });
// console.log(angka2.join(' - '))

//8. sort
// var angka = [1, 3, 40, 2, 30, 6, 5, 4, 8, 7];

// angka.sort(function (a, b) {
//     return a-b
// });
// console.log(angka.join(' - '))

// 9. find & filter
var angka = [1, 3, 40, 2, 30, 6, 5, 4, 8, 7];

var angka2 = angka.find(function (x) {
    return x > 4;
})
console.log(angka2)