import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Card} from '../models/card'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  url="http://localhost:56055/api/card";
  id=1;
  constructor(private http: HttpClient) { }

  getCard(id): Observable<Card>
  {
      return this.http.get<Card>(this.url+'/'+id).pipe();
  }
}
