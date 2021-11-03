import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderByCenterComponent } from './calender-by-center/calender-by-center.component';
import { CalenderByDistrictComponent } from './calender-by-district/calender-by-district.component';
import { CalenderByPinComponent } from './calender-by-pin/calender-by-pin.component';
import { HomeComponent } from './home/home.component';
import { PincodeComponent } from './pincode/pincode.component';


const appRoutes:Routes = [

  {path:"", component:HomeComponent},
  {path:"pin", component:PincodeComponent},
  {path:"7daysPin", component:CalenderByPinComponent},
  {path:"7daysDistrict", component:CalenderByDistrictComponent},
  {path:"7daysCenter", component:CalenderByCenterComponent}


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
