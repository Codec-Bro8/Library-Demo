// import { SwupProgressPlugin } from "@swup/progress-plugin";


const swup = new Swup({
    // plugins: [new SwupProgressPlugin]
})

function init(){
    if (document.querySelector('.carousel-container')){
        $(function(){
            $('.single-item').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: '<span class="prev-arrow"><ion-icon name="arrow-dropleft-circle"></ion-icon></span>',
                nextArrow: '<span class="next-arrow"><ion-icon name="arrow-dropright-circle"></ion-icon></span>',
              });
              $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                // autoplay: true,
                // autoplaySpeed: 3000,
                prevArrow: '<span class="prev-arrow"><ion-icon name="arrow-dropleft-circle"></ion-icon></span>',
                nextArrow: '<span class="next-arrow"><ion-icon name="arrow-dropright-circle"></ion-icon></span>',
                responsive: [
                    {
                      breakpoint: 1100,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
              });
        })
    }

    if(document.querySelector('nav')){
        let menuToggle = document.querySelector('.menuToggle');
        let navigation = document.querySelector('.navigation');

        menuToggle.onclick = function(){
            navigation.classList.toggle('active')
        }

        let list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach(item =>{
                if (item.children[0].href === window.location.href){
                    console.log(item.children[0].href);
                    item.classList.add('active');
                    return;
                }else{item.classList.remove('active')}})
                ;
        }
        activeLink()

        list.forEach((item)=>
        item.addEventListener('click', activeLink))
    }

    if (document.querySelector('.bright-dark-toggle')) {
        let icon = document.getElementById('icon');
        let body = document.getElementsByTagName('body')[0];

        icon.onclick = function(){
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                icon.name = 'moon'
                icon.classList.add('moon');
                icon.classList.remove('sunny')
            }else{
                icon.name = 'sunny'
                icon.classList.add('sunny');
                icon.classList.remove('moon')
            }
        }
    }

    if (document.querySelector('.latest-books')) {
      let heart = document.getElementsByClassName('heart');
      let cart = document.getElementsByName('cart');

      for (let i = 0; i < heart.length; i++) {
        const changeHeart = heart[i];
        changeHeart.addEventListener('click', ()=> {
          changeHeart.classList.toggle('heart-fill');
          if (changeHeart.classList.contains('heart-fill')) {
            changeHeart.name = 'heart'
            console.log('click', changeHeart)
          } else {
            changeHeart.name = 'heart-empty'
          }
          
        })
      }
    }
}


if(document.readyState === 'complete'){
    init();
}else{
    document.addEventListener('DOMContentLoaded', () => init());
}

swup.on('contentReplaced', init);

// function unload(){
//     if (document.querySelector('.carousel-container')) {
//         $('.single-items, .multiple-items').slick('unslick');
//     }
// }
// swup.on('willReplaceContent', unload)