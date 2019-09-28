import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoloService } from '../services/bolo.service';
import { Bolo } from '../models/Bolo.models';

@Component({
  selector: 'app-bolo-details',
  templateUrl: './bolo-details.page.html',
  styleUrls: ['./bolo-details.page.scss'],
})
export class BoloDetailsPage implements OnInit {
  public bolo: Bolo;

  constructor(
    private route: ActivatedRoute, 
    private boloService: BoloService, 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bolo = this.boloService.getBoloById(params.id);
    });
  }
}
