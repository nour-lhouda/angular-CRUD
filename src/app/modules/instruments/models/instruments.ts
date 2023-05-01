export interface Instrument {
    id: number;
    name: string;
    active: boolean;
    description:string;
    facilityId: number;
    facilityName: string;
  }

  export const instruments:Instrument[] = [
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
      name: 'Item 2',
      active: true,
      description: "nice item",
      facilityId: 2,
      facilityName: ''
    },
    {
      id: 3,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 2,
      facilityName: ''
    },
    {
      id: 3,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 2,
      facilityName: ''
    } ,{
      id: 4,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 3,
      facilityName: ''
    } ,{
      id: 5,
      name: 'Item 3',
      active: true,
      description: "What a good item",
      facilityId: 4,
      facilityName: ''
    }
  ];
