class Alimento extends ObjetoJogo {
        arqImagem='alimento.png';
        #imagem;
        constructor(valor,...args){
            super(args);
            this.valor = valor;
            this.#imagem = new Image();
            this.#imagem.src = this.arqImagem;
        }
        desenhar(){
            canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
        }
    }




