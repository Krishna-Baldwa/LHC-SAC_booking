import { Component } from '@angular/core';
import { RequestsdataService } from '../services/requestsdata.service';

@Component({
  selector: 'app-pending-req',
  templateUrl: './pending-req.component.html',
  styleUrls: ['./pending-req.component.css']
})
export class PendingReqComponent {
  requests:any;
  viewstatus:boolean | undefined;
  constructor(private requestdata: RequestsdataService)
  {
    console.warn("requestsdata",requestdata.getRequestsData())
    this.requests=requestdata.getRequestsData();
    /*this.requestdata.getRequestsData().subscribe((data)=>
      {this.requests=data;});*/ //For getting api data from service.
  }
  Isaccepted(status:boolean){//When accepted this parameter of status will be true and false if admin rejects.
      this.viewstatus=false;
      this.viewstatus=!this.viewstatus;//Either of accepted or rejected when click will change viewstatus to true.
      this.submit_status(status,this.viewstatus);
  }
  submit_status(data1:boolean,data2:boolean){
    console.warn(data1);
    console.warn(data2);
    //To send this status data to service to send it back via post api.
    /*this.requestdata.sendstatus(data1,data2).subscribe((result)=>{
      console.warn(result);
    });*/ 
  }
}
