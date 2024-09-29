function HitungJumlahDuaKubus(a, b) {

    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(HitungJumlahDuaKubus(8, 3));
console.log(HitungJumlahDuaKubus(5, 7));