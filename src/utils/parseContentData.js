export default function (data) {//gelen datayi bir array formayina cevirmke sityoruz
   
    return Object.keys(data).map(key => {
        return {
            id: key, //key i id olarak ata dedik
            ...data[key], //o datan hangi key denk geliyorsa o dataya set ediyoruz geri id ile beraber
        };
    })
    //Zamana, tarige gore sirali gosterme
        .sort(function (a, b) {
            return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
            //a.date < b.date yaparsak son paylasilan son a a gelir
        });
}

