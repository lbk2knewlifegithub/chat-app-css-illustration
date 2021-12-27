import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-enter-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form class="relative">
      <input
        class="text-sm rounded-full border-none px-4 py-4"
        placeholder="Type a message."
        type="text"
      />

      <lbk-send-button
        class="absolute top-1/2 right-1 -translate-y-1/2"
      ></lbk-send-button>
    </form>
  `,
})
export class EnterMessageComponent {}
