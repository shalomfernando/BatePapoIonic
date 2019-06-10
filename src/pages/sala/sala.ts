import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  area = "" ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.sala = navParams.get("sala");
  console.log(this.sala);
    console.log(this.sala.nome);
    console.log(this.sala.nome);
    console.log(this.sala.nome);
    // this.textArea = this.textArea;
  }

  onAddClick(){
    this.textArea.push({txt : this.txtUsuario, nome: this.sala.nome});
    this.area= this.area + this.sala.nome +": " + this.txtUsuario + "\n"
    console.log(this.area);
    this.txtUsuario = "";
    // this.navCtrl.push("SalaPage",this.textArea);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');
  }
  logForm(){

  }

}
