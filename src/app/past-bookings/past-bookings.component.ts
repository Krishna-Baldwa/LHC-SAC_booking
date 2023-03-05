import { Component } from '@angular/core';
import { PastbookingDataService } from '../services/pastbooking-data.service';

@Component({
  selector: 'app-past-bookings',
  templateUrl: './past-bookings.component.html',
  styleUrls: ['./past-bookings.component.css']
})
export class PastBookingsComponent {
  datas:any;
  constructor(private pastdata: PastbookingDataService)
  {
    console.warn("pastdata",pastdata.getPastData())
    this.datas=pastdata.getPastData();
    /*this.pastdata.getPastData().subscribe((data)=>
      {this.datas=data;});*/ //For getting api data from service.
  }
}
