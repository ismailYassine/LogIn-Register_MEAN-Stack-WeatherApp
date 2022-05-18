import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { ConditionsActuelleComponent } from './conditions-actuelle/conditions-actuelle.component';
import { HourlyComponent } from './hourly/hourly.component';

const routes: Routes = [
  //On redirige / vers /weather
  {path:'',pathMatch:'full', redirectTo:'weather'},

  //canActivate: [AuthGuard] permet de bloquer 
  //une route si l'utilisateur n'est pas login
  //TODO vous pouvez retirer temporairement le guard pour développer
  {path:'weather', component: AppComponent, canActivate: [AuthGuard]},
  // {path:'weather', component: ConditionsActuelleComponent},

  //Route pour la page d'authentification
  {path:'auth', component: AuthComponent },
  {path:'hourly', component: HourlyComponent },
  // {path:'prochainjour', component: HourlyComponent },
  // {path:'astronomy', component: HourlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
