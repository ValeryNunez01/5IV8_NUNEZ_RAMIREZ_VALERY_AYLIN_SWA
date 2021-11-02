/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rsa_manita;

import java.math.BigInteger;
import java.util.*;
import java.io.*;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.filechooser.FileNameExtensionFilter;
/**
 *
 * @author Valery
 */
public class RSA_Manita {
    private int tamPrimo;
    private BigInteger n, p, q;  //numeros que ocupa el RSA
    private BigInteger fi;
    private BigInteger e, d;
    
    //constructor de la clase
    RSA_Manita (int tamPrimo){
        this.tamPrimo = tamPrimo;
    }

    RSA_Manita() {

    }
    
    //metodo para generar los numeros primos
    public void generarPrimos(int tamPrimo){
        p = new BigInteger(tamPrimo, 10, new Random());
        do q = new BigInteger(tamPrimo, 10, new Random());
        while(q.compareTo(p)==0);
    }
    
    //el metodo para generar las claves
    //n = p * q
    //fi = (p-1)*(q-1)
    //de ahi hay que elegir el numero e y d eligiendo e como un coprimo y menor que n
    
    public void generarClaves(int tamPrimo){
        //n = p*q
        n = p.multiply(q);
        
        //fi = (p-1)*(q-1)
        
        fi = p.subtract(BigInteger.valueOf(1));
        fi = fi.multiply(q.subtract(BigInteger.valueOf(1)));
        
        //como elegimos un coprimo de 1< e < fi
        
        do e = new BigInteger(2*tamPrimo, new Random());
        while((e.compareTo(fi) != -1) || (e.gcd(fi).compareTo(BigInteger.valueOf(1)) != 0));
        
        //calcular d
        // d = e^1 mod fi 
        //el multiplo inversor
        
        d = e.modInverse(fi);
        
    }
    
    //vamos a cifrar wiiiii usando la clave publica wiiiii
    //solo se pueden cifrar numeros doble wiiii
    

    public BigInteger[] cifrar(String mensaje){
          
        int i;
        byte[] temp = new byte[1];
        byte[] digitos = mensaje.getBytes();
        BigInteger[] bigdigitos = new BigInteger[digitos.length];



        for(i = 0; i < bigdigitos.length; i++){
            temp[0] = digitos[i];
            bigdigitos[i] = new BigInteger(temp);
        }

        // C=M^e mod(n)

        BigInteger[] cifrado = new BigInteger[bigdigitos.length];

        for(i = 0; i < bigdigitos.length; i++){
            cifrado[i] = bigdigitos[i].modPow(e, n);
        }

        StringBuffer numerote= new StringBuffer();

        for(int u = 0 ; u < cifrado.length ; u++){

            numerote = numerote.append(cifrado[u]);
        }

        String numCadena = numerote.toString();
        ventana vent = new ventana();
        JOptionPane.showMessageDialog(null,"Texto cifrado: \n"+numCadena);
                
        return cifrado;
    }
    
    
    //descifrar con la clave privada
    
    public String descifrar(BigInteger[] cifrado){
        
        BigInteger[] descifrado = new BigInteger[cifrado.length];
        
        // M = C ^d mod n
        
        for( int i = 0; i < descifrado.length; i++ ){
            descifrado[i] = cifrado[i].modPow(d, n);
        }
        
        char[] charArray = new char[descifrado.length];
        
        for( int i = 0; i < charArray.length; i++){
            charArray[i] = (char)(descifrado[i].intValue());
        }
        JOptionPane.showMessageDialog(null,"Texto plano: \n" + new String (charArray));
        return(new String(charArray));
        
    }

    
}
