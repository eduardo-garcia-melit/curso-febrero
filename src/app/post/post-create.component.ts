import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = new Post(null, null, null, null);
  }

  save() {
    this.postService.createPost(this.post).subscribe(
      (response: HttpResponse<Post>) => {
        const newPost = response.body;
        alert(`Creado nuevo post con ID ${newPost.id}, \ntítulo ${newPost.title} \ny cuerpo ${newPost.body}`);
        this.router.navigate(['/posts']);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }

}
