import { Component, Input } from '@angular/core';
import { IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-cover-article',
  templateUrl: './cover-article.component.html',
  styleUrls: ['./cover-article.component.css']
})
export class CoverArticleComponent {

  //  infos entre Parent (page Article) et enfant (composant)
  @Input() travelArticle!: IarticlesData

}
