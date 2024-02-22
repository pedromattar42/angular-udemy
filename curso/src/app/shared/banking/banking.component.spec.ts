import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent, ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): should poupanca have 10', () => {
    expect(component.getPoupanca).toEqual(10)
  })

  it('(U) getSacar(): should carteira have 50', () => {
    expect(component.getCarteira).toEqual(50)
  })

  it('(U) setSacar(): should transfer poupanca from carteira', () => {
    component.setSacar(10)
    fixture.detectChanges()
    expect(component.getPoupanca).toEqual(0)
    expect(component.getCarteira).toEqual(60)
  })

  it('(U) setDepositar(): should transfer carteira from poupanca', () => {
    component.setDepositar(50)
    fixture.detectChanges()
    expect(component.getPoupanca).toEqual(60)
    expect(component.getCarteira).toEqual(0)
  })

  it('(I) setDepositar(): should transfer carteira from poupanca', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = "10";
    el.querySelector('#depositar').click();
    fixture.detectChanges()

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20')
    expect(component.getPoupanca).toEqual(20)
    expect(component.getCarteira).toEqual(40)
  })

  it('(I) setSacar(): should transfer carteira from poupanca', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-sacar').value = "10";
    el.querySelector('#sacar').click();
    fixture.detectChanges()
    expect(el.querySelector('#get-carteira').textContent).toEqual('60')
  })
});
