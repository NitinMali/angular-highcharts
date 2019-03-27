import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, MenuComponent } from './layout';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeaderComponent, FooterComponent, MenuComponent ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule {
}
