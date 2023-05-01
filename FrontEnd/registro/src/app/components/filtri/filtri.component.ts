import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  COLORI_CARDS,
  DEFAULT_PERIOD,
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
  currentCardColor! : string;
  filteredMateria!: Observable<string[]>;
  filteredArgomento!: Observable<string[]>;
  filtri!: FormGroup;
  coloriCards: any = COLORI_CARDS;
  unsubscribe$: Subject<void> = new Subject<void>();
  @Output() periodChanged = new EventEmitter<string>();

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
        tap(([filteredArgomento, filteredMateria, filtroMateria]) => {
          this.filtroArgomento = filteredArgomento;
          this.filtroMateria = filteredMateria;
          this.filtroPeriodo = filtroMateria;
        })
      )
      .subscribe(() => {
        this.filtri = new FormGroup({
          materia: new FormControl(),
          argomento: new FormControl(),
          periodo: new FormControl(DEFAULT_PERIOD),
        });
        this.currentCardColor = this.coloriCards[DEFAULT_PERIOD]
        this.filteredMateria = this.filtri.controls[
          'materia'
        ].valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value, this.filtroArgomento))
        );
        this.filteredArgomento = this.filtri.controls[
          'argomento'
        ].valueChanges.pipe(
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

  
  changePeriod(): void {
    const period = this.filtri.controls['periodo'].value;
    this.currentCardColor = this.coloriCards[period];
    
    console.log(period, this.currentCardColor);
    

    this.periodChanged.emit(this.currentCardColor);
  }
}
