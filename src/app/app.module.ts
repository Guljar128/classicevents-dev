import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { AnniversaryComponent } from './components/anniversary/anniversary.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { FestivalComponent } from './components/festival/festival.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerFeedbackComponent } from './components/customer-feedback/customer-feedback.component';
import { StageComponent } from './components/stage/stage.component';
import { EntryComponent } from './components/entry/entry.component';
import { BalloonComponent } from './components/balloon/balloon.component';
import { HouseComponent } from './components/house/house.component';
import { SchoolComponent } from './components/school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BirthdayComponent,
    AnniversaryComponent,
    WeddingComponent,
    FestivalComponent,
    CustomerFeedbackComponent,
    StageComponent,
    EntryComponent,
    BalloonComponent,
    HouseComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
