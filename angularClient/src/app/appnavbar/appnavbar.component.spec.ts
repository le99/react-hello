import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnavbarComponent } from './appnavbar.component';

describe('AppnavbarComponent', () => {
  let component: AppnavbarComponent;
  let fixture: ComponentFixture<AppnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppnavbarComponent]
    });
    fixture = TestBed.createComponent(AppnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
