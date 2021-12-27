import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-chat-app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <lbk-pattern></lbk-pattern>

      <div
        class="container grid gap-20 pt-24 place-items-center sm:gap-32 sm:pt-32 lg:grid-cols-2 lg:pt-0 lg:h-screen"
      >
        <!--  phone-->
        <lbk-phone @fadeInLeftOnEnter class="lg:justify-self-end"></lbk-phone>
        <!--  end phone-->

        <!-- text -->
        <div
          @fadeInRightOnEnter
          class="max-w-xl text-center space-y-8 lg:text-left lg:justify-self-start"
        >
          <h1
            class="text-4xl font-semibold text-heading tracking-wide lg:text-5xl"
          >
            Simple booking
          </h1>
          <p class="leading-7 text-sub-heading xl:text-lg">
            Stay in touch with our dog walkers through he chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walked has been completed you can rate your walker and book agains
            all though the chat.
          </p>
        </div>
        <!-- end text -->
      </div>
    </main>
  `,
  animations: [fadeInLeftOnEnterAnimation(), fadeInRightOnEnterAnimation()],
})
export class ChatAppPageComponent {}
