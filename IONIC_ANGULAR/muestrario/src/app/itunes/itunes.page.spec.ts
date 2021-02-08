import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItunesPage } from './itunes.page';

describe('ItunesPage', () => {
  let component: ItunesPage;
  let fixture: ComponentFixture<ItunesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItunesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
