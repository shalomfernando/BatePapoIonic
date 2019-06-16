import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../app/chatServer";
import {AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sala = null;
  icon;
  salas;
  iconUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chat: ChatService,  db:
    AngularFireDatabase) {
    this.sala = [];
    this.icon = chat.icon;
    this.salas = chat.salas;
    console.log(db);
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
    if (this.chat.getList().length > 0 ) {
      for (let sal of this.chat.getList()) {
        if (sal.nome == this.nomeUser && this.chat.getList()[0].opcao == this.opcao ) {
          alert("usuario ja existe");
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
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SalaPage');
  //
  // }
}
