import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  console.log('Interceptor llamado para la solicitud:', req); // Este log te ayudará a verificar que el interceptor se está ejecutando.

  return next(req).pipe(
    catchError((error) => {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud: ' + (error.error?.detail || 'Ocurrió un error inesperado.'));
      throw error; // Lanza el error para que el interceptor lo capture
    })
  );
};
