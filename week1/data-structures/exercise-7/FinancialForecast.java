import java.util.Scanner;

public class FinancialForecast {
    static double forecast(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return forecast(amount * (1 + rate / 100), rate, years - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter present value: ");
        double amount = sc.nextDouble();
        System.out.print("Enter annual growth rate (%): ");
        double rate = sc.nextDouble();
        System.out.print("Enter number of years: ");
        int years = sc.nextInt();
        double result = forecast(amount, rate, years);
        System.out.printf("Forecasted Value = %.2f", result);
        sc.close();
    }
}