import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

// Ngx Cookies Services
import { CookieService } from 'ngx-cookie-service';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Angular Material
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
