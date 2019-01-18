import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioShowComponent } from './desafio-show.component';

describe('DesafioShowComponent', () => {
  let component: DesafioShowComponent;
  let fixture: ComponentFixture<DesafioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
