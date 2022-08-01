import { ArticleDetailComponent } from './components/public/blog/article-detail/article-detail.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { AboutMeComponent } from './components/public/about-me/about-me.component';
import { PublicComponent } from './components/public/public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'about-me', component: AboutMeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/details', component: ArticleDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
