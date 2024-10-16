const p3 = document.querySelector('.p3');

function ubahWarna() {
    p2.style.backgroundColor = '#9e89fe'
    p2.style.color = 'white'
}

// menggunakan cara method
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna

// menggunakan cara addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('mouseenter', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})
p4.addEventListener('mouseenter', function () {
    p4.style.backgroundColor = '#9e89fe'
})