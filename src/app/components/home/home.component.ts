import { Component } from '@angular/core';
import { GlobalDB } from 'src/app/database/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
    
  }
  ourCoreServices = GlobalDB.ourCoreServices;

  imageGallery = GlobalDB.imageGallery;

  circleGallery = GlobalDB.circleGallery;

  stats = GlobalDB.stats;
}
