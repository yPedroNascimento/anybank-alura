import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovaTransacaoComponent } from './form-nova-transacao.component';

describe('FormNovaTransacaoComponent', () => {
  let component: FormNovaTransacaoComponent;
  let fixture: ComponentFixture<FormNovaTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNovaTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNovaTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
