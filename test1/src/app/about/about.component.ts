import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nameSearch: string='';

  productArr=[
    {
      sno:1,
      name:'Mobile',
      price:'70000 $',
      avability:'Available'
    },
    {
      sno:2,
      name:'TV',
      price:'16000 $',
      avability:'Not Available'
    },
    {
      sno:3,
      name:'Laptop',
      price:'40000 $',
      avability:'Available'
    },
    {
      sno:4,
      name:'Mobile (Samsung)',
      price:'70000 $',
      avability:'Available'
    },
    {
      sno:5,
      name:'Washing Masine',
      price:'70000 $',
      avability:'Available'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
