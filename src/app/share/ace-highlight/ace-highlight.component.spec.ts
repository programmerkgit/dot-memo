import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceHighlightComponent } from './ace-highlight.component';

describe('AceHighlightComponent', () => {
  let component: AceHighlightComponent;
  let fixture: ComponentFixture<AceHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
