import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TattoMaker } from '../modal/tattoMaker.model';

@Injectable({
  providedIn: 'root',
})
export class TattoMakersService {
  constructor() {}
  getTatuadores(): Observable<TattoMaker[]> {
    return of([
      new TattoMaker(
        1,
        'Tatuador1',
        'Descripcion del tatuador1',
        'urlImagen',
        '99887766',
        true
      ),
      new TattoMaker(
        2,
        'Tatuador2',
        'Descripcion del tatuador2',
        'urlImagen',
        '99113366',
        true
      ),
      new TattoMaker(
        3,
        'Tatuador3',
        'Descripcion del tatuador3',
        'urlImagen',
        '99113388',
        true
      ),
    ]);
  }
}
