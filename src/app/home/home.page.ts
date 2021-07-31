import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, Decimation, Filler, Legend, LinearScale, Title, Tooltip } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  sup: boolean = true;
  exp: boolean = false;

  constructor() {
    Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, LinearScale);
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  ionViewDidLeave(){
    this.bars.destroy();
  }

  createBarChart(){
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [1.3, 1.8, 1.3, 2.9, 2, 3.5, 3.5, 3, 0, 0, 0, 0],
          backgroundColor: '#E5E7EB',
          borderColor: '#E5E7EB',
          borderWidth: 1,
          hoverBackgroundColor: 'black'
        }
      ]
      },
      options: {
        plugins: {
          tooltip:{
            callbacks:{
              label: function(tooltipItem){
                return "Earned "+tooltipItem.dataset['data'][tooltipItem.dataIndex]*1000;
              },
              title: function(tooltipItem){
                return "Sessions 10";
              }
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            display: false,
            suggestedMax: 9,
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  ngOnInit(){}

  onFilterUpdate(event: Event){
    if((event as CustomEvent).detail.value === 'm'){
      this.sup = true;
      this.exp = false;
    }else if((event as CustomEvent).detail.value === 'e'){
      this.exp = true;
      this.sup = false;
    }
  }

}
