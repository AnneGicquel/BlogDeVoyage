import { Component } from '@angular/core';
import { ARTICLESDATA, IarticlesData } from 'src/app/mocks/articlesData';

@Component({
  selector: 'app-other-articles',
  templateUrl: './other-articles.component.html',
  styleUrls: ['./other-articles.component.css']
})
export class OtherArticlesComponent {
  
  data: IarticlesData[]= ARTICLESDATA;


  /*
  selectedCountry! : IarticlesData;

  willBeInHomePage(){

    // Retrouver le pays à true et le passer à false
    let countryOnHomePage = this.data.filter(dataCountry => dataCountry.isOnHomePage);
    // verif
    console.log(countryOnHomePage)
    let countryTrueToFalse = countryOnHomePage[0].isOnHomePage
    countryTrueToFalse = false;
    // verif 
    console.log(countryTrueToFalse)


    // Puis passer le pays selectionné à true
    this.selectedCountry.isOnHomePage = true;
    
  }*/

}
