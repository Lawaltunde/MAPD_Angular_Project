import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  getCode = false;
  age: number = 0;
  holder = "You are " + this.age + " years old!";
  

  getYourAge(event: any){
    
      this.age = 2024 - event.target.value;
      this.holder = "You are " + this.age + " years old!";

  }

  wordOfTheDay(){
    this.getCode = true;
  }

  wordOfTheDay2(){
    this.getCode = false;
  }

}
