const fs = require('fs');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(limit) {
    const primes = [];
    for (let i = 1; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const primes = findPrimes(100);
fs.writeFile('asal.txt', primes.join(', '), (err) => {
    if (err) throw err;
    console.log('Asal sayılar asal.txt dosyasına yazıldı.');
});