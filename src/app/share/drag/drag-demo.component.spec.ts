import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDemoComponent } from './drag-demo.component';

describe('DragComponent', () => {
  let component: DragDemoComponent;
  let fixture: ComponentFixture<DragDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
