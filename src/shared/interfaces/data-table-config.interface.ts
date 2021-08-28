export declare type TypeColumn = 'date' | 'text' | 'actions' | undefined;

export interface DataTableConfigInterface {
  style?: string
  type?: TypeColumn
  format?: string;
  cssClass?: string;
}

