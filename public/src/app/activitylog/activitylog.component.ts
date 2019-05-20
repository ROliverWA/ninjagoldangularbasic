import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent{

  constructor() { }

 @Input() logData: string[];
}
