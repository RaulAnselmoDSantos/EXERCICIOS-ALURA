package praticando;
public class TestaCondicional {
    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Testando condicionais");
        int idade = 18;
        int quantidadePessoal = 3; 
        boolean acompanhado = true;

        if(quantidadePessoal >= 2){
           acompanhado = true; 
        }
        if (idade >= 18 && acompanhado) {
            System.out.println("Você tem mais que 18 anos e está acompanhado");
            System.out.println("Seja bem vindo");
        } else {

                System.out.println("infelizmente voce nao pode entrar");
            }
        }
}


