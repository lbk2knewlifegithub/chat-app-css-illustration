import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-chat-app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <!--  pattern-->
      <div
        class="absolute w-1/2 h-[550px] bg-gradient-to-b from-light-magenta to-light-violet rounded-br-full z-[-1]"
      ></div>
      <!--  end pattern-->

      <div class="container relative z-50 grid lg:grid-cols-2">
        <div class="relative grid flow-root place-content-center">
          <!--  phone-->
          <lbk-phone class="block mt-32 lg:mt-0"></lbk-phone>
          <!--  end phone-->
        </div>

        <!-- text -->
        <div class="container flex flex-col items-center justify-center mt-20">
          <h1
            class="text-4xl font-bold text-center text-heading lg:text-5xl xl:text-6xl"
          >
            Simple booking
          </h1>
          <p
            class="max-w-2xl mt-8 font-medium leading-6 text-center text-sub-heading xl:text-lg"
          >
            Stay in touch with our dog walkers through he chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walked has been completed you can rate your walker and book agains
            all though the cat.
          </p>
        </div>
        <!-- end text -->
      </div>
    </main>
  `,
})
export class ChatAppPageComponent {}
