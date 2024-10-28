// src/app/pipes/quantity-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityFormat',
  standalone: true // Define el pipe como standalone
})
export class QuantityFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value < 5 ? `${value} (Baja disponibilidad)` : `${value}`;
  }
}
