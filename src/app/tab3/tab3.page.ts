import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html'
})
export class Tab3Page {
  fechaini: string;
  fechafin: string;
  dias: number | null = null;

  constructor() {}

  calcular() {
    const ini = moment(this.fechaini, 'YYYY-MM-DD');
    const fin = moment(this.fechafin, 'YYYY-MM-DD');

    // Calcula la diferencia en días
    this.dias = fin.diff(ini, 'days');
  }
}
