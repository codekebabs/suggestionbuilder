import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  suggestions = [
    {
      name: 'suggestion1',
      data: [
        { item: 'Item1' },
        { item: 'Item1' },
        { item: 'Item1' },
        { item: 'Item1' }
      ]
    },
    {
      name: 'suggestion1',
      data: [
        { item: 'Item1' },
        { item: 'Item1' },
        { item: 'Item1' },
        { item: 'Item1' }
      ]
    },
    {
      name: 'suggestion1',
      data: [
        { item: 'Item1' },
        { item: 'Item1' },
        { item: 'Item1' },
        { item: 'Item1' }
      ]
    }
  ];
}
