import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsdataService {

  constructor(private http:HttpClient) { }
  getRequestsData(){
    return [
      {S_No:1,Council: 'Aeromodelling Club', Reason: "Guiding Freshie's for the upcoming aeromodelling GC", Contact: 'Divyanshu', Start_Time: '28/02/2023 17:00', End_Time: '28/02/2023 19:30', Room: 'LH-102'},
      {S_No:2,Council: 'XLR8', Reason: "Giving Intro to Freshie's about out Flagship event", Contact: 'Sachin', Start_Time: '02/03/2023 18:00', End_Time: '02/03/2023 19:30', Room: 'LH-201'}
    ]
  }
}
