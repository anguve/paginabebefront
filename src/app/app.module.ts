import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLogoComponent } from './navbarLogo/navbarLogo.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackComponent } from './back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    FooterComponent,
    BodyComponent,
    BackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
