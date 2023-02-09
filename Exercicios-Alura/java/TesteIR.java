public class TesteIR {
    public static void main(String[] args) {

        double salario = 3750.0;

        if(salario >= 3751.01){
            System.out.println("IR = "+salario+" * 22.5%");
        }

        if (salario <= 3750.00 && salario >= 2800.01){
            System.out.println("IR = "+salario+" * 15%");
        } 

        if(salario >= 1900.00 && salario <= 2800.00){
            System.out.println("IR = "+salario+" * 7.5%");
        }
    }
}
