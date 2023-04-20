import { Component } from '@angular/core';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';


@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  data: IarticlesData[]= ARTICLESDATA;

  //  pour ne pas faire une boucle pour trouver le .isOnHomePage !!!
  // data?: IarticlesData = ARTICLESDATA.find(article=>article.isOnHomePage)
  

}
