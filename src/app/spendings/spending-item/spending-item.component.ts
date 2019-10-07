import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SpendingDto } from 'src/app/models/spendingDto';
import { SPENDINGS_MOCK } from 'src/app/mock-data/spendings-mock';

@Component({
  selector: 'app-spending-item',
  templateUrl: './spending-item.component.html',
  styleUrls: ['./spending-item.component.css']
})
export class SpendingItemComponent implements OnInit {
  
  @Input() item: SpendingDto;

  constructor() { }

  ngOnInit() {
    //this.item = SPENDINGS_MOCK[0];
    console.log(this.item);
  }

}
