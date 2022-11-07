import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTwooComponent } from './assign-twoo.component';

describe('AssignTwooComponent', () => {
  let component: AssignTwooComponent;
  let fixture: ComponentFixture<AssignTwooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTwooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTwooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
