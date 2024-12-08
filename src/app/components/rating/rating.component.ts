import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output,Input } from "@angular/core";
import { Rating } from "./rating.model";

@Component({
  selector: "app-rating",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./rating.component.html",
  styleUrl: "./rating.component.scss",
})
export class RatingComponent {
  ratings: Rating[] = [
    {
      score: "bad",
      emoji: "frown",
    },
    {
      score: "neutral",
      emoji: "neutral",
    },
    {
      score: "good",
      emoji: "smile",
    },
    {
      score: "perfect",
      emoji: "laughing",
    },
    {
      score: "excellent",
      emoji: "heart-eyes",
    },
  ];
  selectedEmoji: string = "";

  @Input() rating?: Rating;
  @Output() selectedRating = new EventEmitter<any>();

  ngOnInit() {
    this.selectedEmoji = this.rating?.emoji || "";
    console.log("rating", this.rating);
  }

  onSelect(rating: Rating) {
    this.selectedEmoji = rating.emoji;
    this.selectedRating.emit(rating);
  }
}
