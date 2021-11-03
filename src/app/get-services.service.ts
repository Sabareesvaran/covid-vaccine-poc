import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { District, pinData, SessionData, state } from './app.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetServicesService {
  constructor(private http: HttpClient) {}

  getState() {
    return this.http
      .get<{ states: state[]; ttl: number }>(
        'https://cdn-api.co-vin.in/api/v2/admin/location/states'
      )
      .pipe(
        map((stateResp) => {
          return stateResp.states;
        })
      );
  }

  getDistrict(stateId: string) {
    return this.http
      .get<{ districts: District[]; ttl: number }>(
        'https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + stateId
      )
      .pipe(
        map((distResp) => {
          return distResp.districts;
        })
      );
  }

  findByDistrict(districtID: string) {
    return this.http
      .get<{ sessions: SessionData[] }>(
        ' https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=' +
          districtID +
          '&date=3-11-2021'
      )
      .pipe(
        map((distResp) => {
          return distResp.sessions;
        })
      );
  }

  findByPincode(pincode:string){
    return this.http.get<{sessions:pinData[]}>('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pincode+'&date=3-11-2021').pipe(map(responseData =>{
      // console.log(responseData.sessions)
      return responseData.sessions
    }))
  }
}
