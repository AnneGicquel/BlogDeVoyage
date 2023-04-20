import { Component, Input } from '@angular/core';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-our-advice',
  templateUrl: './our-advice.component.html',
  styleUrls: ['./our-advice.component.css']
})
export class OurAdviceComponent {

  // data: IarticlesData[]= ARTICLESDATA;

  @Input() goodPoints!:string[];
  @Input() badPoints!:string[];
  @Input() advices!:string[];

  ourAdvices!:IarticlesData[];

}
