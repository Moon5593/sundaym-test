import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  sidelist_items = [
    {
      title: 'Dashboard',
      url: '/app/home',
      icon: 'speedometer-outline'
    },
    {
      title: 'Your Matches',
      url: '/app/match',
      icon: 'people-outline'
    },
    {
      title: 'Your Deals',
      url: '/app/deals',
      icon: 'pricetags-outline'
    },
    {
      title: 'Investment Pipeline',
      url: '/app/investment',
      icon: 'cash-outline'
    },
    {
      title: 'Co-investor Matching',
      url: '/app/invest',
      icon: 'cash-outline'
    },
    {
      title: 'Refer & Earn',
      url: '/app/refer',
      icon: 'aperture-outline'
    },
    {
      title: 'About NeonVest',
      url: '/app/about',
      icon: 'information-circle-outline'
    }
  ];

  constructor() {}

  ngOnInit(){

  }
}
