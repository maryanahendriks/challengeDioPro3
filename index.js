class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar () {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        // Interpolação de string
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
const heroi1 = new Heroi("Gandalf", 100, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Lee", 25, "monge");
const heroi4 = new Heroi("Naruto", 20, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

