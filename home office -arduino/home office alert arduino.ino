#include <Wire.h> //INCLUSÃO DE BIBLIOTECA
#include <LiquidCrystal_I2C.h> //INCLUSÃO DE BIBLIOTECA
int flag = 0;

LiquidCrystal_I2C lcd(0x27,2,1,0,4,5,6,7,3, POSITIVE); //ENDEREÇO DO I2C E DEMAIS INFORMAÇÕES
 
void setup(){
 lcd.begin (16,2); //SETA A QUANTIDADE DE COLUNAS(16) E O NÚMERO DE LINHAS(2) DO DISPLAY
 lcd.setBacklight(HIGH); //LIGA O BACKLIGHT (LUZ DE FUNDO)
  lcd.setCursor(0,0);
  lcd.print("   OLA!!!     ");
  Serial.begin(9600);
}
 
void loop(){
 
  if(Serial.available() > 0){
    char data = Serial.read();
   
    if(data == 'S'){
     
        lcd.clear();
         lcd.setBacklight(HIGH); 
        lcd.setCursor(0,0); //SETA A POSIÇÃO DO CURSOR
        lcd.print("  NAO ENTRE E  "); //IMPRIME O TEXTO NO DISPLAY LCD
        lcd.setCursor(0,1); //SETA A POSIÇÃO DO CURSOR
        lcd.print("NAO FACA BARULHO");

       
      
    }
    else if(data == 'K'){
      
        lcd.clear();
         lcd.setBacklight(HIGH); 
        lcd.setCursor(0,0); //SETA A POSIÇÃO DO CURSOR
        lcd.print("PODE ENTRAR, MAS"); //IMPRIME O TEXTO NO DISPLAY LCD
        lcd.setCursor(0,1); //SETA A POSIÇÃO DO CURSOR
        lcd.print("AINDA EM REUNIAO!");
;
       
    }
    else if(data == 'F'){
     
        lcd.clear();
         lcd.setBacklight(HIGH); 
        lcd.setCursor(0,0); //SETA A POSIÇÃO DO CURSOR
        lcd.print("PODE ENTRAR :)"); //IMPRIME O TEXTO NO DISPLAY LCD
      

       
    }
  }
}
