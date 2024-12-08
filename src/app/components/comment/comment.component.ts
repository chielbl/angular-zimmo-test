import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-comment",
  standalone: true,
  imports: [],
  templateUrl: "./comment.component.html",
  styleUrl: "./comment.component.scss",
})
export class CommentComponent {
  comment: string = "";
  isValid: boolean = true;

  @Output() onSend = new EventEmitter<string>();

  onChange(e: any) {
    this.comment = e.target.value;
  }

  onClick() {
    if (!this.comment) {
      this.isValid = false;
      return;
    }
    this.onSend.emit(this.comment);
  }
}
