import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAppPageComponent } from './containers/chat-app-page.component';

const routes: Routes = [{ path: '', component: ChatAppPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatAppRoutingModule {}
