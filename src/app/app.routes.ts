import { Routes } from '@angular/router';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
import { UsersComponent } from './dashboard/users/users.component';
import { LeaveComponent } from './dashboard/leave/leave.component';
import { LeaveDetailsComponent } from './dashboard/leave-details/leave-details.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { AttendanceInnerComponent } from './dashboard/attendance-inner/attendance-inner.component';
import { AttendanceRegisterComponent } from './dashboard/attendance-register/attendance-register.component';
import { ItSupportComponent } from './dashboard/it-support/it-support.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'attendance-inner', component: AttendanceInnerComponent },
  { path: 'attendance-register', component: AttendanceRegisterComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'leave/:id/:name', component: LeaveDetailsComponent },
  { path: 'it-support', component: ItSupportComponent },
];
