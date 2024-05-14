import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesButtonComponent } from './movies-button.component';

describe('MoviesButtonComponent', () => {
  let component: MoviesButtonComponent;
  let fixture: ComponentFixture<MoviesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
