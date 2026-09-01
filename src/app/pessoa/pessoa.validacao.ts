import { Pessoa } from './pessoa.model';

const CURSOS_VALIDOS = [
  'Engenharia de Computação',
  'Sistemas de Informação',
  'Ciência da Computação',
  'Análise e Desenvolvimento de Sistemas',
  'Odontologia',
  'Jornalismo',
  'Engenharia'
];

export function validarNome(nome: string): string | null {
  const limpo = nome.trim();
  if (limpo.length < 3) return 'O nome deve ter ao menos 3 caracteres.';
  if (/\d/.test(limpo)) return 'O nome não pode conter números.';
  return null;
}

export function validarEmail(email: string): string | null {
  const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  if (!email || !regex.test(email)) return 'E-mail inválido.';
  return null;
}

export function validarTelefone(telefone?: string): string | null {
  if (!telefone) return null;
  const numeros = telefone.replace(/\D/g, '');
  if (numeros.length !== 10 && numeros.length !== 11) return 'Telefone deve ter 10 ou 11 dígitos com DDD.';
  return null;
}

export function validarCurso(curso: string): string | null {
  if (!CURSOS_VALIDOS.includes(curso)) return 'Curso inválido.';
  return null;
}

export function validarPessoa(pessoa: Pessoa): string[] {
  const erros = [
    validarNome(pessoa.nome),
    validarEmail(pessoa.email),
    validarTelefone(pessoa.telefone),
    validarCurso(pessoa.curso)
  ];
  return erros.filter(erro => erro !== null) as string[];
}

export function validarIdsUnicos(pessoas: Pessoa[]): string[] {
  const ids = pessoas.map(p => p.id);
  const temDuplicado = new Set(ids).size !== ids.length;
  return temDuplicado ? ['Atenção: Existem IDs repetidos na lista!'] : [];
}