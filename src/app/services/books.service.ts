import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book/book.module'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8000/books';

  constructor(private http: HttpClient) { }

  // Obtener todos los libros
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // Obtener un libro por su ID
  getBookById(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  // Crear un nuevo libro
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  // Actualizar un libro existente
  updateBook(id: number, book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Book>(url, book);
  }

  // Eliminar un libro por su ID
  deleteBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Book>(url);
  }
}
