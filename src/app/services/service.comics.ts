import { Comic } from '../models/comic';
import { Injectable } from '@angular/core';
export class ServiceComics {
  @Injectable()
  getComics(): Promise<Comic[]> {
    let path = './assets/comics.json';
    return fetch(path)
      .then((response) => response.json())
      .then((data: any[]) => {
        let comics = [];
        for (let element of data) {
          let comic: Comic = new Comic(element.nombre, element.imagen, element.descripcion);
          comics.push(comic);
        }
        return comics;
      });
  }

  async getComicsAsync(): Promise<Comic[]> {
    let path = './assets/comics.json';
    let response = await fetch(path);
    let data = await response.json();
    let comics: Comic[] = [];
    for (let element of data) {
      let comic: Comic = new Comic(element.nombre, element.imagen, element.descripcion);
      comics.push(comic);
    }
    return comics;
  }
}
