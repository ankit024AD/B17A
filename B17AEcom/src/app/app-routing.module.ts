import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';

const routes: Routes = [{
  path: 'bookDetail/:id',component: BookdetailComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
