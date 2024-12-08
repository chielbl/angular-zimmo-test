import { Component } from "@angular/core";
import { FeedbackService } from "../../services/feedback.service";
import { RatingComponent } from "../rating/rating.component";
import { Rating } from "../rating/rating.model";
import { Feedback } from "./feedback.model";

@Component({
  selector: "app-feedback",
  standalone: true,
  imports: [RatingComponent],
  templateUrl: "./feedback.component.html",
  styleUrl: "./feedback.component.scss",
})
export class FeedbackComponent {
  feedback: Feedback = {};
  rating?: Rating;
  isValid: boolean = false;
  commentInValid: boolean = false;

  constructor(private feedbackService: FeedbackService) {}

  setRating(rating: Rating) {
    console.log("rating", rating);
    this.feedback.rating = rating;
    console.log("feedback", this.feedback);
  }

  commentOnChange(e: any) {
    console.log("comment", e.target.value);
    this.feedback.comment = e.target.value;
    console.log("feedback", this.feedback);
  }

  onSubmit() {
    if (!this.feedback.comment || !this.feedback.rating) {
      this.commentInValid = !this.feedback.comment;
      this.isValid = false;
      return;
    }
    this.isValid = true;
    // this.feedbackService.submit(this.feedback);
    this.feedbackService.submit(this.feedback).subscribe({
      next: (response) => {
        console.log("Response:", response);
        // Success
      },
      error: (error) => {
        console.error("Error:", error);
      },
    });
    return;
  }
}
