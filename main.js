//priveli

// function replaceString(string, valueToReplace, valueToReplaceWith) {
//   let result = '';
//   let currentIndex = 0;

//   while (currentIndex < string.length) {
//     const indexOfValue = string.indexOf(valueToReplace, currentIndex);

//     if (indexOfValue === -1) {
//       result += string.substring(currentIndex, string.length);
//       break;
//     }

//     result += string.substring(currentIndex, indexOfValue);
//     result += valueToReplaceWith;

//     currentIndex = indexOfValue + valueToReplace.length;
//   }

//   return result;
// }

// const originalString = 'skillwill-is me5 kviraa';
// const replacedString = replaceString(originalString, 'me5', 'me6');
// console.log(replacedString);

//meore

// function capitalizeWords(sentence) {
//   const words = sentence.split(' ');
//   const capitalizedWords = [];

//   for (let word of words) {
//     capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }

//   return capitalizedWords.join(' ');
// }

// const originalSentence = 'hello world';
// const capitalizedSentence = capitalizeWords(originalSentence);
// console.log(capitalizedSentence);

//mesame

// function sortUsersByAge(users) {
//   const sortedUsers = [...users];
  
//   sortedUsers.sort((a, b) => a.age - b.age);
  
//   return sortedUsers;
// }

// const users = [
//   { name: 'Lasha', age: 30 },
//   { name: 'Saba', age: 20 },
// ];

// const sortedUsers = sortUsersByAge(users);
// console.log(sortedUsers);
