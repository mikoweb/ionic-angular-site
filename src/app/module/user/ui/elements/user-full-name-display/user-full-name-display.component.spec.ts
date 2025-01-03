import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserFullNameDisplayComponent } from './user-full-name-display.component';

describe('UserFullNameDisplayComponent', () => {
  let component: UserFullNameDisplayComponent;
  let fixture: ComponentFixture<UserFullNameDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        UserFullNameDisplayComponent,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFullNameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
