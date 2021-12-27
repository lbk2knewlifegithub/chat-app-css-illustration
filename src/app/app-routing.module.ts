import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chat-app',
    loadChildren: () =>
      import('./chat-app/chat-app.module').then((m) => m.ChatAppModule),
  },
  {
    path: '',
    redirectTo: '/chat-app',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
