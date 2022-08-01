import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { AboutMeComponent } from './components/public/about-me/about-me.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { HeaderComponent } from './components/public/header/header.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { ArticleComponent } from './components/public/blog/article/article.component';
import { ArticleDetailComponent } from './components/public/blog/article-detail/article-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LandingPageComponent,
    AboutMeComponent,
    ContactComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
