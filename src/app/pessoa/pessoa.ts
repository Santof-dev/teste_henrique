import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';
import { validarPessoa, validarIdsUnicos } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
  pessoas: PessoaModel[] = [
    { id: 1, nome: 'Eduardo Santos', curso: 'Análise e Desenvolvimento de Sistemas', email: 'eduardo@exemplo.com', telefone: '71999999999', ativo: true, vinculo: 'aluno' },
    { id: 2, nome: 'Ana Souza', curso: 'Odontologia', email: 'ana@exemplo.com', telefone: '71888888888', ativo: true, vinculo: 'aluno' },
    { id: 3, nome: 'Carlos Silva', curso: 'Jornalismo', email: 'carlos@exemplo.com', telefone: '71777777777', ativo: true, vinculo: 'convidado' },
    { id: 4, nome: 'Marcos Lima', curso: 'Engenharia', email: 'marcos@exemplo.com', ativo: false, vinculo: 'professor' },
    { id: 5, nome: 'Teste123', curso: 'Medicina', email: 'invalido', telefone: '123', ativo: true, vinculo: 'aluno' }
  ];

  // ... a lista pessoas com dois registros usando id: 1
  
  resultados = this.pessoas.map(pessoa => ({
    pessoa,
    erros: validarPessoa(pessoa)
  }));

  errosGlobais = validarIdsUnicos(this.pessoas);

  // ... suas listas pessoas e resultados aqui em cima ...
}
