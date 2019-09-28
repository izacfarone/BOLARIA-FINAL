import { Injectable } from '@angular/core';
import { Bolo } from '../models/Bolo.models';

@Injectable({
  providedIn: 'root'
})
export class BoloService {

  private bolos: Bolo[] = [
    {
      id: 1,
      nome: 'Beterraba',
      descricao: 'Bolo de Beterraba com cobertura de chocolate.',
      valor: 12,
      imagem: 'https://truffle-assets.imgix.net/def87c87-bolo-de-beterraba-l-thumb.jpg',
    },
    {
      id: 2,
      nome: 'Tapioca cremosa',
      descricao: 'Bolo de tapioca super cremoso suculento.',
      valor: 10,
      imagem: 'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1816-56f4670346f767371bb8df146110ff1a.jpg',
    },
    {
      id: 3,
      nome: 'Amendoim',
      descricao: 'Bolo de Amendoim com cobertura.',
      valor: 10,
      imagem: 'https://www.radioaltouruguai.com.br/wp-content/uploads/2018/08/14_47_01_801_011.jpg',
    },
    {
      id: 4,
      nome: 'Pao de Queijo',
      descricao: 'Bolo de pao de queijo super saboroso, o sabor mineiro.',
      valor: 15,
      imagem: 'https://imirante.com/imagens/2019/03/27/1553728877-485735379-810x471.jpg',
    },
    {
      id: 5,
      nome: 'Aveia com Banana',
      descricao: 'Bolo super leve de aveia com banana.',
      valor: 20,
      imagem: 'https://i.ytimg.com/vi/BALwvmvzFls/maxresdefault.jpg',
    },
    {
      id: 5,
      nome: 'Vulcão leite ninho',
      descricao: 'Bolo de vucão uma exploxão de ninho de dar agua na boca.',
      valor: 25,
      imagem: 'https://conteudo.imguol.com.br/1e/2017/08/28/humm-minuto---bolo-avalanche-de-leite-ninho---imagem-home-1503936125450_v2_1920x1080.jpg',
    },
  ];

  constructor() { }

  getBolos(): Bolo[] {
    return this.bolos;
  }

  getBoloById(id: number): Bolo{
    const boloSelected = this.bolos.find(bolo => {
      return bolo.id == id;
    })

    return boloSelected;
  }
}
