//Dom Manipulation
// menambahkan element
const newParagraph = document.createElement('p');
//buat tulisan untuk newParagraph
const newTeksForParagraph = document.createTextNode('Paragraf Baru');
// simpan newTeksForParagraph ke newParagraph
newParagraph.appendChild(newTeksForParagraph);

// simpan ke section a
const sectionA = document.getElementById('a');
sectionA.appendChild(newParagraph);




const newLi = document.createElement('li');
const newTeksForLi = document.createTextNode('Item Baru');

newLi.appendChild(newTeksForLi);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)')

// insert before digunakan untuk memasukkan sebelum
ul.insertBefore(newLi, li2);




// remove digunakan untuk menghapus
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link)




const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2New = document.createElement('h2');
const h2NewText = document.createTextNode('Judul kedua');

h2New.appendChild(h2NewText);

sectionB.replaceChild(h2New, p4);

newParagraph.style.backgroundColor = '#9e89fe'
newParagraph.style.color = 'white'
newParagraph.style.fontWeight = '600'

newLi.style.backgroundColor = '#9e89fe'
newLi.style.color = 'white'
newLi.style.fontWeight = '600'

h2New.style.color = '#9e89fe'