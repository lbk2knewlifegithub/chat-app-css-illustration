import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  slideInDownOnEnterAnimation,
  slideInUpOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'lbk-pattern',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="absolute top-0 left-0 w-full h-full z-[-1]">
      <div class="relative container-large h-full">
        <!--  pattern top-->
        <div
          @slideInDownOnEnter
          class="pattern bg-gradient-to-b from-light-magenta to-light-violet rounded-br-full lg:rounded-b-full"
        ></div>
        <!--  end pattern top-->

        <!--  pattern bottom-->
        <div
          @slideInUpOnEnter
          class="hidden pattern right-0 bottom-0 bg-black opacity-[.017] rounded-tl-full lg:block lg:translate-x-[40%]  lg:!h-[85%] lg:rounded-t-full"
        ></div>
        <!--  end pattern bottom-->
      </div>
    </div>
  `,
  styles: [
    `
      .pattern {
        @apply absolute w-1/2 h-[550px] sm:h-[650px]  lg:w-[32%];
      }
    `,
  ],
  animations: [slideInDownOnEnterAnimation(), slideInUpOnEnterAnimation()],
})
export class PatternComponent {}
