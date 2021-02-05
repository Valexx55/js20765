import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListapelisPage } from './listapelis.page';

describe('ListapelisPage', () => {
  let component: ListapelisPage;
  let fixture: ComponentFixture<ListapelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListapelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
