import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../model/placheholder.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor (private http: HttpClient) {}

  public getApi():Observable<api> {
    return this.http.get("https://teste-xper.herokuapp.com/products");
  }

}
