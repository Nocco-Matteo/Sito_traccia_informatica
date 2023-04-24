import { Component, HostListener, OnInit } from '@angular/core';
import { NAVBAR_ANIMATION } from 'src/app/animations/navbar.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[NAVBAR_ANIMATION]
})
export class NavbarComponent implements OnInit {
  isNavVisible : boolean = true;
  currentPosition : number = window.pageYOffset;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    console.log(event," ", this.isNavVisible);
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      this.isNavVisible = false;
    } else {
      this.isNavVisible = true;
    }
    this.currentPosition = scroll;
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
