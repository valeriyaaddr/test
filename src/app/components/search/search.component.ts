import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FactsService } from '../../services/facts.service';
import { IJoke } from '../../models/joke.model';

const compare = (a: string, b: string, isAsc: boolean) => {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('collapseAnimation', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      state(':leave', style({height: '*'})),
      transition('expanded <=> collapsed', animate('300ms ease')),
      transition(':leave', animate('300ms ease', style({
          height: '0px'
        }))
      )
    ])
  ],
})

export class SearchComponent implements OnInit {

  search: string;
  displayedColumns: string[] = ['id', 'category', 'date'];
  dataSource: MatTableDataSource<IJoke>;
  expandedElement: IJoke | null;
  activeFiltersMap: { key: string, value: boolean } | {} = {};
  idFilter: string;
  categoryFilter: string;
  dateFilter: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: FactsService) { }

  ngOnInit(): void {}

  public getJokes(): void {
    this.service.getJokes(this.search).subscribe(res => {
      this.dataSource = new MatTableDataSource<IJoke>(res.result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.getFilterPredicate();
    });
  }

  private getSortedData(data: IJoke[]): IJoke[] {
    if (this.sort.active !== 'Date created' || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      return compare(a.created_at, b.created_at, isAsc);
    });
  }

  sortedData($event: Sort): void {
    this.dataSource.data = this.getSortedData(this.dataSource.data);
  }

  public setActiveFilter(key: string): void {
    this.activeFiltersMap[key] = !this.activeFiltersMap[key];
  }


  applyFilter(): void {
    this.idFilter = this.idFilter || '';
    this.categoryFilter = this.categoryFilter || '';
    this.dateFilter = this.dateFilter || '';
    const filterValue = this.idFilter + '$' + this.categoryFilter + '$' + this.dateFilter;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getDateString(date): string {
    const d = new Date(date);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    const hour = new Intl.DateTimeFormat('en', { hour: '2-digit' }).format(d).slice(0, 2);
    const minute = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d);
    const dayPeriod = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(d).slice(-2);
    return `${month} ${day}, ${year} ${hour}:${minute} ${dayPeriod}`.toLowerCase();
  }

  getFilterPredicate(): any {
    return (row: IJoke, filters: string) => {
      const filterArray = filters.split('$');
      const idFilter = filterArray[0];
      const categoryFilter = filterArray[1];
      const dateFilter = filterArray[2];

      const matchFilter = [];

      const columnId = row.id;
      const columnCategory = row.categories;
      const columnDate = row.created_at;

      const customFilterId = columnId.toLowerCase().includes(idFilter);
      const customFilterCategory = columnCategory.join(',').toLowerCase().includes(categoryFilter);
      const customFilterDate = this.getDateString(columnDate).includes(dateFilter);

      matchFilter.push(customFilterId);
      matchFilter.push(customFilterCategory);
      matchFilter.push(customFilterDate);

      return matchFilter.every(Boolean);
    };
  }
}
