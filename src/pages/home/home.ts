import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../app/chatServer";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sala = null;
  icon;
  salas;
  iconUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chat: ChatService) {
    this.sala = [];
    this.icon = chat.icon;
    this.salas = chat.salas;
  }

  opcao;
  nomeUser;


  user = [];


  onItemClick() {
    console.log(this.chat.getList());
    if (this.chat.getList().length == 0) {
      this.sala = ({
        nome: this.nomeUser,
        opcao: this.opcao,
        icon: this.iconUser
      });
    }
    if (this.chat.getList().length > 0) {
      for (let sal of this.chat.getList()) {
        if (sal.nome == this.nomeUser) {
          alert("usuario ja existe")
          return 0;
        }
      }
      this.sala = ({
        nome: this.nomeUser,
        opcao: this.opcao,
        icon: this.iconUser
      });
    }
    console.log(this.sala);
    this.navCtrl.push("SalaPage", {sala: this.sala});
  }
}
