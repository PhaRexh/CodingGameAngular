import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { UserService } from '../../services/user/user.service';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  standalone: false,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  selectedPost?: Post;
  selectedUser?: User;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUser(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  getUserInitials(userId: number): string {
    const user = this.getUser(userId);
    if (!user || !user.name) return '';

    const names = user.name.trim().split(" ");

    if (names.length >= 2) {
      return `${names[0][0].toUpperCase()}${names[1][0].toUpperCase()}`;
    } else {
      return names[0][0].toUpperCase();
    }
  }

  showPostDetail(post: Post) {
    console.log("Post cliccato:", post);
    this.selectedPost = post;
    this.selectedUser = this.getUser(post.userId);
  
    console.log("Post selezionato:", this.selectedPost);
  }
  
  closeDetail() {
    this.selectedPost = undefined;
    this.selectedUser = undefined;
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}