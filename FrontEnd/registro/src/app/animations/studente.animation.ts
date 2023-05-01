import {
    AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const CHANGE_PERIOD : AnimationTriggerMetadata[] =[
    trigger('openClose', [
      state('open', style({
        maxHeight: '500px'
      })),
      state('closed', style({
        maxHeight: '0'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ])
    ])
  ];
