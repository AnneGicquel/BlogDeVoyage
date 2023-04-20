import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LastArticleComponent } from './components/last-article/last-article.component';
import { OtherArticlesComponent } from './components/other-articles/other-articles.component';
import { TravelAndSummaryComponent } from './components/travel-and-summary/travel-and-summary.component';
import { OurAdviceComponent } from './components/our-advice/our-advice.component';
import { ToTravelALittleMoreComponent } from './components/to-travel-alittle-more/to-travel-alittle-more.component';
import { ReturnBtnComponent } from './components/return-btn/return-btn.component';
import { CoverArticleComponent } from './components/cover-article/cover-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesComponent,
    HeaderComponent,
    FooterComponent,
    LastArticleComponent,
    OtherArticlesComponent,
    TravelAndSummaryComponent,
    OurAdviceComponent,
    ToTravelALittleMoreComponent,
    ReturnBtnComponent,
    CoverArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
