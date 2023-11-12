import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { LoginComponent } from './login/login.component';
import { MovieitemsComponent } from './movieitems/movieitems.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'movie',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'movieitems',canActivate:[AuthGuard],component:MovieitemsComponent},
  {path:'itemdetails/:media_type/:id',canActivate:[AuthGuard],component:ItemdetailsComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'network',canActivate:[AuthGuard],component:NetworkComponent},
  {path: 'settings',canActivate:[AuthGuard],loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
