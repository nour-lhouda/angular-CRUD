import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { facilities, Facility } from '../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {



  constructor(private httpClient:HttpClient) { }

   // send request to the backend then the webApi take the data from the database and send it to the UI
  // getList(){
  //   return this.httpClient.get<Facility[]>("http://localhost:5215/api/facilities");

  // }
  // no [] because katreje3 ri facility we7da
  // getID(id:number){
  //   return this.httpClient.get<Facility>("http://localhost:5215/api/facilities + id");
  // }
}


//observebal ?? is pathern created when a request it sent
// bind == take the list and add it to facility this happend in the showFacilities method
//cross urgen issue== diifrent origin? domaine name conflic , the url that backend is waiting to receive is not from the same domain name angular is using and the backend is expecting
//bach n7ello had l problem we sspecify the domaine name  in the c# code we addd  in the configure the http
// a withOrigines to the appUseCorps with the Ui url that we want it to be allowed
