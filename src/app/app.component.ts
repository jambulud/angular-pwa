import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basic-ng-pwa';
  update = false;
  dishes: string[] = [];

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.getDishes().subscribe((res: { content: { dish: { name: string } }[] }) => {
      const dishesRetrieved: { dish: { name: string } }[] = res.content;
      this.dishes = dishesRetrieved.map((value: { dish: { name: string } }) => {
        return value.dish.name;
      });
    });
  }
}
