import {DataTableConfigInterface} from './data-table-config.interface';

export interface ColumnsTableInterface {
  key: string;
  value: string;
  config?: DataTableConfigInterface
}
