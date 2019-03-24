import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEbookFormComponent } from './edit-ebook-form.component';

describe('EditEbookFormComponent', () => {
  let component: EditEbookFormComponent;
  let fixture: ComponentFixture<EditEbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEbookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
