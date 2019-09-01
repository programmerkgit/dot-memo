import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotDragDropComponent } from './dot-drag-drop.component';

describe('DragDropComponent', () => {
  let component: DotDragDropComponent;
  let fixture: ComponentFixture<DotDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
