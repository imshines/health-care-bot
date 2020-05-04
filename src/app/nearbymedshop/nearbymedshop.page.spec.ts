import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbymedshopPage } from './nearbymedshop.page';

describe('NearbymedshopPage', () => {
  let component: NearbymedshopPage;
  let fixture: ComponentFixture<NearbymedshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbymedshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbymedshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
