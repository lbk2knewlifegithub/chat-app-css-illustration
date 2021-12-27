import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './phone.component.html',
})
export class PhoneComponent {}
