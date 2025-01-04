export interface IDialogFormCarro {
  id: number;
  nome: string;
  modelo: string;
  ano: number;
  anoFabricacao: number;
  anoModelo: number;
  cor: string;
  preco: number;
  quilometragem: number;
  cilindradas: number;
  estadoDoCarro?: string;
  cambio?: string;
  finalDaPlaca?: number;
  descricao?: string;
  combustivel?: string;
  itens?: string[]; // Array de itens separados por vírgula
  loja?: string;
  marca?: string;
  imagem: File[];
}
