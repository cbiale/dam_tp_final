import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMedicionesPage } from './ver-mediciones.page';

describe('VerMedicionesPage', () => {
  let component: VerMedicionesPage;
  let fixture: ComponentFixture<VerMedicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMedicionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMedicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
