const btn = document.getElementById('btn');
const versao = document.getElementById('versao');
const livro = document.getElementById('livro');
const capitulo = document.getElementById('capitulo');
const text = document.getElementById('text');

btn.addEventListener("click", async () => {
    const API = `https://www.abibliadigital.com.br/api/verses/${versao.value}/${livro.value}/${capitulo.value}`;

    await fetch(API)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            const chapterNumber = data.chapter.number;
            const livro2 = document.getElementById('livro2')
            const captitle = document.getElementById('captitle')

            livro2.innerHTML = data.book.name
            captitle.innerHTML = `${chapterNumber}`
           

            // Limpa o conteúdo atual do elemento HTML
            text.innerHTML = '';

            // Itera sobre cada objeto no array de versículos
            data.verses.forEach((verse) => {
                // Cria um novo elemento de div para cada verso (container)
                const divContainer = document.createElement('div');

                // Adiciona uma classe à div container para estilização
                divContainer.classList.add('verse-container');

                // Estiliza a divContainer
                // divContainer.style.backgroundColor = 'red'
                
                // Cria um novo elemento de div para o conteúdo do verso
                const divContent = document.createElement('div');
                
                // Adiciona uma classe à div conteúdo para estilização
                divContent.classList.add('verse-content');

                // Estiliza a divContent
                // divContent.style.border='solid 1px blue'



                // Cria um novo elemento de parágrafo para o texto do verso
                const p = document.createElement('p');

                // Estiliza o parágrafo
                p.style.fontFamily = 'Arial';
                p.style.fontSize = '16px';

                // Define o texto do verso no parágrafo
                p.textContent = verse.text;

                // Cria um novo elemento de span para o número do verso
                const spanNumber = document.createElement('span') 

                // Adiciona uma classe ao span para estilização
                spanNumber.classList.add('verse-number')

                // Define o número do verso no span
                spanNumber.textContent = `${verse.number}. `; // Adiciona o número do verso com um ponto final

                // Adiciona o span de número como primeiro filho do parágrafo
                p.insertBefore(spanNumber, p.firstChild);
                

                // Adiciona o parágrafo à div de conteúdo
                divContent.appendChild(p);

                // Adiciona a div de conteúdo à div container
                divContainer.appendChild(divContent);

                // Adiciona a div container ao elemento text
                text.appendChild(divContainer);

            });
            
        });
});


/* Neste código, forEach é usado para iterar sobre cada objeto no array data.verses, e para cada objeto, 
um novo elemento de parágrafo (<p>) é criado para armazenar o texto do verso. Esse parágrafo é então 
adicionado ao elemento HTML com o id text, que é onde você deseja exibir os textos dos versos.*/

/* O QUE É INTERAR ?
Iterar é basicamente percorrer uma lista de itens, um por um, e fazer algo com cada um deles. 
É como quando você olha para uma lista de compras e verifica item por item, fazendo o que precisa ser 
feito com cada item (por exemplo, pegar o item na prateleira do supermercado).

No contexto de programação, "iterar" geralmente se refere a percorrer uma lista de elementos em uma estrutura 
de dados, como um array (ou lista) no JavaScript. Quando você itera sobre um array, está percorrendo cada 
elemento do array, um por um, e pode executar alguma operação para cada elemento, como exibir seu valor, 
fazer um cálculo com ele, ou qualquer outra coisa que seja necessária.

No exemplo anterior que dei, quando usamos data.verses.forEach(), estamos iterando sobre cada elemento 
no array data.verses. Para cada elemento (nesse caso, cada verso), estamos criando um novo elemento de 
parágrafo no HTML e adicionando o texto desse verso como conteúdo desse novo elemento de parágrafo. 
Assim, estamos percorrendo todos os versos do array e fazendo algo com cada um deles. Isso é o que significa 
"iterar" no contexto da programação.
*/