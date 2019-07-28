import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotMemoComponent } from './dot-memo.component';

describe('CodablogComponent', () => {
  let component: DotMemoComponent;
  let fixture: ComponentFixture<DotMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
