import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../assets/styles/animation.css',
    '../../assets/styles/carosel.css',
    '../../assets/styles/projects.css',
    '../../assets/styles/swiper-bundle.min.css'
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
