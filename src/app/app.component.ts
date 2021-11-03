import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetServicesService } from './get-services.service';



export class state {
  public state_id: string
  public state_name: string
  public state_name_l?: string
 }

 export class District{
   district_id: number
   district_name: string

 }

 export class SessionData{
     center_id: number;
     name: string;
     address: string;
     state_name: string;
     district_name: string;
     block_name: string;
     pincode: number;
     from: string;
     to: string;
     lat: number;
     long: number;
     fee_type: string;
     session_id: string;
     date: string;
     available_capacity: number;
     available_capacity_dose1: number;
     available_capacity_dose2: number;
     fee: string;
     allow_all_age: boolean;
     min_age_limit: number;
     vaccine: string;
     slots: string[];
 }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'covid-demo';

  stateId:string ='';
  districtID:string = '';

  StateListArray:state[] = []
  DistrictListArray:District[] = []
  SessionDataArray:SessionData[] = []

  constructor(private getService:GetServicesService){

  }

  ngOnInit(){
    this.getService.getState().subscribe(responseData=>{
      this.StateListArray = responseData;
    });
  }
  ngOnDestroy(){

  }

  getStates(){
    this.getService.getState().subscribe(responseData=>{
      this.StateListArray = responseData;
    });
  }


  getDistricts(){
    this.getService.getDistrict(this.stateId).subscribe(ResponseData =>{
      this.DistrictListArray = ResponseData;
    })
  }

  findByDistrict(){
    this.getService.findByDistrict(this.districtID).subscribe(responseData =>{
      this.SessionDataArray = responseData;
    })
  }

}
