import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post.model';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  page = 1;
  totalItems: number;
  itemsPerPage = 10;
  isLoading = false;
  idToSearch = 0;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    // esta API no espera un elemento de paginación sino start y limit de la query
    // si no es la primera página, para simular esto, sumamos el total de objetos (-1 para no saltarnos elementos)

    if (page != 1) page *= (this.itemsPerPage);
    this.isLoading = true;
    this.postService.getPostsByPage(page, this.itemsPerPage).subscribe(
      (response: HttpResponse<Post[]>) => {
        this.isLoading = false;
        if (response.body) this.paginate(response.body, response.headers);
        else this.posts = null;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.posts = null;
      }
    );
  }

  createNew() {
    this.router.navigate(['/posts/create']);
  }

  buscarPost() {
    this.postService.getPostById(this.idToSearch).subscribe(
      (result: HttpResponse<Post>) => {
        const postFound = result.body;
        alert(`Post ${postFound.id} encontrado`);
      },
      (error: HttpErrorResponse) => {
        alert("Post no encontrado");
      }
    );
  }

  protected paginate(data: Post[], headers: HttpHeaders) {
    this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
    this.posts = data;
  }

}
