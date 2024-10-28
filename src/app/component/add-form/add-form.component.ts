import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../services/books.service';
import { Book } from '../../model/book/book.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    quantity: 0
  };

  constructor(private bookService: BookService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.bookService.createBook(this.book).subscribe({
        next: response => {
          alert('Libro agregado correctamente.'); // Alerta de éxito
          console.log('Libro agregado:', response);
          form.resetForm(); // Resetea el formulario después de enviar
        },
        error: error => {
          console.error('Error al agregar el libro:', error);
          alert('Error al agregar el libro: ' + error.error.detail); // Muestra el mensaje de error
        }
      });
    }
  }
}
