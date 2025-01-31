import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoComponent } from '../../../models/legajo';

describe('AlumnoComponent', () => {
  let component: AlumnoComponent;
  let fixture: ComponentFixture<AlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
