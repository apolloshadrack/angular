import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { SettingsUserComponent } from '../setting-user/setting-user.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  imports: [CommonModule, SettingsUserComponent, MatTabsModule],
})
export class SettingsComponent {}
