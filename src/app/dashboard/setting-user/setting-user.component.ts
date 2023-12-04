import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUserTableComponent } from '../setting-user-table/setting-user-table.component';

@Component({
  selector: 'app-settings-user',
  standalone: true,
  templateUrl: './setting-user.component.html',
  styleUrl: './setting-user.component.scss',
  imports: [CommonModule, SettingsUserTableComponent],
})
export class SettingsUserComponent {}
