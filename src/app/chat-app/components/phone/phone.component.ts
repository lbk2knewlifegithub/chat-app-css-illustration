import { ChangeDetectionStrategy, Component } from '@angular/core';
import { listAnimation } from '@lbk/shared/animations';

@Component({
  selector: 'lbk-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './phone.component.html',
  animations: [listAnimation({ delay: 400 , duration: 100})],
})
export class PhoneComponent {}
