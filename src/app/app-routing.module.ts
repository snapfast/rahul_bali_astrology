import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultationComponent } from './consultation/consultation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultation', component: ConsultationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
