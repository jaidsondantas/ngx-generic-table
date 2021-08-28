import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ColumnsTableInterface, DataTableAction} from '../shared/interfaces';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {getPrBrPaginatorIntl} from '../shared/config/ptBr-paginator-intl';

export declare type Theme = 'dark-theme' | 'light-theme';

@Component({
  selector: 'ngx-generic-table',
  templateUrl: './ngx-generic-table.component.html',
  styleUrls: ['./ngx-generic-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxGenericTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() loading: boolean = false;
  @Input() dataSource: any[];
  @Input() columnsTable: ColumnsTableInterface[] = [];
  @Input() count: number;
  @Input() dataTableActions: DataTableAction[];
  @Input() labelsPagination: MatPaginatorIntl;
  @Input() isPtBr: boolean = false;
  @Input() theme: Theme;

  @Output() tableEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() alterPage = new EventEmitter<any>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;

  displayedTableColumns: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paginatorTranslationDefault();
  }

  loadDefaultsBasedOnTableData(): void {
    this.displayedTableColumns = [];
    if (this.columnsTable?.length) {
      this.columnsTable.forEach((d) => {
        this.displayedTableColumns.push(d.key);
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadDefaultsBasedOnTableData()
  }

  tableEventHandler(event: string, data: any[], $event: Event): void {
    $event.preventDefault();
    this.tableEvent.emit({event, data});
  }

  paginatorTranslationDefault(): void {
    if (this.isPtBr) {
      this.paginator._intl = getPrBrPaginatorIntl();
    }
  }


}
