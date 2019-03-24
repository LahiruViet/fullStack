import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEbookFormComponent } from './new-ebook-form.component';

describe('NewEbookFormComponent', () => {
  let component: NewEbookFormComponent;
  let fixture: ComponentFixture<NewEbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEbookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
