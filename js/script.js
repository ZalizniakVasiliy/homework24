/* Сделал по памяти после занятия. Да, ранее я выводил случайное уникальное число,
   так понял по условию ТЗ: 'Сделайте функцию, каждый вызов который будет генерировать
   случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут
   перебраны все числа из этого промежутка.', а не
   массив этих чисел, который доджен храниться в замыкании: 'Решите задачу через
   замыкания - в замыкании должен хранится массив чисел, которые уже были
   сгенерированы функцией.' */

/* Обернул в IIFE (Imediately Invoked Function Expression): 'Сильно намудрил,
   попробуй переписать так как мы рассматривали на уроке + не забудь обернуть
   все в IFFE', а ниже, после этого варианта, версия без IIFE. */

(function () {
  const getRandomNumb = () => Math.floor(Math.random() * 100 + 1);
  function showRandomUniqueNumb() {
    const randomNumbsArr = [];
    const getRandomUniqueNumb = () => {
      const randomNumb = getRandomNumb();
      if (randomNumbsArr.length === 100) return randomNumbsArr;
      if (randomNumbsArr.includes(randomNumb)) {
        return getRandomUniqueNumb();
      }
      randomNumbsArr.push(randomNumb);
      return randomNumbsArr;
    };
    return getRandomUniqueNumb;
  }
  const result = showRandomUniqueNumb();
  /* Вот этого перебора через цикл ниже у меня не хватало, так как по условию понял,
   что в замыкании храним массив случайных чисел, а выводим только число. Теперь
   увидел это. */
  for (let i = 0; i < 100; i++) {
    result();
  }
  console.log(result());
  /* Спасибо за лайфхак с сортировкой. Это действительно практично, так как массив
   может хранить и миллиарды значений. */
  let sortedResult = result().sort((a, b) => a - b);
  console.log(sortedResult); // Вывел для наглядности.
})();

/* version without IIFE */

const getRandomNumb = () => Math.floor(Math.random() * 100 + 1);
function showRandomUniqueNumb() {
  const randomNumbsArr = [];
  const getRandomUniqueNumb = () => {
    const randomNumb = getRandomNumb();
    if (randomNumbsArr.length === 100) return randomNumbsArr;
    if (randomNumbsArr.includes(randomNumb)) {
      return getRandomUniqueNumb();
    }
    randomNumbsArr.push(randomNumb);
    return randomNumbsArr;
  };
  return getRandomUniqueNumb;
}
const result = showRandomUniqueNumb();
/* Вот этого перебора через цикл ниже у меня не хватало, так как по условию понял,
   что в замыкании храним массив случайных чисел, а выводим только число. Теперь
   увидел это. */
for (let i = 0; i < 100; i++) {
  result();
}
console.log(result());
/* Спасибо за лайфхак с сортировкой. Это действительно практично, так как массив
   может хранить и миллиарды значений. */
let sortedResult = result().sort((a, b) => a - b);
console.log(sortedResult); // Вывел для наглядности.

/* Переделал свою предыдущую функцию showRandomUniqueNumb() */

// function showRandomUniqueNumb() {
//   const randomUniqueNumbsArr = [];
//   return function getRandomUniqueNumb() {
//     if (randomUniqueNumbsArr.length === 100) return randomUniqueNumbsArr;
//     const randomNumb = Math.floor(Math.random() * 100 + 1);
//     for (let i = 0; i < randomUniqueNumbsArr.length; i++) {
//       if (randomUniqueNumbsArr[i] === randomNumb) return getRandomUniqueNumb();
//     }
//     randomUniqueNumbsArr.push(randomNumb);
//     return randomUniqueNumbsArr;
//   };
// }
// const result = showRandomUniqueNumb();
// for (let i = 0; i < 100; i++) {
//   result();
// }
// console.log(result());
// const sortedResult = result().sort((a, b) => a - b); //сортируем по возростанию
// console.log(sortedResult);

/* Сделал с помощью arrow functions для разнообразия по памяти после прошедшего занятия */

// const makeRandomNumb = () => Math.floor(Math.random() * 100 + 1);
// const showRandomNumb = () => {
//   const randomNumbArr = [];
//   const getRandomNumb = () => {
//     if (randomNumbArr.length === 100) return randomNumbArr;
//     const randomNumb = makeRandomNumb();
//     if (randomNumbArr.includes(randomNumb)) return getRandomNumb();
//     randomNumbArr.push(randomNumb);
//     return randomNumbArr;
//   };
//   return getRandomNumb;
// };
// const result = showRandomNumb();
// for (let i = 0; i < 100; i++) {
//   result();
// }
// console.log(result());
// let sortedArr = result().sort((a, b) => a - b);
// console.log(sortedArr);
