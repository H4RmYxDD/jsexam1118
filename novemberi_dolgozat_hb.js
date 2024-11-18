//elso feladat
function disemvowel(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => !vowels.includes(char)).join('');
  }

//masodik feladat
function dateCorrect(datestring) {
    if (!datestring) return datestring;
    const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = datestring.match(dateRegex);
    if (!match) return null;
    let day = parseInt(match[1]);
    let month = parseInt(match[2]);
    let year = parseInt(match[3]);
    while (month >12){
      month -=12;
      year +=1;
    }
    let corrected = new Date(year, month-1, day);
    if (corrected.getDate()!==day){
      day = corrected.getDate();
      month = corrected.getMonth()+1;
      year = corrected.getFullYear();
    }
    return String(day).padStart(2, '0')+'.'+String(month).padStart(2,'0')+'.'+year;
  }
  
//harmadik feladat
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }
  
//negyedik feladat
function fizzBuzz(num) {
    return (num%3===0?'Fizz': '')+ (num%5===0?'Buzz':'')||num;
  }  