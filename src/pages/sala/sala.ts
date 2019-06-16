import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../app/chatServer";
import {deepEqual} from "ionic-angular/util/util";
import {AngularFireDatabase} from "angularfire2/database";


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
  textArea ;
  area = "";
  icon;
  listCuriosidade;
  constructor(public navCtrl: NavController, public navParams: NavParams, public chat: ChatService,private db: AngularFireDatabase) {
    this.sala = navParams.get("sala");
    this.icon = this.sala.icon;
    console.log(this.sala);
    console.log(this.sala);
    chat.addList(this.sala);
    this.listCuriosidade = this.chat.listCuriosidade;
    console.log(db);
  }
  message = {

  };

  ngOnInit(){
    if (deepEqual(this.chat.salas[0],this.sala.opcao)  ){
      this.textArea = this.db.list("/listCinema/");
    }
    if (deepEqual(this.chat.salas[1],this.sala.opcao)){
      this.textArea = this.db.list("/listCuriosidade/");
    }
    if (deepEqual(this.chat.salas[2],this.sala.opcao)){
      this.textArea = this.db.list("/listEsporte/");
    }
  }

  onAddClick() {
    this.chat.addList2(this.sala.nome,this.txtUsuario,this.sala.opcao, this.icon);
    this.txtUsuario = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');

  }
}
