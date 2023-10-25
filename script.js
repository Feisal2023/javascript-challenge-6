const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const vowelResult = () => {
  let vowelCount = 0;
  let wordVowel = word.value.toLowerCase();

  for (i = 0; i < wordVowel.length; i++) {
    let letter = wordVowel[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
};

btn.addEventListener("click", vowelResult);
