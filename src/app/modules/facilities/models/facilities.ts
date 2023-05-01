import { Instrument } from "../../instruments/models/instruments";

export interface Facility{
    id: number;
    name: string;
    active: boolean;
    description:string;
    instrumentList: Instrument[];
}

export const facilities:Facility[]=[
    {
        id: 1,
        name: 'room 1',
        active: true,
        description: "Good Facility",
        instrumentList: []
      },
      {
        id: 2,
        name: 'room 2',
        active: true,
        description: "best phone",
        instrumentList: []
      },
      {
        id: 3,
        name: 'room 3',
        active: false,
        description: " good room",
        instrumentList: []
      },
      {
        id: 4,
        name: 'room 4',
        active: true,
        description: "good room",
        instrumentList: []
      },
      {
        id: 5,
        name: 'room 5',
        active: false,
        description: " good room",
        instrumentList: []
      }
]
