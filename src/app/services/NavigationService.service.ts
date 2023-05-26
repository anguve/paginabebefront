import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationServiceService {
  private mostrarCochesSubject = new BehaviorSubject<boolean>(false);
  mostrarCoches$ = this.mostrarCochesSubject.asObservable();

  mostrarCoches() {
    this.mostrarCochesSubject.next(true);
  }

  ocultarCoches() {
    this.mostrarCochesSubject.next(false);
  }
}
