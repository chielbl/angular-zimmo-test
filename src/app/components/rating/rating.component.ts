import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  ratings: any = [
    {
      rating: 'bad',
      emoji: 'frown',
    },
    {
      rating: 'neutral',
      emoji: 'neutral',
    },
    {
      rating: 'good',
      emoji: 'smile',
    },
    {
      rating: 'perfect',
      emoji: 'laughing',
    },
    {
      rating: 'excellent',
      emoji: 'heart-eyes',
    },
  ];
  selectedEmoji: any = null;

  @Output() selectedRating = new EventEmitter<any>();

  onSelect(rating: any) {
    this.selectedEmoji = rating.emoji;
    this.selectedRating.emit(rating);
  }
}
