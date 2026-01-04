import { Component } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent {
  stages = [
  {
    title: 'Haldi',
    text: 'A Splash of Sunshine! The vibrant Haldi ceremony is where the fun begins.',
    imgUrl: 'assets/images/stages/haldi.jpg',
    link: '#'
  },
  {
    title: 'Mehndi',
    text: 'Color your hands and hearts! A celebration of art, laughter, and love.',
    imgUrl: 'assets/images/stages/menhdi.jpg',
    link: '#'
  },
  {
    title: 'Sangeet Night',
    text: 'Dance, music, and endless joy — where every beat tells a love story.',
    imgUrl: 'assets/images/stages/sangeet.jpg',
    link: '#'
  },
  {
    title: 'Wedding Ceremony',
    text: 'Two souls, one bond. Witness the sacred union of hearts and traditions.',
    imgUrl: 'assets/images/stages/wedding.jpg',
    link: '#'
  },
  {
    title: 'Reception',
    text: 'A grand celebration of love and togetherness to begin a new chapter.',
    imgUrl: 'assets/images/stages/demo.jpg',
    link: '#'
  },
  {
    title: 'Anniversary Celebration',
    text: 'Years of love, laughter, and memories — toast to forever together.',
    imgUrl: 'assets/images/stages/demo.jpg',
    link: '#'
  },
  {
    title: 'Birthday Bash',
    text: 'Lights, cake, and confetti! Make every moment count on your special day.',
    imgUrl: 'assets/images/stages/demo.jpg',
    link: '#'
  },
  {
    title: 'Theme Party',
    text: 'Step into a world of creativity — dress up, dance, and dazzle!',
    imgUrl: 'assets/images/stages/demo.jpg',
    link: '#'
  },
  {
    title: 'Festival Celebration',
    text: 'Colors, culture, and cheer — celebrate the spirit of every festival together.',
    imgUrl: 'assets/images/stages/demo.jpg',
    link: '#'
  },
  {
    title: 'Farewell Night',
    text: 'A bittersweet goodbye filled with laughter, nostalgia, and memories to keep.',
    imgUrl: 'assets/images/stages/demo.jpg',
    link: '#'
  }
];

}
