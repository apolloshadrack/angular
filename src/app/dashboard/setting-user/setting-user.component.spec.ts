import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUserComponent } from './setting-user.component';

describe('SettingUserComponent', () => {
  let component: SettingsUserComponent;
  let fixture: ComponentFixture<SettingsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});