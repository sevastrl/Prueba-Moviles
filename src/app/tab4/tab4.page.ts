import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  a: number;
  b: number;
  c: number;
  resultado: string;

  calcularRaices() {
    const discriminante = Math.pow(this.b, 2) - 4 * this.a * this.c;

    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.resultado = `Raíces reales: x1 = ${raiz1}, x2 = ${raiz2}`;
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a);
      this.resultado = `Raíz única: x = ${raiz}`;
    } else {
      const real = -this.b / (2 * this.a);
      const imaginaria = Math.sqrt(-discriminante) / (2 * this.a);
      this.resultado = `Raíces complejas: x1 = ${real} + ${imaginaria}i, x2 = ${real} - ${imaginaria}i`;
    }
  }
}
