import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  greeting: string = 'Good morning!';

  ngOnInit(): void {
    this.updateGreeting();
  }

  private updateGreeting(): void {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
      this.greeting = 'Good afternoon!';
    } else {
      this.greeting = 'Good Evening!';
    }
  }
}