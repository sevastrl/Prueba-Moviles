import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  nota: string;
  notas: string[] = [];

  constructor() {}

  agregarNota() {
    if (this.nota) {
      this.notas.push(this.nota);
      this.nota = '';
    }
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
  }
}
