import {
  trigger,
  transition,
  style,
  query,
  group,
  animate
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Start with no position for the container
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%', opacity: 0 })
      ]),
      query(':leave', animate('300ms ease-out', style({ left: '-100%', opacity: 0 }))),
      query(':enter', animate('300ms ease-out', style({ left: '0%', opacity: 1 }))),
    ])
  ]);
