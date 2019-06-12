import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import{ FavouritesComponent } from './favourites/favourites.component';
import{ DetailsComponent } from './details/details.component';
 
const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'/home'},
{path:'home', component: HomeComponent}, 
{path:'result/:id',component: SearchComponent},
{path:'favourites',component: FavouritesComponent},
{path:'details/:name/:artistname',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
