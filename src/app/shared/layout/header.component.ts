import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<div class="bg-dark p-0 shadow">
    <span class="font-white px-2 clickable" click.delegate='toggleNav()'><i
        class="material-icons my-2">apps</i></span>
    <span class="navbar-brand col-sm-3 col-md-2 mr-0">{{title}}</span>
  </div>`,
})
export class HeaderComponent {
    title = 'Aurelia Highcharts';
}