const tela={
    largura:800,
    altura:400,
    arqImagem:'fundo.jpg',
    desenhar: function(){
        this.imagem = new Image ();
        this.imagem.src = this.arqImagem;
        canvasCtx.drawImage(this.imagem, 0, 60, this.largura, this.altura);
    }
};
tela.desenhar();