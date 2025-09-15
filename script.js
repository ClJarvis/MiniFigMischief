const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')
const smMenuLink1 = document.querySelector('.main-header__sm-menu-link--1')
const smMenuLink2 = document.querySelector('.main-header__sm-menu-link--2')
const smMenuLink3 = document.querySelector('.main-header__sm-menu-link--3')
/*const smMenuLink4 = document.querySelector('.main-header__sm-menu-link--4')
const smMenuLink5 = document.querySelector('.main-header__sm-menu-link--5') */

smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')

  smMenuLink1.style.transitionDelay = '.5s'
  smMenuLink1.style.transform = 'translateY(0)'
  smMenuLink1.style.opacity = '1'

  smMenuLink2.style.transitionDelay = '.8s'
  smMenuLink2.style.transform = 'translateY(0)'
  smMenuLink2.style.opacity = '1'

  smMenuLink3.style.transitionDelay = '1.1s'
  smMenuLink3.style.transform = 'translateY(0)'
  smMenuLink3.style.opacity = '1'
/*
  smMenuLink4.style.transitionDelay = '1.4s'
  smMenuLink4.style.transform = 'translateY(0)'
  smMenuLink4.style.opacity = '1'

  smMenuLink5.style.transitionDelay = '1.6s'
  smMenuLink5.style.transform = 'translateY(0)'
  smMenuLink5.style.opacity = '1' */
})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
 /*   smMenuLink5.style.transitionDelay = '0s'
    smMenuLink5.style.transform = 'translateY(50px)'
    smMenuLink5.style.opacity = '0'

    smMenuLink4.style.transitionDelay = '0s'
    smMenuLink4.style.transform = 'translateY(50px)'
    smMenuLink4.style.opacity = '0'
*/
    smMenuLink3.style.transitionDelay = '.3s'
    smMenuLink3.style.transform = 'translateY(50px)'
    smMenuLink3.style.opacity = '0'

    smMenuLink2.style.transitionDelay = '.6s'
    smMenuLink2.style.transform = 'translateY(50px)'
    smMenuLink2.style.opacity = '0'

    smMenuLink1.style.transitionDelay = '.9s'
    smMenuLink1.style.transform = 'translateY(50px)'
    smMenuLink1.style.opacity = '0'

    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
/*  smMenuLink5.style.transitionDelay = '0s'
  smMenuLink5.style.transform = 'translateY(50px)'
  smMenuLink5.style.opacity = '0'

  smMenuLink4.style.transitionDelay = '0s'
  smMenuLink4.style.transform = 'translateY(50px)'
  smMenuLink4.style.opacity = '0' 
*/
  smMenuLink3.style.transitionDelay = '.0s'
  smMenuLink3.style.transform = 'translateY(50px)'
  smMenuLink3.style.opacity = '0' 

  smMenuLink2.style.transitionDelay = '.3s'
  smMenuLink2.style.transform = 'translateY(50px)'
  smMenuLink2.style.opacity = '0'

  smMenuLink1.style.transitionDelay = '.6s'
  smMenuLink1.style.transform = 'translateY(50px)'
  smMenuLink1.style.opacity = '0'

  smMenu.style.transitionDelay = '.9s'
  smMenu.classList.remove('main-header__sm-menu--active')
})


function disableRightClick() {
  // Disable context menu
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    return false
  })

  // Disable F12, Ctrl+Shift+I, Ctrl+U
  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && event.key === 'I') ||
      (event.ctrlKey && event.key === 'u')
    ) {
      event.preventDefault()
      return false
    }
  })

  // Disable drag and drop for images
  document.addEventListener('dragstart', function (event) {
    if (event.target.tagName === 'IMG') {
      event.preventDefault()
      return false
    }
  })

  // Disable text selection
  document.addEventListener('selectstart', function (event) {
    event.preventDefault()
    return false
  })
}

// Call the function when document loads
document.addEventListener('DOMContentLoaded', disableRightClick)

// For Mobile

let touchTimer = null

document.addEventListener('touchstart', function (event) {
  touchTimer = setTimeout(function () {
    event.preventDefault()
    return false
  }, 500)
})

document.addEventListener('touchend', function () {
  if (touchTimer) {
    clearTimeout(touchTimer)
    touchTimer = null
  }
})

document.addEventListener('touchmove', function () {
  if (touchTimer) {
    clearTimeout(touchTimer)
    touchTimer = null
  }
})

/* Like Button */

document.querySelectorAll(".post").forEach(post => {
  const postId = post.dataset.postId;
  const ratings = post.querySelectorAll(".post-rating");
  const likeRating = ratings[0];

  ratings.forEach(rating => {
    const button = document.querySelector(".post-rating-button");
    const count = document.querySelector(".post_rating_count");

    console.log(button);
    console.log(count);

    button.addEventListener("click", async() => {
      if (rating.classList.contains(".post_rating_selected")) {
        return;
      }

      count.textContent = Number(count.textContent) + 1;

      ratings.forEach(rating =>{
        if (rating.classList.contains(".post_rating_selected")) {
          const count = rating.querySelector(".post_rating_count");

          count.textContent = Math.max(0, Number(count.textContent) -1);
          rating.classList.remove(".post_rating_selected");
        }
      });


      rating.classList.add("post_rating_selected");
/* remove later, not needed but not committed yet
      const likeOrDislike = likeRating === rating ? "like" :" dislike";
      const reponse = await fetch(`/posts/${postId}/$likeOrDislike}`);
      const body = await reponse.json();
      */
    })
  });
});
