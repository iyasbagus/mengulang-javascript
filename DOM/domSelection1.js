// DOM Selection
// document.getElementById() -> Element

const judul = document.getElementById('judul');
judul.style.color = 'black';
judul.style.backgroundColor = 'gray'
judul.innerHTML = 'Iyas Bagus'

// HTMLCollection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++ ){
    p[i].style.backgroundColor = 'lightblue'
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px'

// HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript'