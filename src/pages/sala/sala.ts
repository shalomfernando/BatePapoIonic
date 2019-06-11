import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../app/chatServer";

// import {text} from "@angular/core/src/render3/instructions";

/**
 * Generated class for the SalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
  sala;
  txtUsuario;
  textArea = [];
  area = "";
  icon;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chat: ChatService) {
    this.sala = navParams.get("sala");
    this.icon = this.sala.icon;
    console.log(this.sala);
    console.log(this.sala);
    chat.addList(this.sala)

  }

  onAddClick() {
    this.textArea.push({txt: this.txtUsuario, nome: this.sala.nome, sala: this.sala.opcao});
    console.log(this.area);
    this.txtUsuario = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');
  }

  logForm() {

  }

}
