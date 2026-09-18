<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 01 - Saudação</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        input, button {
            padding: 10px;
            margin: 5px;
        }

        #resultado {
            font-size: 20px;
        }
    </style>
</head>

<body>

    <h1>Saudação</h1>

    <input type="text" id="nome" placeholder="Digite seu nome">

    <button id="btnEnviar">Enviar</button>

    <p id="resultado"></p>

    <script>
        const nome = document.querySelector("#nome");
        const botao = document.querySelector("#btnEnviar");
        const resultado = document.querySelector("#resultado");

        botao.addEventListener("click", function() {
            const nomeDigitado = nome.value;

            resultado.textContent = `Olá, ${nomeDigitado}! Seja bem-vindo!`;
        });
    </script>

</body>
</html>
