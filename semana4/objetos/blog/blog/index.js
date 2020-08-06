let adicionaPost = () =>{
    let tituloPost = document.getElementById("titulo-post")
    let autorPost = document.getElementById("autor-post")
    let imgPost = document.getElementById("img-post")
    let conteudoPost = document.getElementById("conteudo-post")
    const post1 = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        imagem: imgPost.value,
        conteudo: conteudoPost.value,
    }
    const valueBox1 = [post1.titulo, post1.autor, post1.conteudo]
    tituloPost.value = ""
    autorPost.value = ""
    imgPost.value = ""
    conteudoPost.value = ""
    let containerPost = document.getElementById("container-de-posts")
    containerPost.innerHTML += `<p>${valueBox1}</p>`
}



