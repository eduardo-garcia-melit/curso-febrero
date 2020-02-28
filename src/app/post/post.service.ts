import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private resourceUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(`${this.resourceUrl}`,  { observe: 'response' }).pipe(catchError(this.handleError));
  }

  getPostById(id: number): Observable<HttpResponse<Post>> {
    return this.http.get<Post>(`${this.resourceUrl}/${id}`, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  getPostsByPage(start: number, limit: number): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(`${this.resourceUrl}?_start=${start}&_limit=${limit}`, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  createPost(post: Post): Observable<HttpResponse<Post>> {
    return this.http.post<Post>(`${this.resourceUrl}`, post, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  updatePost(post: Post): Observable<HttpResponse<Post>> {
    if (!post.id) return throwError('Post sin id');
    return this.http.put<Post>(`${this.resourceUrl}/${post.id}`, post, { observe: 'response' }).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) console.error('Error en el front');
    else console.error('Error en el back');
    return throwError(error);
  }
}
