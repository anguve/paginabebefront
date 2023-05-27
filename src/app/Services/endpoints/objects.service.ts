import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  private URL = environment.apiUrl;
  constructor(private http: HttpClient) {
    //code future
  }

  public objects(ObjParams: any): Observable<any> {
    return this.http.post<any>(this.URL + 'objects', {});
  }
}
