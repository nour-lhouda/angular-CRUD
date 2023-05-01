import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Instrument } from '../models/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get<Instrument[]>("http://localhost:5215/api/instruments");
    //
  }

}
