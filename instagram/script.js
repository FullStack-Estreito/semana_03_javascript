var posts = [
    {
        id: 1233,
        nome: 'Sushi Bom ',
        url: 'https://www.shutterstock.com/shutterstock/videos/1053218018/preview/stock-footage-super-slow-motion-shot-of-fresh-sushi-falling-into-soy-sauce-at-fps.webm',
        conteudo: "A Sexta-feira mais animada da cidade está chegando! <br/> 💃🏻 E com ela, um pagodinho pra animar e um delicioso rodízio japonês acompanhado de um cervejinha gelada. 🍣🍺 Ah, além de uma promoção maraaaa de Camarão no alho e óleo! 🍤 Eai, não vai ficar de fora dessa né?! Pra garantir a sua mesa e não correr perigo de ficar sem ter onde curtir tudo isso, entre em contato com a gente e reserve agora a sua! 📲",
        data: '1d',
        isVideo: true,
        comentarios: [
            {
                autor: 'Joaozim',
                comentario: 'comida muito boa ..... :)'
            },
            {
                autor: 'Mariazinha',
                comentario: 'comida muito ruim ..... :('
            }
        ]
    },
    {
        id: 234,
        nome: 'Sushi Belo',
        url: 'https://www.shutterstock.com/shutterstock/videos/1094730147/preview/stock-footage-super-slow-motion-shot-of-fresh-salmon-cuts-falling-into-poke-bowl-at-fps.webm',
        conteudo: "A Sexta-feira mais animada da cidade está chegando! <br/> 💃🏻 E com ela, um pagodinho pra animar e um delicioso rodízio japonês acompanhado de um cervejinha gelada. 🍣🍺 Ah, além de uma promoção maraaaa de Camarão no alho e óleo! 🍤 Eai, não vai ficar de fora dessa né?! Pra garantir a sua mesa e não correr perigo de ficar sem ter onde curtir tudo isso, entre em contato com a gente e reserve agora a sua! 📲",
        data: '1d',
        isVideo: true,
        comentarios: [
            {
                autor: 'Joaozim',
                comentario: 'comida muito boa ..... :)'
            },
            {
                autor: 'Mariazinha',
                comentario: 'comida muito ruim ..... :('
            }
        ]

    },
    {
        id: 235,
        nome: 'Sushi Camarão',
        url: 'https://www.nutrimixassessoria.com.br/wp-content/uploads/2019/01/e-seguro-comer-sushi-conheca-os-riscos-da-comida-japonesa-1140x641.jpg',
        conteudo: "A Sexta-feira mais animada da cidade está chegando! <br/> 💃🏻 E com ela, um pagodinho pra animar e um delicioso rodízio japonês acompanhado de um cervejinha gelada. 🍣🍺 Ah, além de uma promoção maraaaa de Camarão no alho e óleo! 🍤 Eai, não vai ficar de fora dessa né?! Pra garantir a sua mesa e não correr perigo de ficar sem ter onde curtir tudo isso, entre em contato com a gente e reserve agora a sua! 📲",
        data: '1d',
        isVideo: false,
        comentarios: [
            {
                autor: 'Joaozim',
                comentario: 'comida muito boa ..... :)'
            },
            {
                autor: 'Mariazinha',
                comentario: 'comida muito ruim ..... :('
            }
        ]
    },
    {
        id: 2354,
        nome: 'Sushi Fome',
        url: 'https://lh3.googleusercontent.com/p/AF1QipOzvlii25giKQskrhyNM5h2OVgN8TZqUWNOEd1c=w1080-h608-p-no-v0',
        conteudo: "A Sexta-feira mais animada da cidade está chegando! <br/> 💃🏻 E com ela, um pagodinho pra animar e um delicioso rodízio japonês acompanhado de um cervejinha gelada. 🍣🍺 Ah, além de uma promoção maraaaa de Camarão no alho e óleo! 🍤 Eai, não vai ficar de fora dessa né?! Pra garantir a sua mesa e não correr perigo de ficar sem ter onde curtir tudo isso, entre em contato com a gente e reserve agora a sua! 📲",
        data: '1d',
        isVideo: false,
        comentarios: [
            {
                autor: 'Joaozim',
                comentario: 'comida muito boa ..... :)'
            },
            {
                autor: 'Mariazinha',
                comentario: 'comida muito ruim ..... :('
            }
        ]
    },
    {
        id: 2354,
        nome: 'Sushi Excelente',
        url: 'https://www.shutterstock.com/shutterstock/videos/1066741222/preview/stock-footage-sticks-taking-sushi-from-table-closeup-of-eating-tasty-sushi-rolls-filled-with-eel-sushi.webm',
        conteudo: "A Sexta-feira mais animada da cidade está chegando! <br/> 💃🏻 E com ela, um pagodinho pra animar e um delicioso rodízio japonês acompanhado de um cervejinha gelada. 🍣🍺 Ah, além de uma promoção maraaaa de Camarão no alho e óleo! 🍤 Eai, não vai ficar de fora dessa né?! Pra garantir a sua mesa e não correr perigo de ficar sem ter onde curtir tudo isso, entre em contato com a gente e reserve agora a sua! 📲",
        data: '1d',
        isVideo: true,
        comentarios: [
            {
                autor: 'Joaozim',
                comentario: 'comida muito boa ..... :)'
            },
            {
                autor: 'Mariazinha',
                comentario: 'comida muito ruim ..... :('
            }
        ]
    }
]

function carregarPosts() {
    console.log("entrei aqui")
    
    posts.forEach(function (post) {

        /*
        <ul>
            <li>
                <h2></h2>
                <p></p>
                <img />

                <ul>

                </ul>
            </li

            </ul>
        */
         
        var li = document.createElement('li')

        var h2 = document.createElement('h2')
        h2.innerHTML = post.nome
        li.appendChild(h2)

        var p = document.createElement('p')
        p.innerHTML = post.conteudo
        li.appendChild(p)

        if(post.isVideo === true) {
            var video = document.createElement('video')
            video.setAttribute('src', post.url )
            video.setAttribute('width', '500px')
            video.setAttribute('controls', true )
            li.appendChild(video)
        } else {
            var img = document.createElement('img')
            img.setAttribute('src', post.url )
            img.setAttribute('width', '500px')
            img.setAttribute('alt', post.url)
            li.appendChild(img)
        }

        var listaComentarios = document.createElement('ul')

        post.comentarios.forEach(function(comentario) {
            var comentarioItem = document.createElement('li')
            comentarioItem.innerHTML = comentario.comentario
            listaComentarios.appendChild(comentarioItem)
        })
       
        li.appendChild(listaComentarios)
        
        document.getElementById('posts').appendChild(li)
    })
}

window.onload = carregarPosts

/*
1 - 
<li>
</li>

<h2>Sushi bom</h2>
<li>
    <h2>Sushi bom</h2>
</li>

<p></p>

<img />

<img src="......." />
< src="....." alt="" />

*/