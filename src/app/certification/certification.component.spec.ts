import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationComponent } from './certification.component';

describe('CertificationComponent', () => {
  let component: CertificationComponent;
  let fixture: ComponentFixture<CertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationComponent]
    });
    fixture = TestBed.createComponent(CertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
