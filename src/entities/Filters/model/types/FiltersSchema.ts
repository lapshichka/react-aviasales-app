export interface FiltersSchema {
  all: boolean,
  noTransfers: boolean,
  oneTransfer: boolean,
  twoTransfer: boolean,
  threeTransfer: boolean,
}

export enum FilterNames {
  all = 'all',
  noTransfers = 'noTransfers',
  oneTransfer = 'oneTransfer',
  twoTransfer = 'twoTransfer',
  threeTransfer = 'threeTransfer',
}

export interface FiltersData {
  name: FilterNames,
  label: string,
  action: (filter: FilterNames) => void,
}
