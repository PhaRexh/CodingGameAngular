import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  standalone: false,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  @Input() post?: Post;
  @Input() user?: User;
  @Output() close = new EventEmitter<void>(); 

  closeDetail() {
    this.close.emit(); 
  }
}
