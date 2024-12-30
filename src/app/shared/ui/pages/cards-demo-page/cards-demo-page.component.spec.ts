import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardsDemoPageComponent } from './cards-demo-page.component';

describe('CardsDemoPageComponent', () => {
  let component: CardsDemoPageComponent;
  let fixture: ComponentFixture<CardsDemoPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CardsDemoPageComponent,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
