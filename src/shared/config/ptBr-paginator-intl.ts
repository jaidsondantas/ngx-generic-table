import { MatPaginatorIntl } from '@angular/material/paginator';

const ptBrRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 van ${length}`; }
  length = Math.max(length, 0);
  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}


export function getPrBrPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'Exibir';
  paginatorIntl.nextPageLabel = 'Próxima página';
  paginatorIntl.previousPageLabel = 'Página anterior';
  paginatorIntl.getRangeLabel = ptBrRangeLabel;
  paginatorIntl.lastPageLabel = 'Última página';
  paginatorIntl.firstPageLabel = 'Primeira página';
  return paginatorIntl;
}
