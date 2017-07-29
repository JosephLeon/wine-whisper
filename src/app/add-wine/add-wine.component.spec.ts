import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWineComponent } from './add-wine.component';

describe('AddWineComponent', () => {
  let component: AddWineComponent;
  let fixture: ComponentFixture<AddWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
