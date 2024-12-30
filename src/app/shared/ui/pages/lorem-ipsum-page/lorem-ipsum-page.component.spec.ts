import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoremIpsumPageComponent } from './lorem-ipsum-page.component';

describe('LoremIpsumPageComponent', () => {
  let component: LoremIpsumPageComponent;
  let fixture: ComponentFixture<LoremIpsumPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        LoremIpsumPageComponent,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoremIpsumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
