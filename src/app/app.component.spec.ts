import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { DisplayComponent } from './display/display/display.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatIconModule } from '@angular/material/icon';
import { DisplayLhsComponent } from './display/display-lhs/display-lhs.component';
import { DisplayRhsComponent } from './display/display-rhs/display-rhs.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      DisplayComponent,
      DisplayLhsComponent,
      DisplayRhsComponent
    ],
    imports: [
      MatIconModule,
      MatIconTestingModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'new-portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('new-portfolio');
  });
});
