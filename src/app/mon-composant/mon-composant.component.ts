/* mon-composant.component.ts */

import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent {
  name: string = "Bob";
  imageSrc: string = "https://via.placeholder.com/350x150";

  sayHello(): void {
    alert("Bonjour " + this.name + "!");
  }
}