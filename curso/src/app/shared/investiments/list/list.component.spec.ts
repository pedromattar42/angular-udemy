import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    expect(component.investiments.length).toEqual(4);
    expect(component.investiments[0].name).toContain('Itaú');
    expect(component.investiments[component.investiments.length - 1].name).toContain('Inter');
  });

  it('(I) should list investiments', () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll("#list-itens");
    
    expect(investiments.length).toBe(4)
    expect(investiments[0].textContent.trim()).toContain('Itaú | 100')
  });
});
