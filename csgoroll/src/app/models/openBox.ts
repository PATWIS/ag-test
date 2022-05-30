export interface OpenBoxInput {
  boxId: string;
  amount: number;
}

export interface BoxOpeningResult {
  openBox: CreateBoxOpeningPayload;
}
export interface CreateBoxOpeningPayload {
  boxOpenings: BoxOpening[];
}

export interface BoxOpening {
  id: string;
  itemVariant: ItemVariant;
}

export interface ItemVariant {
  id: string;
  name: string;
  value: number;
}
