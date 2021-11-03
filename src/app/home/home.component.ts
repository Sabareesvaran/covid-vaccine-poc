import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { District, SessionData, state } from '../app.component';
import { GetServicesService } from '../get-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stateId:string ='';
  districtID:string = '';

  StateListArray:state[] = []
  DistrictListArray:District[] = []
  SessionDataArray:SessionData[] = []
  subscription1:Subscription
  subscription2:Subscription
  subscription3:Subscription
  subscription4:Subscription



  constructor(private getService:GetServicesService){

  }

  ngOnInit(){
    this.subscription1 = this.getService.getState().subscribe(responseData=>{
      this.StateListArray = responseData;
      this.subscription1.unsubscribe()
    });

  }
  ngOnDestroy(){
    // this.subscription1.unsubscribe();
    // this.subscription2.unsubscribe();
    // this.subscription3.unsubscribe();
    // this.subscription4.unsubscribe();
  }

  getStates(){
    this.subscription2 =
    this.getService.getState().subscribe(responseData=>{
      this.StateListArray = responseData;
      this.subscription2.unsubscribe()
    });
  }


  getDistricts(){
    this.subscription3 =
    this.getService.getDistrict(this.stateId).subscribe(ResponseData =>{
      this.DistrictListArray = ResponseData;
      this.subscription3.unsubscribe()
    })
  }

  findByDistrict(){
    this.subscription4 =
    this.getService.findByDistrict(this.districtID).subscribe(responseData =>{
      this.SessionDataArray = responseData;
      this.subscription4.unsubscribe()
    })
  }

}
