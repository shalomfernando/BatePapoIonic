import {Injectable} from "@angular/core";
import {deepEqual} from "ionic-angular/util/util";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ChatService {

  constructor (private db: AngularFireDatabase){

  }
  salas = [
    {
      nome: 'Cinema'
    },
    {
      nome: 'Curiosidades'
    },
    {
      nome: 'Esporte'
    }
  ];
  usuarioSala = [];


  listCuriosidade = {
    Cinema: [],
    Curiosidade: [],
    esporte: []
  };

  validaUser(user) {

  }

  icon = [
    {
      nome: 'logo-github',
      descr: 'Git'
    },
    {
      nome: 'ios-happy',
      descr: 'Feliz'
    },
    {
      nome: 'heart',
      descr: 'Coração'
    },
    {
      nome: 'ios-contact-outline',
      descr: 'contato'
    },
    {
      nome: 'ios-game-controller-b-outline',
      descr: 'game'
    }, {
      nome: 'logo-hackernews',
      descr: 'hackernews'
    }, {
      nome: 'ios-home-outline',
      descr: 'home'
    }, {
      nome: 'ios-ionitron-outline',
      descr: 'ionitron'
    }, {
      nome: 'leaf',
      descr: 'leaf'
    }, {
      nome: 'musical-notes',
      descr: 'musical'
    },

  ];

  addList(sala) {
    this.usuarioSala.push(sala);
  }

  getList() {
    return this.usuarioSala;
  }

  chatEsport() {

  }

  chatCinema() {

  }

  addCuriosidadeList(sala) {
    if (sala.estaSala == this.listCuriosidade) {

    }
   // this.listCuriosidade.push(sala);
  }

  chatCuriosidade() {
    return this.listCuriosidade;
  }
  addList2(usuario, message, opcao,icon) {
    if (deepEqual(this.salas[0],opcao) ) {
      //this.listCuriosidade.Cinema.push({data:this.dat,usuario:usuario, message: message,icon:icon});
      this.db.list("/listCinema/").push({data:this.dat,usuario:usuario, message: message,icon:icon})
    }
    if (deepEqual(this.salas[1],opcao)){
      //this.listCuriosidade.Curiosidade.push({data:this.dat,usuario:usuario, message: message,icon:icon});
      this.db.list("/listCuriosidade/").push({data:this.dat,usuario:usuario, message: message,icon:icon})
    }
    if (deepEqual(this.salas[2],opcao)){
      //this.listCuriosidade.esporte.push({data:this.dat,usuario:usuario, message: message,icon:icon});
      this.db.list("/listEsporte/").push({data:this.dat,usuario:usuario, message: message,icon:icon})
    }
  }

  getCinema(){
    //return  this.listCuriosidade.Cinema;
    return this.db.list("/listCinema/")
  }
  getCuriosidade(){
    //return  this.listCuriosidade.Curiosidade;
    return this.db.list("/listCuriosidade/")
  }
  getEsport(){
    //return  this.listCuriosidade.esporte;
    return this.db.list("/listEsporte/")
  }

  dat = this.dataHoje();

  dataHoje() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('/');
  }

}
