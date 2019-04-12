import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProdectComponent } from './single-prodect.component';

describe('SingleProdectComponent', () => {
  let component: SingleProdectComponent;
  let fixture: ComponentFixture<SingleProdectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProdectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
