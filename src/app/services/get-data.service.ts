import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  //Get Category
  getAllCategories() {
    const url = this.apiUrl + '/categories';
    return this.http.get(url);
  }

  getCategoryById(catId: number) {
    const url = this.apiUrl + '/categories?id=' + catId.toString();
    return this.http.get(url);
  }

  //get Type
  getAllTypes() {
    const url = this.apiUrl + '/types';
    return this.http.get(url);
  }

  getTypesByCategoryId(catId: number) {
    var path: any;
    catId == 0 ? path = '/types' : path = '/types?cat_id=' + catId.toString();
    const url = this.apiUrl + path;
    return this.http.get(url);
  }

  getTypesByFileId(fileId: number) {
    const url = this.apiUrl + '/types?file_id=' + fileId.toString();
    return this.http.get(url);
  }

  getTypesByAlpha(alpha: any) {
    const url = this.apiUrl + '/types?alpha=' + alpha.toString();
    return this.http.get(url);
  }

  getTypesBySoftware(softId: any) {
    const url = this.apiUrl + '/types?soft_id=' + softId.toString();
    return this.http.get(url);
  }

  //get Software Categories
  getAllSoftCategories() {
    const url = this.apiUrl + '/soft-categories';
    return this.http.get(url);
  }

  getSoftCategoryById(catId: number) {
    const url = this.apiUrl + '/soft-categories?id=' + catId.toString();
    return this.http.get(url);
  }

  //get Softwares
  getAllSoftwares() {
    const url = this.apiUrl + '/softwares';
    return this.http.get(url);
  }

  getSoftwareById(id: number) {
    const url = this.apiUrl + '/softwares?id=' + id.toString();
    return this.http.get(url);
  }

  getSoftwaresByCategoryId(catId: number) {
    const url = this.apiUrl + '/softwares?cat_id=' + catId.toString();
    return this.http.get(url);
  }

  getSoftwaresByCompanyId(comId: number) {
    const url = this.apiUrl + '/softwares?com_id=' + comId.toString();
    return this.http.get(url);
  }

  getSoftwaresByAlphabet(alpha: any) {
    const url = this.apiUrl + '/softwares?alpha=' + alpha.toString();
    return this.http.get(url);
  }

  //get Platforms
  getPlatformsBySofwareId(softId: number) {
    const url = this.apiUrl + '/platforms?id=' + softId.toString();
    return this.http.get(url);
  }

  //get Companies
  getAllCompanies() {
    const url = this.apiUrl + '/companies';
    return this.http.get(url);
  }

  //get All Files
  getAllFiles() {
    const url = this.apiUrl + '/files';
    return this.http.get(url);
  }
}
