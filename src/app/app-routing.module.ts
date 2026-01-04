import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { AnniversaryComponent } from './components/anniversary/anniversary.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { FestivalComponent } from './components/festival/festival.component';
import { StageComponent } from './components/stage/stage.component';
import { EntryComponent } from './components/entry/entry.component';
import { BalloonComponent } from './components/balloon/balloon.component';
import { HouseComponent } from './components/house/house.component';
import { SchoolComponent } from './components/school/school.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'birthday', component: BirthdayComponent, data: { animation: 'BirthdayPage' } },
  { path: 'anniversary', component: AnniversaryComponent, data: { animation: 'AnniversaryPage' } },
  { path: 'wedding', component: WeddingComponent, data: { animation: 'WeddingPage' } },
  { path: 'festival', component: FestivalComponent, data: { animation: 'FestivalPage' } },
  { path: 'stage', component: StageComponent, data: { animation: 'StagePage' } },
  { path: 'entry', component: EntryComponent, data: { animation: 'StagePage' } },
  { path: 'balloon', component: BalloonComponent, data: { animation: 'StagePage' } },
  { path: 'house', component: HouseComponent, data: { animation: 'StagePage' } },
  { path: 'school', component: SchoolComponent, data: { animation: 'StagePage' } },
  { path: '**', redirectTo: '' } // optional: redirect unknown paths to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
