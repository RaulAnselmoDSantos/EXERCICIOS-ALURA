package src;

public class TestaGeteSet {
    public static void main(String[] args) {
        conta conta = new conta(); 
        //conta.numero = 1337;
        conta.setNumero(1337); 
        System.out.println(conta.getNumero());

        Cliente paulo = new Cliente();
        //conta.titular = paulo;
        paulo.setNome("Paulo Silveira");

        conta.setTitular(paulo);

        System.out.println(conta.getTitular().getNome());
    }
}
