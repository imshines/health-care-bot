import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedshopsPage } from './medshops.page';

describe('MedshopsPage', () => {
  let component: MedshopsPage;
  let fixture: ComponentFixture<MedshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedshopsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
