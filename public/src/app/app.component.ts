import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  gold: number = 0;
  log: object[] = [];

  UpdateGold(event) {   
    var newLog; 
    this.gold= event['total'];
    if (!event['lost']) {      
      newLog = "Won " + event.amount + " goldz at the " + event['location'];
      this.log.push({log: newLog, won: true});
      console.log(newLog);
    }
    else {
      newLog = "Lost " + event.amount + " goldz at the " + event['location'];
      this.log.push({log: newLog, won: false});
      console.log(newLog);
    }

    console.log(event);
  }





}
