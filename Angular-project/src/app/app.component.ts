import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project';
  isActive: boolean = true;

  user: { name: string; password: string } = {
    name: '',
    password: ''
  };

  dataSubmit() {
    console.log(this.user);
  }
}
