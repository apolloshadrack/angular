import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private attendanceDb = [
    {
      id: 1,
      eit_id: 'derek@meltwater.org',
      reporting_time: '8:30am',
      class: true,
      number_of_times: 3,
      skills: 'UI/UX',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capstone 3',
      number_of_working_days: '7',
      number_of_times_mest_in: '1',
      most_missed_classes: 'Business',
      absense: '1',
      punctuality: 'Good',
      requests: '2',
    },
    {
      id: 2,
      eit_id: 'precious@meltwater.org',
      reporting_time: '5:00am',
      class: false,
      number_of_times: 1,
      skills: 'Backend Developer',
      role: 'Fellow',
      status: 'Part time',
      milestone: 'Capstone 4',
      number_Of_working_days: '14',
      number_Of_timesMestIn: '9',
      most_missed_classes: '2',
      absense: '1',
      punctuality: 'Good',
      requests: '1',
    },
    {
      id: 3,
      eit_id: 'oyin@meltwater.org',
      reporting_time: '8:00am',
      class: true,
      number_of_times: 41,
      skills: 'Frontend Developer',
      role: 'Senior Developer',
      status: 'Full time',
      milestone: 'Milestone 6',
      number_Of_working_days: '54',
      number_Of_timesMestIn: '20',
      most_missed_classes: '3',
      absense: '2',
      punctuality: 'Good',
      requests: '1',
    },
    {
      id: 4,
      eit_id: 'rawkn@meltwater.org',
      reporting_time: '9:15am',
      class: true,
      number_of_times: 0,
      skills: 'Software Development',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 7',
      number_Of_working_days: '14',
      number_Of_timesMestIn: '4',
      most_missed_classes: '2',
      absense: '1',
      punctuality: 'Great',
      requests: '2',
    },
    {
      id: 5,
      eit_id: 'Obehi@meltwater.org',
      reporting_time: '6:30am',
      class: false,
      number_of_times: 2,
      skills: '',
      role: 'Quality Assurance',
      status: 'Full time',
      milestone: 'Milestone 3',
      number_Of_working_days: '14',
      number_Of_timesMestIn: '2',
      most_missed_classes: '4',
      absense: '2',
      punctuality: 'Good',
      requests: '4',
    },
    {
      id: 6,
      eit_id: 'derek@meltwater.org',
      reporting_time: '8:30am',
      class: true,
      number_of_times: 3,
      skills: 'UI/UX',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capstone 3',
      number_of_working_days: '7',
      number_of_times_mest_in: '1',
      most_missed_classes: 'Business',
      absense: '1',
      punctuality: 'Good',
      requests: '2',
    },
    {
      id: 7,
      eit_id: 'precious@meltwater.org',
      reporting_time: '5:00am',
      class: false,
      number_of_times: 1,
      skills: 'Backend Developer',
      role: 'Fellow',
      status: 'Part time',
      milestone: 'Capstone 4',
      number_Of_working_days: '14',
      number_Of_timesMestIn: '9',
      most_missed_classes: '2',
      absense: '1',
      punctuality: 'Good',
      requests: '1',
    },
    {
      id: 8,
      eit_id: 'oyin@meltwater.org',
      reporting_time: '8:00am',
      class: true,
      number_of_times: 41,
      skills: 'Frontend Developer',
      role: 'Senior Developer',
      status: 'Full time',
      milestone: 'Milestone 6',
      number_Of_working_days: '54',
      number_Of_timesMestIn: '20',
      most_missed_classes: '3',
      absense: '2',
      punctuality: 'Good',
      requests: '1',
    },
    {
      id: 9,
      eit_id: 'rawkn@meltwater.org',
      reporting_time: '9:15am',
      class: true,
      number_of_times: 0,
      skills: 'Software Development',
      role: 'Project Manager',
      status: 'Full time',
      milestone: 'Capston 7',
      number_Of_working_days: '14',
      number_Of_timesMestIn: '4',
      most_missed_classes: '2',
      absense: '1',
      punctuality: 'Great',
      requests: '2',
    },
    {
      id: 10,
      eit_id: 'Obehi@meltwater.org',
      reporting_time: '6:30am',
      class: false,
      number_of_times: 2,
      skills: '',
      role: 'Quality Assurance',
      status: 'Full time',
      milestone: 'Milestone 3',
      number_Of_working_days: '14',
      number_Of_timesMestIn: '2',
      most_missed_classes: '4',
      absense: '2',
      punctuality: 'Good',
      requests: '4',
    },
  ];
  constructor() {}

  getAttendance() {
    return of(this.attendanceDb);
  }

  getSingleAttendance(id: number) {
    const user = this.attendanceDb.find((element) => (element.id = id));
    return of(user);
  }
}
