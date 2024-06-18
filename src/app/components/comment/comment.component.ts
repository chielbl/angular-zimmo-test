import { Component, EventEmitter, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment: string = '';
  isValid: boolean = true;

  @Output() onSend = new EventEmitter<string>();

  onChange(c: any) {
    this.comment = c.target.value;
  }

  onClick() {
    if (!this.comment) {
      this.isValid = false;
      return;
    }
    this.onSend.emit(this.comment);
  }
}
