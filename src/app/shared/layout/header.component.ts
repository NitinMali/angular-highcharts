import { Component, OnInit , Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  template: `<div class="row">
                <div class="col-12 bg-dark p-0 shadow">
                  <span class="font-white px-2 clickable" (click)='toggleSideBar()'>
                    <i class="material-icons my-2">apps</i>
                  </span>
                  <span class="navbar-brand col-sm-3 col-md-2 mr-0">{{title}}</span>
                </div>
              </div>`,
  styles: [".row { color: #FFF; }", ".clickable {cursor: pointer}"]
})
export class HeaderComponent implements OnInit {
  title = "Angular 7 Highcharts";
  @Output() messageEvent = new EventEmitter<boolean>();
  sideBarIsOpened = false;

  ngOnInit() {
    this.sideBarIsOpened = true;
  }

  toggleSideBar(shouldOpen: boolean) {
    this.sideBarIsOpened = !this.sideBarIsOpened;
    this.messageEvent.emit(this.sideBarIsOpened)
  }
}
