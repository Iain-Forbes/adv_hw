const AnagramFinder = function (word) {
    this.word = word 

}

AnagramFinder.prototype.findAnagrams = function (word) {
    var anagrams = {};
    word.forEach(function(str) {
        var recurse = function(ana, str) {
            if (str === '') 
                anagrams[ana] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse('', str);
    });
    return Object.keys(anagrams);

   
}

module.exports = AnagramFinder;
