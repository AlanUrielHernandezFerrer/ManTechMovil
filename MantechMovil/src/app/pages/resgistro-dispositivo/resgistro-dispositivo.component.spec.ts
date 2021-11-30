import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgistroDispositivoComponent } from './resgistro-dispositivo.component';

describe('ResgistroDispositivoComponent', () => {
  let component: ResgistroDispositivoComponent;
  let fixture: ComponentFixture<ResgistroDispositivoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistroDispositivoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgistroDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
