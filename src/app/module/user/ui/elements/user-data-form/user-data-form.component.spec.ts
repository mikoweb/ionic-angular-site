import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserDataFormComponent } from './user-data-form.component';

describe('UserDataFormComponent', () => {
  let component: UserDataFormComponent;
  let fixture: ComponentFixture<UserDataFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        UserDataFormComponent,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
