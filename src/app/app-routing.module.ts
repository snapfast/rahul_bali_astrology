import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './consultation';

const routes: Routes = [
  { path: 'consultation', component: ConsultationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
