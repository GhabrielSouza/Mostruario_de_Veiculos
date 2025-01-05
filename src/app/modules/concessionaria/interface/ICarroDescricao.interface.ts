export interface ICarroDescricao {
  id: number;
  nome: string; // Nome do carro
  modelo: string; // Modelo do carro
  ano: number; // Ano do carro
  anoFabricacao: number; // Ano de fabricação do carro
  anoModelo: number; // Ano do modelo do carro
  cor: string; // Cor do carro
  preco: number; // Preço do carro
  quilometragem: number; // Quilometragem do carro
  cilindradas: number; // Cilindradas do carro
  estadoDoCarro?: string; // Estado do carro
  cambio?: string; // Tipo de câmbio
  finalDaPlaca?: number; // Final da placa do carro
  descricao?: string; // Descrição do carro
  combustivel?: string; // Tipo de combustível
  itens?: string[]; // Itens do carro
  loja?: string; // ID da loja
  marca?: string; // ID da marca
  file: File;
}
