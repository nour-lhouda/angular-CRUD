import { InstrumentsService } from './../../instruments/services/instruments.service';

//
import { Component,OnInit } from '@angular/core';
import { Facility, facilities } from '../models/facilities';
import { Instrument,instruments } from '../../instruments/models/instruments';
import { FacilitiesService } from '../services/facilities.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[FacilitiesService]
})

// el provider kayprovidi service

export class ListComponent implements OnInit {

  facilitiesList: Facility[]=[];
  instrumentsList: Instrument[] = [
    {
      id: 1,
      name: 'Item 1',
      active: true,
      description: "Good Item",
      facilityId: 1,
      facilityName: ''
    },


    {
      id: 2,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 2,
      facilityName: ''
    } ,{
      id: 3,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 3,
      facilityName: ''
    } ,{
      id: 4,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 4,
      facilityName: ''
    },
    {
      id: 5,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 5,
      facilityName: ''
    }
  ];
  pickedFacilityName : string ="";
  constructor(private facilitiesService:FacilitiesService , private instruemntService: InstrumentsService){}

  // automaticly show facility is showed
  ngOnInit():void{
    this.showFacilities();
  }


  // showFacilities()
  // {
  //   this.facilitiesService.getList().subscribe
  //   (
  //     list=>
  //     {
  //       this.facilitiesList=list;
  //       this.instruemntService.getList().subscribe(
  //         list=>{
  //           this.instrumentsList=list;
  //           for(let i = 0; i < this.facilitiesList.length; i++){
  //             this.facilitiesList[i].instrumentList = this.instrumentsList.filter(s => s.facilityId == this.facilitiesList[i].id);
  //           }
  //         }
  //       );
  //     }
  //   );
  // }

  showFacilities(){
    this.facilitiesList=facilities;
    for(let i = 0; i < this.facilitiesList.length; i++){
      this.facilitiesList[i].instrumentList = this.instrumentsList.filter(s => s.facilityId == this.facilitiesList[i].id);
    }
  }

    //
    //  i need to create a service == ng g s modules/facilities/facilities  the first facility is the module and the second is for the service
    // i m gonna add the service under facility for orgnizing the code
    // this.facilities = facilities;

  addDummyFacility(){
    this.facilitiesList.push({
      id: -1, name: "Some dummy facility", active: true, description: "",
      instrumentList: []
    });
    this.facilitiesList.push({
      id: -1, name: "Some dummy facility", active: true, description: "",
      instrumentList: []
    });
  }


  pickFacility( facility:Facility)
  {
     this.pickedFacilityName = facility.name;}

  //  pickFacilityByID(facility:Facility){
  //    this.service.getID(facility.id).subscribe(item=>{
  //      this.facilities=item;
  //   })}
   //   // facility?

}

