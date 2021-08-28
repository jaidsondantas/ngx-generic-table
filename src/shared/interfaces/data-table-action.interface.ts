export declare type TypeAction = 'button' | 'text' | 'icon' | undefined;


export interface DataTableAction {
  action: string;
  icon?: string;
  visible?: boolean | any;
  tooltip?: string;
  label?: string;
  disabled?: boolean | any;
  statusAction?: boolean | any;
  TypeAction?: TypeAction;
}
