import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EchipeService {

  private httpClient: HttpClient;
  private baseUrl: string = 'https://recrutare.compexin.ro/api/web/echiperazvan/';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  list() { 
    return this.httpClient.get(this.baseUrl);
  }

  persist(entity: any) {
    let r;
    if ('ID_ECHIPA' in entity) {
      r = this.httpClient.put(this.baseUrl, entity);
    } else { 
      r = this.httpClient.post(this.baseUrl, entity);
    }
    return r;
  }

  delete(entity: any) {
    return this.httpClient.delete(this.baseUrl, {body: entity});
  }

  restore(entity: any) {
    return this.httpClient.post(this.baseUrl + 'restore', entity);
  }

}
