package entrega8;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    System.out.println("Ingrese una fecha(dd/mm/yyyy): ");

    Scanner teclado = new Scanner(System.in);

    String fecha = teclado.next();
    teclado.close();

    int dia = Integer.parseInt(fecha.substring(0, 2));
    int mes = Integer.parseInt(fecha.substring(3, 5));
    int anio = Integer.parseInt(fecha.substring(6, 10));

    if (anio >= 1900 && anio <= 2099) { // valida los anios solicitados

      switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: // valida lo meses de 31 dias
          if (dia >= 1 && dia <= 31) {
            System.out.println("La fecha es correcta");
          } else {
            System.out.println("El mes " + mes + " tiene 31 dias.");
          }
          break;
        case 4:
        case 6:
        case 9:
        case 11: // valida los meses de 30 dias
          if (dia >= 1 && dia <= 30) {
            System.out.println("La fecha es correcta");
          } else {
            System.out.println("El mes " + mes + " tiene 30 dias.");
          }
          break;
        case 2: // valida febrero
          if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) { // valida si es bisiesto
            if (dia >= 1 && dia <= 29) { // valida febrero bisiesto
              System.out.println("La fecha es correcta");
            } else {
              System.out.println("El anio " + anio + " es bisiesto y Febrero tiene 29 dias.");
            }
          } else if (dia >= 1 && dia <= 28) { // valida febrero no bisiesto
            System.out.println("La fecha es correcta");
          } else {
            System.out.println("El anio " + anio + " es no bisiesto y Febrero tiene 28 dias.");
          }
          break;
        default: // mes invalido
          System.out.println("La fecha es invalida");
          break;
      }
    } else {
      System.out.println("La fecha es invalida");
    }
  }
}