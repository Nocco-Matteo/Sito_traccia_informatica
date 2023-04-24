import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, startWith, map, tap } from 'rxjs';
import { FILTRO_ARGOMENTO, FILTRO_PERIODO, FILTR_MATERIA } from 'src/app/configs/filtri.config';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.scss']
})
export class FiltriComponent implements OnInit {

  filtroArgomento: string[] = FILTRO_ARGOMENTO;
  filtroMateria: string[] = FILTR_MATERIA;
  filtroPeriodo: string[] = FILTRO_PERIODO;
  filteredOptions1!: Observable<string[]>;
  filteredOptions2!: Observable<string[]>;
  filtri : FormGroup;

  constructor(){
    this.filtri = new FormGroup({
      materia: new FormControl(),
      argomento: new FormControl(),
      periodo: new FormControl('Giorno')
    })
  }

  ngOnInit() {
    this.filteredOptions1 = this.filtri.controls['materia'].valueChanges.pipe(
      startWith(''),
      tap(x => { console.log(x); return x }),
      map(value => this._filter(value, this.filtroArgomento))
    );
    this.filteredOptions2 = this.filtri.controls['argomento'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.filtroMateria))
    );
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
