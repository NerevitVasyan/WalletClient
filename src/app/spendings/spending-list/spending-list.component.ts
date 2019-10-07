import { Component, OnInit } from '@angular/core';
import { SpendingDto } from 'src/app/models/spendingDto';
import { SPENDINGS_MOCK } from 'src/app/mock-data/spendings-mock';
import { SpendingsService } from 'src/app/services/spendings.service';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.css']
})
export class SpendingListComponent implements OnInit {

  spendings: SpendingDto[];

  constructor(private spendingsService: SpendingsService) { }

  ngOnInit() {
    this.spendingsService.getSpendings().subscribe(result=>{
      this.spendings = result;
    });
    //this.spendings = SPENDINGS_MOCK;
    //console.log(this.spendings);
  }
}
