var fs = require('fs')

fs.readFile('dosya.txt', "utf8", function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log(data)
})


// fs.writeFile('dosya2.txt', "Ömer Faruk Çelenk", function (hata) {
//     if (hata) {
//         throw hata;
//     }
//     console.log("yazıldı")
// })

fs.appendFile('dosya2.txt', " Selehattin Çelenk", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("eklendi")
})


fs.unlink('dosya2.txt', function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("silindi")
})