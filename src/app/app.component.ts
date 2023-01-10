import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
//declare function myfunction(): any
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor() {
   }

  ngOnInit() { 
   // myfunction()
  }
 
  title = 'LZ4DECODE';
}
