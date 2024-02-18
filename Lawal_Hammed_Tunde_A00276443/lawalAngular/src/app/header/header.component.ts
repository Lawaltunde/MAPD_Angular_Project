import { Component } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstNav = 'About';
  secondNav = 'Hobbies';
  thirdNav = 'Portfolio';
  display = false;
  searchText: string = 'You could leave either your Opinion or Advice here!!';
  

  onClick(){
    this.display = true;
  }
}
