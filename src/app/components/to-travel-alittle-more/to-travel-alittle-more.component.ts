import { Component, Input } from '@angular/core';
import { IarticlesData, IsecondaryImages } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-to-travel-alittle-more',
  templateUrl: './to-travel-alittle-more.component.html',
  styleUrls: ['./to-travel-alittle-more.component.css']
})
export class ToTravelALittleMoreComponent {

  travelArticle!: IarticlesData;

  @Input() secondaryImages!: IsecondaryImages[];
}
