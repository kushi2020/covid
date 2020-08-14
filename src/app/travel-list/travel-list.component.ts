import { Component, OnInit } from '@angular/core';
import {TravelService} from '../shared/travel.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  sub: Subscription;


  public timeto:string;public timefrom:string;
    hours:string;
    minutes:string;
  constructor(public travelService: TravelService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  betweenDate(dateForm:NgForm):void {
    this.timefrom=this.convert(dateForm.value.timefrom);
    this.timeto=this.convert(dateForm.value.timeto);
    
    this.travelService.get(this.timefrom,this.timeto).subscribe (
      data => {
        var datasource = data 
     }, 
     error => { throw error },
     () => console.log("finished"));

    
  }

   convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
      var hours  = ("0" + date.getHours()).slice(-2);
       var minutes = ("0" + date.getMinutes()).slice(-2);
      var seconds = ("0" + date.getSeconds()).slice(-2);
       var mySQLDate = [day,mnth,date.getFullYear()].join("/");
       var mySQLTime = [hours, minutes, seconds].join(":");
       return [mySQLDate, mySQLTime].join(" ");  }
  
  


}
