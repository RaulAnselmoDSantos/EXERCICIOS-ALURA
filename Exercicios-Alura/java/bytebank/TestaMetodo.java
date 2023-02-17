package bytebank;



public class TestaMetodo {
    public static void main(String[] args) {
        conta contaDoPaulo = new conta(); 
        contaDoPaulo.saldo = 100; 
        contaDoPaulo.deposita(50);

        System.out.println(contaDoPaulo.saldo);
        contaDoPaulo.saca(20);
        System.out.println(contaDoPaulo.saldo);
        
    }
}
 