{
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  const countWordOccurrences = (sentence: string, word: string): number => {
    const senLower = sentence.toLocaleLowerCase();
    const wordLower = word.toLocaleLowerCase();
    return senLower.split(`${wordLower}`).length - 1;
  };

  console.log(
    countWordOccurrences(
      "shati tumi amar jibone shati tumi amar monore o shati re",
      "tumi"
    )
  );


  
  //
}
