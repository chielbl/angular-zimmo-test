import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { RatingComponent } from './components/rating/rating.component';
import { InfoComponent } from './components/info/info.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CommentComponent } from './components/comment/comment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BannerComponent,
    RatingComponent,
    InfoComponent,
    CardComponent,
    CommentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zimmo-test';
  rating: any = null;
  comment: string = '';

  setRating(rating: any) {
    this.rating = rating;
  }

  setComment(comment: string) {
    this.comment = comment;
  }
}
