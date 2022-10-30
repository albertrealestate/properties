import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescComponent } from './desc/desc.component';
import { VendreComponent } from './vendre/vendre.component';
import { LouerComponent } from './louer/louer.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },{
    path : 'desc/:id',
    component : DescComponent
  },{
    path : 'vendre',
    component : VendreComponent
  },{
    path : 'louer',
    component : LouerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
