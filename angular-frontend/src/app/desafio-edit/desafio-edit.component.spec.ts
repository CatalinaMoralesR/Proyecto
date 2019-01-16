import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioEditComponent } from './desafio-edit.component';

describe('DesafioEditComponent', () => {
  let component: DesafioEditComponent;
  let fixture: ComponentFixture<DesafioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
