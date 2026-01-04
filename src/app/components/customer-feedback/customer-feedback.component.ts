import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss']
})
export class CustomerFeedbackComponent {
  reviews = [
    {
      name: 'Sarah Johnson',
      review: 'Absolutely loved the designs! Perfect for our corporate event and got so many compliments.',
      rating: 5,
      imgUrl: 'assets/images/customers/sarah.jpg'
    },
    {
      name: 'David Lee',
      review: 'Great quality and timely delivery. Will definitely order again!',
      rating: 4,
      imgUrl: 'assets/images/customers/david.jpg'
    },
    {
      name: 'Emily Smith',
      review: 'Unique and elegant! Exactly what I was looking for.',
      rating: 5,
      imgUrl: 'assets/images/customers/emily.jpg'
    },
    {
      name: 'Michael Brown',
      review: 'Stylish and affordable — made my wedding décor look perfect!',
      rating: 5,
      imgUrl: 'assets/images/customers/michael.jpg'
    },
{
      name: 'Sarah Johnson',
      review: 'Absolutely loved the designs! Perfect for our corporate event and got so many compliments.',
      rating: 5,
      imgUrl: 'assets/images/customers/sarah.jpg'
    },
    {
      name: 'David Lee',
      review: 'Great quality and timely delivery. Will definitely order again!',
      rating: 4,
      imgUrl: 'assets/images/customers/david.jpg'
    },
    {
      name: 'Emily Smith',
      review: 'Unique and elegant! Exactly what I was looking for.',
      rating: 5,
      imgUrl: 'assets/images/customers/emily.jpg'
    },
    {
      name: 'Michael Brown',
      review: 'Stylish and affordable — made my wedding décor look perfect!',
      rating: 5,
      imgUrl: 'assets/images/customers/michael.jpg'
    }
  ];

  // Helper: returns the next 3 reviews per carousel slide
  getReviewsForSlide(index: number) {
    const groupSize = 3;
    const start = index * groupSize;
    return this.reviews.slice(start, start + groupSize);
  }

  // Number of slides based on group size
  get numberOfSlides() {
    return Math.ceil(this.reviews.length / 3);
  }
}
