import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatAppRoutingModule } from './chat-app-routing.module';
import { fromPhone } from './components';
import { ChatAppPageComponent } from './containers';

const COMPONENTS = [fromPhone.COMPONENTS];
const CONTAINERS = [ChatAppPageComponent];

@NgModule({
  imports: [CommonModule, ChatAppRoutingModule],
  declarations: [CONTAINERS, COMPONENTS],
})
export class ChatAppModule {}
