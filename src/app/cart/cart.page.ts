import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

import { BoloService } from '../services/bolo.service';
import { Bolo } from '../models/Bolo.models';
import { DadosUser } from '../models/DadosUser.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public bolo: Bolo;
  public endereco: DadosUser[] = [];

  constructor(
    private route: ActivatedRoute, 
    private boloService: BoloService, 
    private loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bolo = this.boloService.getBoloById(params.id);
    });
  }

  async handlePedido(){
    const loading = await this.loadingController.create({
      message: 'Realizando pedido...',
      duration: 3000
    });
    await loading.present();
    await loading.onDidDismiss();

    const alert = await this.alertController.create({
      header: 'Pedido Confirmado!',
      message: 'Esta chegando',
      buttons: ['OK']
    });
    await alert.present();
  }

}
