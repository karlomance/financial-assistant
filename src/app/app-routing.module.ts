import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'homepage', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
