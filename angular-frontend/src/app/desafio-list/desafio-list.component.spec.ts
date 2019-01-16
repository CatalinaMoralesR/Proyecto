import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioListComponent } from './desafio-list.component';

describe('DesafioListComponent', () => {
  let component: DesafioListComponent;
  let fixture: ComponentFixture<DesafioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
