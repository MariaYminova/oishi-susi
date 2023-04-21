import Swiper from 'swiper/bundle'
import IMask from 'imask'
import customSelect from 'custom-select';





const select1 = document.querySelector('.ui-select-filter');
const select2 = document.querySelector('.ui-select-address');

customSelect(select1);
customSelect(select2);

const swiperBaner = new Swiper(".slider-baner", {
 
  pagination: {
    el: ".pagination-baner",
    clickable: true
  },
});

//поп ап

const buttons = document.querySelectorAll(".person")
const popup = document.querySelector(".popup")
const buttonClose = document.querySelector(".popup__close")
const popupBlock = document.querySelector(".popup__block")

function openPopup() {
  popup.classList.add("open-popup")
}

function closePopup() {
  popup.classList.remove("open-popup")
}

buttons.forEach((button) => {
  button.addEventListener("click", openPopup)
})

buttonClose.addEventListener("click", closePopup)

popup.addEventListener("click", closePopup)

popupBlock.addEventListener("click", (event) => {
  event.stopPropagation()
})



window.onload = function () {
  const swiperPop = new Swiper(".slider-popular", {
    slidesPerView: 'auto',
    spaceBetween: 18,
    

    scrollbar: {
      el: ".scrollbar-popular",
      draggable: true,
      dragSize: 143,
    },
  });
  

  console.log({ swiperPop: document.querySelector('.scrollbar-popular') })
}

//слайдер (закоментировать)

const tabsBtn = document.querySelectorAll(".navigation__tab")
const tabsitem = document.querySelectorAll(".slider-positions__slide")

function tabsControl(currentBtn) {
  const tabId = currentBtn.getAttribute("data-tab")
  let currentTab = document.querySelector(tabId)

  tabsBtn.forEach(function (item) {
    item.classList.remove("active")
  })

  tabsitem.forEach(function (item) {
    item.classList.remove("active")
  })

  currentBtn.classList.add("active")
  currentTab.classList.add("active")
}

tabsBtn.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabsControl(this)

    carretAnimate(this)
  })
})

const filterBtn = document.querySelectorAll(".button-transparent")

filterBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    filterBtn.forEach(el => { el.classList.remove('active'); })
    item.classList.add('active')
  })
})


//иконки фильтра

const filterBtnIcon = document.querySelectorAll(".button-with-icon")

filterBtnIcon.forEach(item => {
  item.addEventListener('click', (e) => {
    filterBtnIcon.forEach(el => { el.classList.remove('active'); })
    item.classList.add('active')
  })
})


//иконка звездочки

const btnStar = document.querySelectorAll(".button-star")

btnStar.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');

  })
})

//иконка лайка актив

const btnlike = document.querySelectorAll(".icon-like")

btnlike.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');

  })
})

//рандом числа лайка

const randomNumber = document.querySelectorAll('.like-number');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber.forEach(number => {
  const min = 0;
  const max = 99;
  const randomValue = getRandomInt(min, max);
  number.textContent = randomValue;
});


//кнопка количества товара

const cartBlocks = document.querySelectorAll('.btn-add-cart__block');

cartBlocks.forEach((cartBlock) => {
  const countSpan = cartBlock.querySelector('.btn-add-cart__count');
  const plusBtn = cartBlock.querySelector('.btn-add-cart__plus');
  const minusBtn = cartBlock.querySelector('.btn-add-cart__minus');

  plusBtn.addEventListener('click', () => {

    countSpan.innerText = parseInt(countSpan.innerText) + 1;
  });

  minusBtn.addEventListener('click', () => {
    countSpan.innerText = Math.max(parseInt(countSpan.innerText) - 1, 1);
  });
});

//чек инпута

const inputs = document.querySelectorAll('.ui-input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value;
    if (value.length >= 1) {
      input.classList.remove('ui-input--error');
      input.classList.add('ui-input--success');
    } else {
      input.classList.remove('ui-input--success');
      input.classList.add('ui-input--error');
    }
  });
});

//чек маски номера

const selectCheck = document.querySelectorAll('.input-number');

selectCheck.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value;
    if (value.length >= 16) {
      input.classList.remove('input-number--error');
      input.classList.add('input-number--success');
    } else {
      input.classList.remove('input-number--success');
      input.classList.add('input-number--error');
    }
  });
});

//иконка лайка

const likeBlocks = document.querySelectorAll('.like-block');

likeBlocks.forEach((likeBlock) => {
  const likeNumber = likeBlock.querySelector('.like-number');
  const likeBtn = likeBlock.querySelector('.icon-like');


  likeBtn.addEventListener('click', () => {

    let currentLikes = parseInt(likeNumber.innerText);

    if (likeBtn.classList.contains('liked')) {
      currentLikes--;
    }
    else {
      currentLikes++;
    }

    likeNumber.innerText = currentLikes;
    likeBtn.classList.toggle('liked');
  });
});

//аккардион

const accTitle = document.querySelectorAll('.ui-accordion__head')

accTitle.forEach(item => {
  const acc = item.parentElement;
  const accBody = acc.querySelector('.ui-accordion__body');
  accBody.style.height = '0px';
  acc.classList.add('ui-accordion--closed');

  item.addEventListener('click', function () {
    let bodyHeight = 0
    const isClosed = acc.classList.contains('ui-accordion--closed')

    if (isClosed) {
      accBody.style.height = null
      acc.classList.remove('ui-accordion--closed')
      bodyHeight = accBody.offsetHeight + 'px'
      accBody.style.height = '0px'
      accBody.classList.add('ui-accordion__body--animate')
      accBody.offsetHeight;
      accBody.style.height = bodyHeight
      setTimeout(() => {
        accBody.style.height = null
        accBody.classList.remove('ui-accordion__body--animate')
      }, 300)

    } else {
      bodyHeight = accBody.offsetHeight + 'px'
      accBody.style.height = bodyHeight
      accBody.offsetHeight;
      accBody.classList.add('ui-accordion__body--animate')
      acc.classList.add('ui-accordion--closed')
      accBody.style.height = '0px'
      setTimeout(() => {
        accBody.classList.remove('ui-accordion__body--animate')
      }, 300)
    }
  })
});

//маска номер

const phoneMask = document.querySelectorAll('.js-phone-mask')

phoneMask.forEach(item => {
  IMask(item, {
    mask: '+{7}(000)000-00-00'
  })

})



//account табы 

const tabsBtnAcc = document.querySelectorAll(".tabs__nav-btn")
const tabsitemAcc = document.querySelectorAll(".block-card")

tabsBtnAcc.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtnAcc.forEach(function (item) {
      item.classList.remove('active');
    });

    tabsitemAcc.forEach(function (item) {
      item.classList.remove('active');
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});



