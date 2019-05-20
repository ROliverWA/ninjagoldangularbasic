import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  {
  title: string;
  gold: number =0 ;

  constructor() {
   
   }
   @Output('newAmount') newAmount: EventEmitter<object> = new EventEmitter();

  getGold(min: number, max: number, location: string) {
    let amount = this.generateGold(min, max);
    if (location === 'Casino') {      
      var lose: any = Math.round(Math.random());

      if (lose === 1) {        
        this.newAmount.emit({total: this.gold  -= amount, amount: amount, location: location, lost: true});
      }

      else  {             
        this.newAmount.emit({total: this.gold  += amount, amount: amount, location: location, lost: false});      
      }
    }

    else {
      this.newAmount.emit({total: this.gold  += amount, amount: amount, location: location, lost: false});
     }
    }

  generateGold(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }
    
    
  
}



