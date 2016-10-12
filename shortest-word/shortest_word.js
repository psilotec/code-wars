/**
 * Created by Scott on 10/11/2016.
 */

(function findShort(stringOfWords){
    //split string into array of words and create a new array "wordLengths" containing the length of each word in array "stringOfWords"
    const wordLengths = stringOfWords.split(' ').map(word => word.length);

    // Loop through the array "wordLengths" and compare each number until the smallest is returned
    console.log(shortest = wordLengths.reduce(function (a, b) { return (a < b) ? a : b;}));

}("bitcoin take over the world maybe who knows perhaps"));

