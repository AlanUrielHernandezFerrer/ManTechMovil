import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificacionFechaPreventivoPage } from './modificacion-fecha-preventivo.page';

describe('ModificacionFechaPreventivoPage', () => {
  let component: ModificacionFechaPreventivoPage;
  let fixture: ComponentFixture<ModificacionFechaPreventivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionFechaPreventivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificacionFechaPreventivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
