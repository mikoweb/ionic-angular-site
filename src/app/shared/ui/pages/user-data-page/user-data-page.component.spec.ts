import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserDataPageComponent } from './user-data-page.component';

describe('UserDataPageComponent', () => {
  let component: UserDataPageComponent;
  let fixture: ComponentFixture<UserDataPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        UserDataPageComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
