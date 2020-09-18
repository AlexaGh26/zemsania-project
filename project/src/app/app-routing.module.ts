import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
