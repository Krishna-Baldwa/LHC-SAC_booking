import { Component } from '@angular/core';
import { RequestsdataService } from '../services/requestsdata.service';

@Component({
  selector: 'app-pending-req',
  templateUrl: './pending-req.component.html',
  styleUrls: ['./pending-req.component.css']
})
export class PendingReqComponent {
  requests:any;
  constructor(private requestdata: RequestsdataService)
  {
    console.warn("requestsdata",requestdata.getRequestsData())
    this.requests=requestdata.getRequestsData();
  }
}
