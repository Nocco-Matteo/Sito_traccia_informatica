import { animate, keyframes, style, transition, trigger } from "@angular/animations";


export const NAVBAR_ANIMATION = trigger('navbarAnimation',[
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-100%)'}),
      animate('1.5s ease', keyframes([
        style({ opacity: 1, transform: 'none' })
      ]))
    ]),
    transition(':leave', [
      animate('1.5s ease', keyframes([
         style({ opacity: 0, transform: 'translateY(-100%)' })
      ]))
    ])
  ])