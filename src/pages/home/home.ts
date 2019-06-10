import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sala;
  salas;
  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.sala = {};
    this.salas = [
      {
        nome:'cinema'
      },
      {
        nome:'curiosidades'
      },
      {
        nome:'esporte'
      }
    ]
  }
  opcao;
  nomeUser;





  onItemClick (){
    // console.log("item-click", this.nomeUser,this.opcao, this.nomeUser);
    this.sala = {
      nome:this.nomeUser,
      opcao:this.opcao,
    };
    // console.log("SalaPage", this.sala);

    this.navCtrl.push("SalaPage",{sala : this.sala});
  }
}
