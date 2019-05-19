import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; //generally don't declare components in a routing module
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent}
];


@NgModule({
  // declarations: [], //generally don't declare components in a routing module
  imports: [
    // CommonModule //generally don't declare components in a routing module
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
