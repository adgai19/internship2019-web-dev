import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompComponent } from './comp/comp.component';
import { ProductsComponent } from './products/products.component';


const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  {
    path: 'aboutus', component: AboutUsComponent, children: [
      { path: '', redirectTo: 'comp', pathMatch: 'full' }
      , {
        path: 'comp', component: CompComponent
      },
      { path: 'products', component: ProductsComponent }
    ]


  },
  { path: '**', component: PageNotFoundComponent }//last object page not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
