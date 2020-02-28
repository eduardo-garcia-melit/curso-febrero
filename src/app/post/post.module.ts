import { NgModule } from '@angular/core';
import { PostComponent } from './post.component'
import { PostCreateComponent } from './post-create.component';
import { PostRouterModule } from './post-router.module';
import { SharedModule } from '../shared/shared.module';
import { PostUpdateComponent } from './post-update.component';


@NgModule({
  declarations: [
    PostComponent,
    PostCreateComponent,
    PostUpdateComponent
  ],
  imports: [
    PostRouterModule,
    SharedModule
  ]
})
export class PostModule { }
