let messages = [
    {
        "id": "1",
        "messages": [
            "A última coisa que vi foi o punho vindo do escuro. Depois… silêncio. Agora, só barulho. E essa voz na minha cabeça. Ela diz que eu sou importante. Que eu sou o último. Mas tudo que lembro... é como bater."
        ]
    }
]



export async function getMessageById(id) {
    if (!id) return ""

    const message = messages.find(el => {
        return el.id == id
    })

    if (!message) {
        return ""
    }

    return message

}

