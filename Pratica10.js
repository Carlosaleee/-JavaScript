class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    apresentacao() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  
    trabalhar() {
      console.log(`Atualmente estou trabalhando como ${this.cargo}.`);
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`\n- ${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`\n- ${this.nome} está programando em ${this.linguagem}.`);
    }
  }
  
  // Criando instâncias 

  const gerente = new Gerente("Carlos Alexandre", 43, "Gerente de Projetos", "Tecnologia");
  const desenvolvedor = new Desenvolvedor("Yasmin Gularte", 18, "Desenvolvedora Jr.", "JavaScript");
  const desenvolvedorFrontEnd = new Desenvolvedor("Miguel Gularte", 18, "Desenvolvedor Jr.", "Html, Css");

  
  // Chamando os métodos 

  console.log("\nLista de Funcionarios \n")
  console.log("- Funcionario 01 : \n")
  
  gerente.apresentacao();
  gerente.trabalhar();
  gerente.gerenciar();

  console.log("\n- Funcionario 02 : \n")

  desenvolvedor.apresentacao();
  desenvolvedor.trabalhar();
  desenvolvedor.programar();

  console.log("\n- Funcionario 03 : \n")

  desenvolvedorFrontEnd.apresentacao();
  desenvolvedorFrontEnd.trabalhar();
  desenvolvedorFrontEnd.programar();
     