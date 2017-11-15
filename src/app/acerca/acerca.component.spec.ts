import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaComponent } from './acerca.component';

describe('AcercaComponent', () => {
  let component: AcercaComponent;
  let fixture: ComponentFixture<AcercaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
