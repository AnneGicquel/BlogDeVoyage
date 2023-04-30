import { Component, Input } from '@angular/core';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-travel-and-summary',
  templateUrl: './travel-and-summary.component.html',
  styleUrls: ['./travel-and-summary.component.css']
})
export class TravelAndSummaryComponent {

  data: IarticlesData[] = ARTICLESDATA;

  @Input() title!: string;
  @Input() text!: string;

}
