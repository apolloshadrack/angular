import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  getLeavesById(id: number) {
    throw new Error('Method not implemented.');
  }
  private leavesDB = [
    {
        "id": 1,
        "EIT_id": "john.doe@meltwater.org",
        "type": "Sick",
        "date": "3rd June - 15th July",
        "status": "Pending "
    },
    {
        "id": 2,
        "EIT_id": "jane.smith@meltwater.org",
        "type": "Property",
        "date": "14th Aug - 12th Sep",
        "status": "Accepted"
    },
    {
        "id": 3,
        "EIT_id": "peter.johnson@meltwater.org",
        "type": "Sick",
        "date": "2nd Nov - 29 Nov",
        "status": "Declined"
    },
    {
        "id": 4,
        "EIT_id": "emily.brown@meltwater.org",
        "type": "Property",
        "date": "3rd Dec - 10th Dec",
        "status": "Accepted"
    },
    {
        "id": 5,
        "EIT_id": "olivia.jackson@meltwater.org",
        "type": "Property",
        "date": "10th Oct - 20th Oct",
        "status": "Pending "
    },
    {
        "id": 6,
        "EIT_id": "william.anderson@meltwater.org",
        "type": "Sick",
        "date": "22nd Aug -  19th Sep",
        "status": "Accepted"
    },
    {
        "id": 7,
        "EIT_id": "sophia.miller@meltwater.org",
        "type": "Property",
        "date": "4th Dec - 12th Dec",
        "status": "Declined"
    },
    {
        "id": 8,
        "EIT_id": "daniel.wilson@meltwater.org",
        "type": "Sick",
        "date": "25th Sep - 10th Dec",
        "status": "Pending "
    },
    {
        "id": 9,
        "EIT_id": "olivia.rodriguez@meltwater.org",
        "type": "Property",
        "date": "19th Sep - 12th Dec",
        "status": "Accepted"
    },
    {
        "id": 10,
        "EIT_id": "lucas.garcia@meltwater.org",
        "type": "Sick",
        "date": "30th Nov - 2nd Dec",
        "status": "Declined"
    },
    {
        "id": 10,
        "EIT_id": "michael.martinez@meltwater.org",
        "type": "Property",
        "date": "25th Sep - 14th Dec",
        "status": "Pending "
    },
    {
        "id": 11,
        "EIT_id": "sophie.thomas@meltwater.org",
        "type": "Sick",
        "date": "20th Oct - 10th Sep",
        "status": "Accepted"
    },
    {
        "id": 12,
        "EIT_id": "gabriel.peterson@meltwater.org",
        "type": "Property",
        "date": "18th Sep - 30th Dec",
        "status": "Declined"
    },
    {
        "id": 13,
        "EIT_id": "oliver.hernandez@meltwater.org",
        "type": "Sick",
        "date": "20th Sep - 22nd Dec",
        "status": "Pending "
    }
  ]

  constructor() { }

  getLeaves() {
    return of(this.leavesDB)
  }
  
  getLeaveByID(id:number){
    return of(this.leavesDB.find(element => element.id === id));
  }
}
