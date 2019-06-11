import {Injectable} from "@angular/core";
@Injectable()
export class ChatService {
  salas = [
    {
      nome:'Cinema'
    },
    {
      nome:'Curiosidades'
    },
    {
      nome:'Esporte'
    }
  ]
  usuarioSala = [];
  validaUser(user){

  }

  icon = [
    {
      nome:'logo-github',
      descr : 'Git'
    },
    {
      nome:'ios-happy',
      descr : 'Feliz'
    },
    {
      nome:'heart',
      descr : 'Coração'
    },
    {
      nome: 'ios-contact-outline',
      descr: 'contato'
    },
    {
      nome: 'ios-game-controller-b-outline',
      descr: 'game'
    },{
      nome: 'logo-hackernews',
      descr: 'hackernews'
    },{
      nome: 'ios-home-outline',
      descr: 'home'
    },{
      nome: 'ios-ionitron-outline',
      descr: 'ionitron'
    },{
      nome: 'leaf',
      descr: 'leaf'
    },{
      nome: 'musical-notes',
      descr: 'musical'
    },

  ];
  addList(sala){
    this.usuarioSala.push(sala);
  }
  getList(){
    return this.usuarioSala;
  }
  chatEsport(){

  }
  chatCinema(){

  }
  chatCuriosidade(){

  }

}
