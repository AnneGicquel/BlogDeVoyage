import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  data: IarticlesData[]= ARTICLESDATA;
  travelArticle: any;

 
  ngOnInit(){
    this.getTravelId()
  }


  /* Récupérer l'ID -> ajouter variable de route à app-routing.module.ts
  { path: 'articles/:id', component: ArticlesComponent }
  et dans le html:[routerLink]="['/articles', data.id]"*/

  constructor(public activatedRoute:ActivatedRoute) { }

  getTravelId(){

    // récupérer l'id avec un type number
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // verif
    console.log('ID:', id);
    
    // correspondance entre id reçu et le mock pour ouverture de l'article associé
    const travelArticle = this.data.find((travel:IarticlesData)=>travel.id === id)
    // verif
    console.log('article à sortir', travelArticle)

    this.travelArticle = travelArticle 
    
  }

  
  
  
}

  
  

