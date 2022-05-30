export interface Box {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
}

export interface BoxDetails {
  box: Box;
}

export interface BoxEdge {
  node: Box;
}

export interface BoxConnection {
  edges: BoxEdge[];
}
