import { Component, OnInit } from '@angular/core';
// import 'swiper';
declare var Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const swiper = new Swiper(".slide-container", {
      slidesPerView: 4,
      spaceBetween: 20,
      sliderPerGroup: 4,
      loop: true,
      centerSlide: "true",
      fade: "true",
      grabCursor: "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        // 1000: {
        //     slidesPerView: 4,
        // },
      },
    });

  }
  title = 'my-cv';
}
