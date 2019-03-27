import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `<div class="row justify-content-end bg-grey">
    <div class="hor-menu py-1">
      <ul class="list-inline">
        <li class="list-inline-item" *ngFor="let menu of menus; let i = index">
          <a>
            <span data-feather="home"></span>
            {{menu.title}} <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>`,
})
export class MenuComponent {
    menus = [
        { title: 'Line Graph' },
        { title: 'Column Graph' },
        { title: 'Bar Graph' },
        { title: 'Pie Graph' }
    ];
}