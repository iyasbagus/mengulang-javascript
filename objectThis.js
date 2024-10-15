// function declaration
// function halo() {
//     console.log(this)
//     console.log('halo')
// }
// this.halo();
//this mengembalikan object global

//object literal
// var obj = {};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();

//constructor
function Halo() {
    console.log(this);
    console.log('halo')
}
var obj1 = new Halo();