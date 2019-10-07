import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpendingDto } from '../models/spendingDto';

@Injectable({
  providedIn: 'root'
})
export class SpendingsService {

  baseURL = "https://localhost:44342/api/";

  constructor(private http: HttpClient) { }

  getSpendings(): Observable<any> {
    let userId = localStorage.getItem("userId");
    return this.http.get(this.baseURL+"wallet/"+userId);
  }

  addSpending(spendingDto: SpendingDto): Observable<any> {
    let userId = localStorage.getItem("userId");
    spendingDto.userId = Number.parseInt(userId);
    return this.http.post(this.baseURL+"wallet/AddSpending",spendingDto);
  }

}
