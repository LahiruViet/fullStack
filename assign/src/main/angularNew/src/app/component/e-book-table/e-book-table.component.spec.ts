import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookTableComponent } from './e-book-table.component';

describe('EBookTableComponent', () => {
  let component: EBookTableComponent;
  let fixture: ComponentFixture<EBookTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBookTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
