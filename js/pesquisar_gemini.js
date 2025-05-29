
const botao_pesquisar = document.getElementById("btn-pesquisar")



botao_pesquisar.addEventListener('click', async function(){
    
    //Recebe o elemento da caixa de texto
    const text = document.getElementById("text-pergunta")

    //Variaveis com a URL e a chave de acesso da API
    const key  = "AIzaSyBfVeoT-FlFHSv80FGPs-goCHGijXczYnU"
    const url  = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="+key
    
    const dadosBody = {
        contents: [
            {
                parts:[
                    {
                        text: `${text.value}`
                    }
                ]
            }
        ]
    }

    //Faz a requisição na API do GEMINI
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosBody)
    })

    //Recebe os dados da API para utilizamos no projeto
    const dados = await response.json()

    //Recebe a resposta da API
    const resposta = dados.candidates[0].content.parts[0].text
   
    //Adicionando a resposta da API na caixa de texto
    document.getElementById('text-resposta').value = resposta
})