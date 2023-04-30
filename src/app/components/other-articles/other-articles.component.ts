import { Component } from '@angular/core';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-other-articles',
  templateUrl: './other-articles.component.html',
  styleUrls: ['./other-articles.component.css']
})
export class OtherArticlesComponent {
  
  data: IarticlesData[]= ARTICLESDATA;

}
