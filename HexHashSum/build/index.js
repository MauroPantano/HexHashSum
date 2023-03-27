"use strict";
function hexHash(code) {
    let sum = 0;
    let hex;
    let word = 'Yo';
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        let ascii = word.charCodeAt(i);
        hex = ascii.toString(16);
        let numsStr = hex.replace(/\D/g, "");
        //let thenum = numsStr.match(/\d/g);
        sum += parseInt(numsStr);
    }
    console.log("word");
    return sum;
}
