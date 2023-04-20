import { Component, Input } from '@angular/core';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-to-travel-alittle-more',
  templateUrl: './to-travel-alittle-more.component.html',
  styleUrls: ['./to-travel-alittle-more.component.css']
})
export class ToTravelALittleMoreComponent {

  // data: IarticlesData[]= ARTICLESDATA;

  travelArticle!:IarticlesData;

  @Input()secondaryImages!: IarticlesData[];

}
