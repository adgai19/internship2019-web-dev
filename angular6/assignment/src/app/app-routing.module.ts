import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EnquieryComponent } from './enquiery/enquiery.component';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Route[] = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductsComponent},
  {path:'enquiry',component:EnquieryComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
