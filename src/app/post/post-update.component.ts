import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostUpdateComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private router: Router, protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idEnRuta = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.data.subscribe(({ post }) => {
      this.post = post;
    });
  }

  save() {
    this.postService.updatePost(this.post).subscribe(
      (response: HttpResponse<Post>) => {
        const newPost = response.body;
        alert(`Actualizado post con ID ${newPost.id}, \ntítulo ${newPost.title} \ny cuerpo ${newPost.body}`);
        this.router.navigate(['/posts']);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }

}
