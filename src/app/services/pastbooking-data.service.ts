import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastbookingDataService {
  url='';//put the api url here
  constructor(private http:HttpClient) { }
  getPastData(){
    /*return this.http.get(this.url)*/ //To get api.
  }
}
