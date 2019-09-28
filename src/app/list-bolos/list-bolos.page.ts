import { Component, OnInit } from '@angular/core';

import { Bolo } from '../models/Bolo.models';
import { BoloService } from '../services/bolo.service';


@Component({
  selector: 'app-list-bolos',
  templateUrl: './list-bolos.page.html',
  styleUrls: ['./list-bolos.page.scss'],
})
export class ListBolosPage implements OnInit {
  public title = 'Nossos Bolos';
  public bolos: Bolo[];
  
  constructor(boloService: BoloService) {
    this.bolos = boloService.getBolos();
  }

  ngOnInit() {
  }

}
