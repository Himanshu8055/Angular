import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Navigation{
  href: string,
  name: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular-project';

  nav:Navigation [] = [
    {
      href: '/project1',
      name: 'Project 1 - Calculator'
    },
    {
      href: '/project2',
      name: 'Project 2 - Weather'
    },
  ]

  isVisible:boolean = false;




  setVisible(){
    if (this.isVisible) {
      this.isVisible = !this.isVisible;
    }
    else{
      this.isVisible = true;
    }
  }
}
