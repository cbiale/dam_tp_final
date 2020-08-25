import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerLogsPage } from './ver-logs.page';

describe('VerLogsPage', () => {
  let component: VerLogsPage;
  let fixture: ComponentFixture<VerLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerLogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
