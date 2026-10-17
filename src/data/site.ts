export const siteName = 'Carro Serto';
export const tagline = 'Seu próximo carro começa com informação.';
export const categories = [
  {name:'Lançamentos', slug:'lancamentos', description:'Novidades do mercado automotivo, com contexto e fontes.'},
  {name:'Guias', slug:'guias', description:'Dicas práticas para comparar, escolher e economizar.'},
  {name:'Elétricos', slug:'eletricos', description:'Tecnologia, autonomia, recarga e custo de uso.'},
  {name:'Opinião dos donos', slug:'opiniao-dos-donos', description:'Como interpretar relatos reais e identificar problemas recorrentes.'}
];
export const slugFor = (name:string) => categories.find(c => c.name === name)?.slug || 'guias';
