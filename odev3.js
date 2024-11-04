const fs = require('fs');

fs.readFile('asal_sayi.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Dosya okunamadı:", err);
        return;
    }

    const asalSayilar = data.split(',').map(Number);

    const tumSayilar = [];
    for (let i = 1; i <= 90; i++) {
        tumSayilar.push(i);
    }

    const eksikSayilar = tumSayilar.map(num => asalSayilar.includes(num) ? `${num} (asal)` : num);
    
    fs.writeFile('tum_sayilar.txt', eksikSayilar.join(', '), (err) => {
        if (err) {
            console.error("Dosyaya yazılamadı:", err);
            return;
        }
        console.log("tum_sayilar.txt dosyasına tüm sayılar başarıyla kaydedildi.");
    });
});
