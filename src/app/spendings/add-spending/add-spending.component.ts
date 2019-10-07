import { Component, OnInit } from '@angular/core';
import { SpendingDto } from 'src/app/models/spendingDto';
import { SPENDINGS_MOCK } from 'src/app/mock-data/spendings-mock';
import { Router } from '@angular/router';
import { SpendingsService } from 'src/app/services/spendings.service';

@Component({
  selector: 'app-add-spending',
  templateUrl: './add-spending.component.html',
  styleUrls: ['./add-spending.component.css']
})
export class AddSpendingComponent implements OnInit {

  item: SpendingDto;
  tags: string;

  constructor(private router: Router,
              private spendingsService: SpendingsService) { }

  ngOnInit() {
    this.item = new SpendingDto();
  }

  addSpending() {
    this.item.tags = this.tags.split(',');
    
    this.spendingsService.addSpending(this.item).subscribe(result=> {
      this.router.navigate([""]);
    },
    error=>{
      console.error(error);
    });

    //SPENDINGS_MOCK.push(this.item);

  }
}