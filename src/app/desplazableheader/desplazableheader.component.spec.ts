import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplazableheaderComponent } from './desplazableheader.component';

describe('DesplazableheaderComponent', () => {
  let component: DesplazableheaderComponent;
  let fixture: ComponentFixture<DesplazableheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesplazableheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesplazableheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
