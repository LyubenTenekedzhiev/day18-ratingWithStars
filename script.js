  const star = document.querySelectorAll('.rating__star');
  const ratingValue = document.querySelector('.rating__value');

  let newArr = [];
  let secondArr = [];
  let thirdArr = [];

  for(let i = 0; i < star.length; i++) {
    newArr.push(star[i]);
    star[i].addEventListener('click', () => {
        star[i].classList.toggle('rating__star--on')
        ratingValue.textContent = newArr.indexOf(star[i]) + 1;
        // console.log(newArr.indexOf(star[i]))
        secondArr = newArr.slice(0, newArr.indexOf(star[i]) + 1);
        thirdArr = newArr.slice(newArr.indexOf(star[i]) + 1, )
        // console.log(secondArr)
        secondArr.forEach(el => el.classList.add('rating__star--on'))
        thirdArr.forEach(el => el.classList.remove('rating__star--on'));

    })
  }