/**
 * Created by Scott on 10/11/2016.
 */

(function findShort(stringOfWords){
    //split string into array of words and create a new array "l" containing the length of each word in array "stringOfWords"
        const l = stringOfWords.split(' ').map(w => w.length);
        console.log(l);

    // Loop through the array "l" and compare each number until the smallest is reached
    return shortest = l.reduce(function (a, b) { return a.length < b.length ? a : b;});

    //return the smallest number in array "l"
}("bitcoin take over the world maybe who knows perhaps"));

