 document.getElementById("start").style.backgroundColor = "#F5646C"
            document.getElementById("start").style.scale = "1.2"
            let img = document.getElementById("mapa")
            img.style.display = "none"
            let text = document.getElementById("escolha")
            escolha.style.display = 'block'

            function resetarCores() {
            let linhas = document.querySelectorAll(".linha");
            linhas.forEach(linha => {
            linha.style.backgroundColor = "";
            linha.style.scale = "1"
            linha.style.transition = "1.2s";
            linha.style.color = "#fff"
        });
    }

            function start(){
                resetarCores()
                /* muda a linha escolhida, destaque */
                let chosen = document.getElementById("start")
                chosen.style.backgroundColor = "#F5646C"
                chosen.style.transition = "1.2s"
                /* muda a cor de todas as linhas do trem */
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#ED1B24"
                mudarCor.style.transition = "1.2s"
                /* cor do fundo */
                document.body.style.backgroundColor = "#D9D9D9"
                document.body.style.transition = "1.2s"
                /* header, dependendo da cor, as letras vão mudar de cor também*/
                let head = document.getElementById("head")
                head.style.backgroundColor = "white"
                head.style.color = "black"
                head.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                /* só diz se a imagem ou o texto deve aparecer, só é relevante para o start*/
                let img = document.getElementById("mapa")
                img.style.display = "none"
                let text = document.getElementById("escolha")
                escolha.style.display = 'block'
            }

            function azul(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#0f41a6"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("azul")
                chosen.style.backgroundColor = "#1d64f2"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#052159"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#3e0fa6"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function verde(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#2B8C44"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("verde")
                chosen.style.backgroundColor = "#A4BFAE"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#115923"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#1F7334"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function vermelho(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#A60530"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("vermelho")
                chosen.style.backgroundColor = "#D9B0B7"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#590212"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#A61B40"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function amarelo(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#BF8845"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("amarelo")
                chosen.style.backgroundColor = "#F2CD5E"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#F2EFE9"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#F2B90F"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }
            
            function lilas(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#783F91"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("lilas")
                chosen.style.backgroundColor = "#BC98C4"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#220D38"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#592F7B"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function laranja(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#F28705"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("laranja")
                chosen.style.backgroundColor = "#F2F2F2"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#D93D04"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#F25C05"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function rubi(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#A6033F"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("rubi")
                chosen.style.backgroundColor = "#A60303"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#400112"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#590202"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function diamante(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#B5B6BF"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("diamante")
                chosen.style.backgroundColor = "#F1F3FF"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#3C3D40"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#D9DBE5"
                head.style.color = "white"
                head.style.transition = "0.5s"
                head.style.color = "black"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function esmeralda(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#038C3E"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("esmeralda")
                chosen.style.backgroundColor = "#0CF25D"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#034159"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#02735E"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function turquesa(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#2B8C83"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("turquesa")
                chosen.style.backgroundColor = "#A0F2F2"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#0F4040"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#155952"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function coral(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#FF4858"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("coral")
                chosen.style.backgroundColor = "#72F2EB"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#00CCC0"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#1B7F79"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function safira(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#051DA6"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("safira")
                chosen.style.backgroundColor = "#F2F2F2"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#011640"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#021E73"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function jade(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#517356"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("jade")
                chosen.style.backgroundColor = "#9FBFA4"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"
                chosen.style.color = "black"

                document.body.style.backgroundColor = "#364038"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#85A687"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function prata(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#A6A6A6"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("prata")
                chosen.style.backgroundColor = "#737373"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#D9D9D9"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#8C8C8C"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function ouro(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#D99C2B"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("ouro")
                chosen.style.backgroundColor = "#F2D57E"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#8C521F"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#F2C53D"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

            function bronze(){
                resetarCores()
                let mudarCor = document.getElementById("linhas")
                mudarCor.style.backgroundColor = "#BF785E"
                mudarCor.style.transition = "0.5s"

                let chosen = document.getElementById("bronze")
                chosen.style.backgroundColor = "#8C4C35"
                chosen.style.transition = "0.5s"
                chosen.style.scale = "1.2"

                document.body.style.backgroundColor = "#592715"
                document.body.style.transition = "0.5s"

                let head = document.getElementById("head")
                head.style.backgroundColor = "#8C4C35"
                head.style.color = "white"
                head.style.transition = "0.5s"

                let img = document.getElementById("mapa").style.display = "block"

                let text = document.getElementById("escolha")
                escolha.style.display = 'none'
            }

function atualizarRelogio() {
      let agora = new Date();
      let horas = String(agora.getHours()).padStart(2, "0");
      let minutos = String(agora.getMinutes()).padStart(2, "0");

      document.getElementById("relogio").textContent = 
        `${horas}:${minutos}`;
    }

    // Atualiza a cada 1 segundo
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();