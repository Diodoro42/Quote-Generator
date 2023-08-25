//variaveis

let quotes = [{
    
    quote: '“ O homem, quando perfeito, é o melhor dos animais, mas quando separado da lei e da justiça, se torna o pior de todos eles. ”',
    person: 'Aristóteles'
    
},
{
    quote: '“ Os que andam muito lentamente podem avançar muito mais se seguirem sempre o caminho reto, ao contrário dos que correm e dele se afastam. ”',
    person: 'René Descartes'
},
{
    quote: '“ É da natureza do desejo não ser satisfeito, e a maioria dos homens vive apenas para a satisfação do mesmo. ”',
    person: 'Aristóteles'
},
{
    quote: '“ De todos os animais selvagens, o homem jovem é o mais difícil de domar. ”',
    person: 'Platão'
},
{
    quote: '“ O pouco que aprendi até agora é quase nada, comparado ao que ignoro. ”',
    person: 'René Descartes '
},
{
    quote: '“ Palavras são, na minha não tão humilde opinião, nossa inesgotável fonte de magia. ”',
    person: 'J.K. Rowling'
},
{
    quote: '“ A maior glória de viver não está em nunca cair, mas em nos levantar toda vez que caímos ”',
    person: 'Nelson Mandela'
},
{
    quote: '“ O verdadeiro teste não é se você evitará esse fracasso, porque não o fará. É se você deixa que isso endureça ou envergonhe-o pela inércia, ou se você aprende com ele; se você escolhe perseverar. ”',
    person: 'Barack Obama'
},
{
    quote: '“ O sucesso geralmente vem para aqueles que estão ocupados demais para procurá-lo. ”',
    person: 'Henry David Thoreau'
},
{
    quote: '“ A maneira de começar é parar de falar e começar a fazer. ”',
    person: 'Walt Disney'
},
{
    quote: '“ Primeiro, tenha um ideal prático definido e claro; uma meta, um objetivo. Segundo, tenha os meios necessários para atingir seus fins; sabedoria, dinheiro, materiais e métodos. Terceiro, ajuste todos os seus meios para esse fim. ”',
    person: 'Aristóteles'
},
{
    quote: '“ Fracassar é parte crucial do sucesso. Toda vez que você fracassa e se recupera, exercita perseverança que é a chave da vida. Sua força está na habilidade de se recompor. ”',
    person: ' Michelle Obama'
},
{
    quote: '“ O que já fiz não me interessa. Só penso no que ainda não fiz. ”',
    person: 'Pablo Picasso'
},
{
    quote: '“ A vida é o que acontece quando você está ocupado fazendo outros planos. ”',
    person: 'John Lennon'
},
{
    quote: '“ O conhecimento torna a alma jovem e diminui a amargura da velhice. Colhe, pois, a sabedoria. Armazena suavidade para o amanhã. ”',
    person: 'Leonardo da Vinci'
},
{
    quote: ' “ Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar. ”',
    person: 'William Shakespeare'
},
{
    quote: '“ Espalhe o amor por onde você for. Não deixe ninguém vir até você sem sair mais feliz. ” ',
    person: 'Madre Teresa'
},
{
    quote: '“ Não julgue cada dia pela colheita que você faz, mas pelas sementes que você planta. ”',
    person: 'Robert Louis Stevenson'
}
]

let btnNewQuote = document.querySelector('#btn-new-quote')
let quoteSpan = document.querySelector('#quote-text')
let quotePerson = document.querySelector('#quote-person')


btnNewQuote.addEventListener('click', function(){
   let itemAtual = getRandomNumber()
    quoteSpan.textContent = quotes[itemAtual].quote
    quotePerson.textContent = quotes[itemAtual].person.toUpperCase()
    
})






function getRandomNumber(){
    
     return Math.floor(Math.random() * quotes.length) 
     
}