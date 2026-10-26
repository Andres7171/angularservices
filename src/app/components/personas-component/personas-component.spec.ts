import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonasComponent } from './personas-component';

describe('PersonasComponent', () => {
  let component: PersonasComponent;
  let fixture: ComponentFixture<PersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
