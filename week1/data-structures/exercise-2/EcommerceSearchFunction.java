import java.util.Scanner;

class Product {
    int productId;
    String productName;
    String category;
    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class EcommerceSearchFunction {
    static Product linearSearch(Product[] products, String target) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(target)) {
                return products[i];
            }
        }
        return null;
    }

    static Product binarySearch(Product[] products, String target) {
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(target);
            if (compare == 0) {
                return products[mid];
            } else if (compare < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Product[] products = {
                new Product(101, "Book", "Education"),
                new Product(102, "Bottle", "Kitchen"),
                new Product(103, "Pen", "Stationery"),
                new Product(104, "Bag", "Accessories")
        };
        System.out.print("Enter product name (Book/Bottle/Pen/Bag): ");
        String search = sc.next();
        System.out.println("\nLinear Search");
        Product result = linearSearch(products, search);
        if (result != null) {
            System.out.println("Product ID: " + result.productId);
            System.out.println("Product Name: " + result.productName);
            System.out.println("Category: " + result.category);
        } else {
            System.out.println("Product not found.");
        }
        for (int i = 0; i < products.length - 1; i++) {
            for (int j = 0; j < products.length - i - 1; j++) {
                if (products[j].productName.compareToIgnoreCase(products[j + 1].productName) > 0) {
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
        System.out.println("\nBinary Search");
        result = binarySearch(products, search);
        if (result != null) {
            System.out.println("Product ID: " + result.productId);
            System.out.println("Product Name: " + result.productName);
            System.out.println("Category: " + result.category);
        } else {
            System.out.println("Product not found.");
        }
        sc.close();
    }
}