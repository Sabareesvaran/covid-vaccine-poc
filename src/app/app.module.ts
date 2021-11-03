import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PincodeComponent } from './pincode/pincode.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CalenderByPinComponent } from './calender-by-pin/calender-by-pin.component';
import { CalenderByDistrictComponent } from './calender-by-district/calender-by-district.component';
import { CalenderByCenterComponent } from './calender-by-center/calender-by-center.component';

@NgModule({
  declarations: [
    AppComponent,
    PincodeComponent,
    HomeComponent,
    CalenderByPinComponent,
    CalenderByDistrictComponent,
    CalenderByCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
