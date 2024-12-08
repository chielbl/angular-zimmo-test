import { Component } from "@angular/core";
// import { RouterOutlet } from "@angular/router";
// import { BannerComponent } from './components/banner/banner.component';
// import { RatingComponent } from './components/rating/rating.component';
import { CommonModule } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { InfoComponent } from "./components/info/info.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    // RouterOutlet,
    FeedbackComponent,
    InfoComponent,
    CardComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "zimmo-test";
}
