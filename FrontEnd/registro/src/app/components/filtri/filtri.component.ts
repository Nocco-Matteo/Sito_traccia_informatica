import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  startWith,
  map,
  tap,
  Subject,
  pipe,
  takeUntil,
} from 'rxjs';
import {
  FILTRO_ARGOMENTO,
  FILTRO_PERIODO,
  FILTR_MATERIA,
} from 'src/app/configs/filtri.config';
import { FiltriService } from 'src/app/services/filtri.service';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.scss'],
})
export class FiltriComponent implements OnInit, OnDestroy {
  filtroArgomento!: string[];
  filtroMateria!: string[];
  filtroPeriodo!: string[];
  filteredMateria!: Observable<string[]>;
  filteredArgomento!: Observable<string[]>;
  filtri!: FormGroup;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly filtriService: FiltriService) {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.filtriService
      .getFiltri()
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(([ filteredArgomento, filteredMateria, filtroMateria ]) => {
          this.filtroArgomento = filteredArgomento;
          this.filtroMateria = filteredMateria;
          this.filtroPeriodo = filtroMateria;
        })
      )
      .subscribe(() => {
        this.filtri = new FormGroup({
          materia: new FormControl(),
          argomento: new FormControl(),
          periodo: new FormControl('Giorno'),
        });
  
        this.filteredMateria = this.filtri.controls['materia'].valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value, this.filtroArgomento))
        );
        this.filteredArgomento = this.filtri.controls['argomento'].valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value, this.filtroMateria))
        );
      });
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
