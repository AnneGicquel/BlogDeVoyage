import { Component, Input } from '@angular/core';
import { ILocationResponse } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit(){
    console.log('adress')
  }

  @Input() temp!: ILocationResponse;

}
