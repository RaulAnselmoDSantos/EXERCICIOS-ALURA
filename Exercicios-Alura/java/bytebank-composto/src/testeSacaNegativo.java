package src;

public class testeSacaNegativo {
    public static void main(String[] args) {
        conta conta = new conta(); 
        System.out.println(conta);

        conta.deposita(100);
        System.out.println(conta.saca(200));

        System.out.println(conta.saldo);
    }
}
