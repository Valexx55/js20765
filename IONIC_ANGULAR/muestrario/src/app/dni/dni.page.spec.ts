import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DniPage } from './dni.page';

describe('DniPage', () => {
  let component: DniPage;
  let fixture: ComponentFixture<DniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
