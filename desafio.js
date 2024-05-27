class heroi{
	constructor(nome, idade, tipo){
		this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque
        switch(this.tipo){
            case "guerreiro":
                ataque = "espada"
                break
            case "mago":
                ataque = "magia"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }

            console.log(`O ${this.tipo} de nome ${this.nome} e ${this.idade} anos, atacou usando ${ataque}`)
    }
    
}

const guerreiro = new heroi ("Jaspion" , 60, "guerreiro")
guerreiro.atacar()

const mago = new heroi ("Bruxa do 71", 1000, "mago")
mago.atacar()

const monge = new heroi ("Goku", 30, "monge")
monge.atacar()


const ninja = new heroi ("Bruce lee", 90, "ninja")
ninja.atacar()