import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PincodeComponent } from './pincode/pincode.component';


const appRoutes:Routes = [

  {path:"", component:HomeComponent},
  {path:"pin", component:PincodeComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
