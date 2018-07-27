import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldRankingComponent } from './old-ranking.component';

describe('OldRankingComponent', () => {
  let component: OldRankingComponent;
  let fixture: ComponentFixture<OldRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
