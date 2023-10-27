const express = require("express")

app.get('/', (requisicao, resposta) => {
    resposta.send("estou funcionando com o express")
})