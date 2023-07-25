function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
  const readMoreLinks = document.querySelectorAll('.read-more');
  const moreContents = document.querySelectorAll('.more-content');

  readMoreLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      moreContents[index].classList.toggle('show-content');
      link.textContent = moreContents[index].classList.contains('show-content') ? 'Read Less' : 'Read More';
    });
  });

  const recipeContainer = document.querySelector('.recipe-container');
  const recipeCards = document.querySelector('.recipe-cards');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  let cardIndex = 0;
  const cardWidth = recipeContainer.clientWidth;

  arrowLeft.addEventListener('click', () => {
    cardIndex--;
    translateRecipeCards();
  });

  arrowRight.addEventListener('click', () => {
    cardIndex++;
    translateRecipeCards();
  });

  function translateRecipeCards() {
    const maxTranslate = -(recipeCards.offsetWidth - recipeContainer.offsetWidth);
    let translation = cardIndex * cardWidth;

    if (translation > 0) {
      translation = 0;
      cardIndex = 0;
    } else if (translation < maxTranslate) {
      translation = maxTranslate;
      cardIndex = Math.floor(translation / cardWidth);
    }

    recipeCards.style.transform = `translateX(${translation}px)`;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const readMoreLinks = document.querySelectorAll('.read-more');

  readMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'HT2.html';
    });
  });

});


