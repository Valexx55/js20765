import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdivinaPage } from './adivina.page';

describe('AdivinaPage', () => {
  let component: AdivinaPage;
  let fixture: ComponentFixture<AdivinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdivinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
