// inner html untuk menganti isi teks
const judul = document.getElementById('judul');
judul.innerHTML = 'Iyas Bagus';
judul.style.color = 'lightblue';
judul.style.fontSize = '40px';

const sectionB = document.querySelector('section#b');
// sectionB.innerHTML = 'Hello World';

//untuk menambahkan atribut
const tema = document.getElementsByTagName('h1')[0];
tema.setAttribute('name', 'iyas');

const a = document.querySelector('section#a a')
a.style.textDecoration = 'none';
a.setAttribute('id', 'link');

// classlist
// add = untuk menambah
const p4 = document.getElementsByTagName('p')[3];
p4.classList.add('p4');
p4.classList.add('value');
// replace = untuk mengganti isi dari class
p4.classList.replace('value', 'newValue')

// remove = untuk menghapus
const p3 = document.querySelector('.p3');
p3.classList.remove('p3');

// item = untuk mengetahui isi dari class
// contains = untuk mengetahui apakah class tersebut ada?

