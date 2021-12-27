import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-kebab-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col gap-1">
      <div class="w-[2px] h-[2px] bg-white rounded-full"></div>
      <div class="w-[2px] h-[2px] bg-white rounded-full"></div>
      <div class="w-[2px] h-[2px] bg-white rounded-full"></div>
    </div>
  `,
})
export class KebabMenuComponent {}
