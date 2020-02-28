import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostComponent } from './post.component';
import { PostCreateComponent } from './post-create.component';
import { Post } from '../models/post.model';
import { PostService } from './post.service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { PostUpdateComponent } from './post-update.component';

@Injectable({ providedIn: 'root' })
export class PostResolve implements Resolve<Post> {
  constructor(private service: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.getPostById(id).pipe(
        filter((response: HttpResponse<Post>) => response.ok),
        map((post: HttpResponse<Post>) => post.body)
      );
    }
    return of(new Post(null, null, null, null));
  }
}

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'update/:id',
    component: PostUpdateComponent,
    resolve: {
      post: PostResolve
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PostRouterModule { }
