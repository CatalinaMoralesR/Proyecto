import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaEditrealComponent } from './idea-editreal.component';

describe('IdeaEditrealComponent', () => {
  let component: IdeaEditrealComponent;
  let fixture: ComponentFixture<IdeaEditrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaEditrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaEditrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
