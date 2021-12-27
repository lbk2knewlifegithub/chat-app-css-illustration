import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-offer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="py-2 pl-2 pr-4 flex items-center justify-between max-w-[70%] bg-gradient-to-l from-light-violet to-light-magenta rounded-r-2xl rounded-tl-2xl rounded-bl-md"
    >
      <div class="flex items-center gap-2">
        <div class="w-[20px] h-[20px] rounded-full border border-white"></div>
        <p class="text-xs font-medium text-white">
          {{ description }}
        </p>
      </div>

      <strong class="text-white"><span>$</span>{{ price  }}</strong>
    </div>
  `,
})
export class OfferComponent {
  @Input() price!: number;
  @Input() description!: string;
}
