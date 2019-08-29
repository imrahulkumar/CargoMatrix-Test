import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:3000/constacts';
  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.baseUrl)
  }

  getContactbyIds(id) {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  deleteContact(id) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  postContacts(data) {
    return this.http.post(`${this.baseUrl}`, data)
  }

  updateConatcts(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
