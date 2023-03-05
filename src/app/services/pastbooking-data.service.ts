import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastbookingDataService {
  url='';//put the api url here
  // constructor(private http:HttpClient) { } // uncomment this
  getPastData(){
    return [{'S_No': 'dummy', 'Council': 'dummy', 'Reason':'dummy', 'Contact': 'dummy', 'Start_Time': 'dummy', 'End_Time': 'dummy', 'Room': 'dummy', 'Status': 'dummy'}];
    /*return this.http.get(this.url)*/ //To get api.
  }
}
