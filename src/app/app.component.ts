import { Component } from '@angular/core';

export class state {
  public state_id: string;
  public state_name: string;
  public state_name_l?: string;
}

export class District {
  district_id: number;
  district_name: string;
}

export class SessionData {
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
export class pinData {
  address: string;
  allow_all_age: string;
  available_capacity: string;
  available_capacity_dose1: string;
  available_capacity_dose2: string;
  block_name: string;
  center_id: string;
  date: string;
  district_name: string;
  fee: string;
  fee_type: string;
  from: string;
  lat: string;
  long: string;
  min_age_limit: string;
  name: string;
  pincode: string;
  session_id: string;
  slots: [string];
  state_name: string;
  to: string;
  vaccine: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'covid-demo';
}
