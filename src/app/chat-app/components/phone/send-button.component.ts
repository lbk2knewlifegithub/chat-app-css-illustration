import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-send-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="w-[30px] h-[30px] bg-button-submit rounded-full p-2 mr-2">
      <img
        class="w-full invert-[1]"
        src="/assets/images/right-arrow.png"
        alt="Send"
      />
    </button>
  `,
})
export class SendButtonComponent {}
