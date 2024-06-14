import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransItemComponent } from './trans-item.component';

describe('TransItemComponent', () => {
  let component: TransItemComponent;
  let fixture: ComponentFixture<TransItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
