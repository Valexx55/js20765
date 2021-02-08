import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImcPage } from './imc.page';

describe('ImcPage', () => {
  let component: ImcPage;
  let fixture: ComponentFixture<ImcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
