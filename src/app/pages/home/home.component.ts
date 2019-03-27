import { Component } from "@angular/core";

import * as Highcharts from "highcharts";

var JSON;

Highcharts.setOptions({
  title: {
    style: {
      color: "orange"
    }
  }
});

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  sideBarIsOpened = false;

  toggleSideNav($event) {
    this.sideBarIsOpened = $event;
    this.updateInputChart();
  }

  // For all demos:
  Highcharts = Highcharts;

  // Demo #1
  optFromInputString = {
    subtitle: { text: "Highcharts chart" },
    series: [
      {
        type: "line",
        data: [11, 2, 3]
      },
      {
        data: [5, 6, 7]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal"
            }
          }
        }
      ]
    }
  };

  optFromInput = this.optFromInputString;
  updateFromInput = false;

  updateInputChart = function() {
    this.optFromInput = this.optFromInputString;
  };

  seriesTypes = {
    line: "column",
    column: "scatter",
    scatter: "spline",
    spline: "line"
  };

  toggleSeriesType = function(index = 0) {
    this.optFromInput.series[index].type = this.seriesTypes[
      this.optFromInput.series[index].type
    ];
    // nested change - must trigger update
    this.updateFromInput = true;
  };
}
