import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerDispositivoPage } from './ver-dispositivo.page';

describe('VerDispositivoPage', () => {
  let component: VerDispositivoPage;
  let fixture: ComponentFixture<VerDispositivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDispositivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerDispositivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
