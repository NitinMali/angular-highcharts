import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<div class="row bg-dark">
                  Status ...
               </div>`,
    styles: ['.row { color: #FFF; padding-left:10px }']
})
export class FooterComponent {
    title = 'Footer';
}
