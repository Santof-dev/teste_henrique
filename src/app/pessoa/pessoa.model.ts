export type Vinculo = 'aluno' | 'professor' | 'convidado';

export interface Pessoa {
  id: number;
  nome: string;
  curso: string;
  email: string;
  telefone?: string;
  ativo: boolean;
  vinculo: Vinculo;
}