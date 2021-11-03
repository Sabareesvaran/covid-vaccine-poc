import { Component, OnInit } from '@angular/core';
import { pinData } from '../app.component';
import { GetServicesService } from '../get-services.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {

  pincode:string = ''
  pinDataArray :pinData[] = []

  constructor(private getservice:GetServicesService) { }

  ngOnInit(): void {
  }

  findByPin(){

    this.getservice.findByPincode(this.pincode).subscribe(responseData =>{
      this.pinDataArray = responseData
      // console.log(responseData)
    })

  }
}
