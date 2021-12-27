import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '@lbk/shared/models';

export function listAnimation(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name ?? 'listAnimation', [
    transition(
      ':enter',
      [
        query(
          '*',
          group([
            animateChild(),
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            stagger(30, [
              animate(
                '{{duration}}ms {{delay}}ms {{timing}}',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ]),
          ]),
          { optional: true }
        ),
      ],
      {
        params: { delay, timing, duration },
      }
    ),
  ]);
}
