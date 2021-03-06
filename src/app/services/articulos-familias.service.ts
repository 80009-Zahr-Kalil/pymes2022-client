import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { ArticuloFamilia } from '../models/articulo-familia';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.resourceUrl = "https://pav2.azurewebsites.net/api/ArticulosFamilias/";
    // this.resourceUrl = "http://localhost:8000/articulosFamilias";
  }

  get() {
    return this.httpClient.get<ArticuloFamilia[]>(this.resourceUrl);
  }
}
