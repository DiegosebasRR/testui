import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7084/api/menus';

  constructor(private http: HttpClient) {}

  getMenus(): Observable<any> {
    return this.http.get(this.apiUrl).pipe((res) => res);
  }
  addMenu(menuData: any): Observable<any> {
    return this.http.post(this.apiUrl, menuData);
  }
  updateMenu(id: number, updatedMenuData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedMenuData);
  }
  deleteMenu(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
