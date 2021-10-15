const express = require('express')
const bodyParser = require('body-parser')
//var crypto = require("crypto-js");
var crypto = require('crypto');
var app = express()

app.set('port',process.env.PORT||1800)

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static('public'))


var encrypted_key = "";
var key = "";
var iv = "";
var str = "";


//CIFRADOS

app.post('/cifrar256', (req,res)=>{

    str = req.body.textoPlano1;
    key = req.body.llave1;
    iv = crypto.randomBytes(8).toString('hex');
    var encrypt = ((val) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
    });

    encrypted_key = encrypt(str);

    //exportar(encrypted_key,nombreArchivo)

    return res.send(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                    <link href="estilos.css" rel="stylesheet">
                    <title>Cifrado AES 256</title>
                    </head>
                    <body>
                        <div class="contenedor">
                            <h1 class="titulo">Cifrado con AES 256</h1>
                            <br>
                            <br>
                            <label for="exampleInputEmail1" class="form-label">Texto cifrado</label>
                            <input type="text" class="form-control" id="texto" aria-describedby="emailHelp" value="${encrypted_key}">
                            <br>
                            <label for="exampleInputEmail1" class="form-label">IV necesario para descifrar</label>
                            <input type="text" class="form-control" id="iv" aria-describedby="emailHelp" value="${iv}">
                            <br>
                            <button class="btn btn-primary" id="exportar" >Descargar Cifrado</button>
                            <br>
                            <br>
                            <br>
                            <h3>¿Qué es el iv?</h3>
                            <p>Es un vector de inicialización que debe ser incierto y muy único. Sin embargo, un iv ideal será criptográficamente aleatorio. No es necesario que sea un secreto. Puede contener datos de tipo string, Buffer, TypedArray o DataView. Si el cifrado no requiere iv, entonces puede ser nulo.<p>
                            <br>
                            <br>
                            <br>
                            <a class="link" href="descifrar.html">¡Pica aquí para descifrar!</a>
                            <br>
                            <br>
                        </div>
                        <script src="descargar.js"></script>
                    </body>
                    </html>
                        
                `)


})



app.post('/cifrar192', (req,res)=>{

    str = req.body.textoPlano2;
    key = req.body.llave2;
    iv = crypto.randomBytes(8).toString('hex');
    console.log(iv)

    var encrypt = ((val) => {
    let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
    });

    encrypted_key = encrypt(str);

    //var nombreArchivo = 'cifradoAES192.txt'
    //exportar(encrypted_key,nombreArchivo)

    return res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="estilos.css" rel="stylesheet">
    <title>Cifrado AES 256</title>
    </head>
    <body>
        <div class="contenedor">
            <h1 class="titulo">Cifrado con AES 192</h1>
            <br>
            <br>
            <label for="exampleInputEmail1" class="form-label">Texto cifrado</label>
            <input type="text" class="form-control" id="texto" aria-describedby="emailHelp" value="${encrypted_key}">
            <br>
            <label for="exampleInputEmail1" class="form-label">IV necesario para descifrar</label>
            <input type="text" class="form-control" id="iv" aria-describedby="emailHelp" value="${iv}">
            <br>
            <button class="btn btn-primary" id="exportar" >Descargar Cifrado</button>
            <br>
            <br>
            <br>
            <h3>¿Qué es el iv?</h3>
            <p>Es un vector de inicialización que debe ser incierto y muy único. Sin embargo, un iv ideal será criptográficamente aleatorio. No es necesario que sea un secreto. Puede contener datos de tipo string, Buffer, TypedArray o DataView. Si el cifrado no requiere iv, entonces puede ser nulo.<p>
            <br>
            <br>
            <br>
            <a class="link" href="descifrar.html">¡Pica aquí para descifrar!</a>
            <br>
            <br>
        </div>
        <script src="descargar.js"></script>
    </body>
    </html>
        
`)


})



app.post('/cifrar128', (req,res)=>{

    str = req.body.textoPlano3;
    key = req.body.llave3;
    iv = crypto.randomBytes(8).toString('hex');

    var encrypt = ((val) => {
    let cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
    });

    encrypted_key = encrypt(str);

    //var nombreArchivo = 'cifradoAES128.txt'
    //exportar(encrypted_key,nombreArchivo)

    return res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="estilos.css" rel="stylesheet">
    <title>Cifrado AES 128</title>
    </head>
    <body>
        <div class="contenedor">
            <h1 class="titulo">Cifrado con AES 256</h1>
            <br>
            <br>
            <label for="exampleInputEmail1" class="form-label">Texto cifrado</label>
            <input type="text" class="form-control" id="texto" aria-describedby="emailHelp" value="${encrypted_key}">
            <br>
            <label for="exampleInputEmail1" class="form-label">IV necesario para descifrar</label>
            <input type="text" class="form-control" id="iv" aria-describedby="emailHelp" value="${iv}">
            <br>
            <button class="btn btn-primary" id="exportar" >Descargar Cifrado</button>
            <br>
            <br>
            <br>
            <h3>¿Qué es el iv?</h3>
            <p>Es un vector de inicialización que debe ser incierto y muy único. Sin embargo, un iv ideal será criptográficamente aleatorio. No es necesario que sea un secreto. Puede contener datos de tipo string, Buffer, TypedArray o DataView. Si el cifrado no requiere iv, entonces puede ser nulo.<p>
            <br>
            <br>
            <br>
            <a class="link" href="descifrar.html">¡Pica aquí para descifrar!</a>
            <br>
            <br>
        </div>
        <script src="descargar.js"></script>
    </body>
    </html>
        
`)

})


//DESCIFRADOS

app.post('/descifrar256', (req,res)=>{

    var IV = req.body.ivUno
    var ciphe = req.body.textoci1
    var llave = req.body.llaveUno
    console.log(ciphe)
    console.log(llave)

    var decrypt = ((encrypted) => {
        let decipher = crypto.createDecipheriv('aes-256-cbc', llave, IV);
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        return (decrypted + decipher.final('utf8'));
      });
      
      original_phrase = decrypt(ciphe);
      return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="estilos.css" rel="stylesheet">
      <title>Descifrado AES 256</title>
      </head>
      <body>
          <div class="contenedor">
              <h1 class="titulo">Descifrado AES 256</h1>
              <br>
              <br>
              <label for="exampleInputEmail1" class="form-label">Texto Plano</label>
              <input type="text" class="form-control" id="texto" aria-describedby="emailHelp" value="${original_phrase}">
              <br>
              <br>
              <br>
              <a class="link" href="index.html">¡Pica aquí para cifrar!</a>
              <br>
              <br>
          </div>
          <script src="descargar.js"></script>
      </body>
      </html>
          
  `)
})



app.post('/descifrar192', (req,res)=>{

    var IV = req.body.ivDos
    var ciphe = req.body.textoci2
    var llave = req.body.llaveDos
    console.log(ciphe)
    console.log(llave)

    var decrypt = ((encrypted) => {
        let decipher = crypto.createDecipheriv('aes-192-cbc', llave, IV);
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        return (decrypted + decipher.final('utf8'));
      });
      
      original_phrase = decrypt(ciphe);
      return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="estilos.css" rel="stylesheet">
      <title>Descifrado AES 192</title>
      </head>
      <body>
          <div class="contenedor">
              <h1 class="titulo">Descifrado AES 192</h1>
              <br>
              <br>
              <label for="exampleInputEmail1" class="form-label">Texto Plano</label>
              <input type="text" class="form-control" id="texto" aria-describedby="emailHelp" value="${original_phrase}">
              <br>
              <br>
              <br>
              <a class="link" href="index.html">¡Pica aquí para cifrar!</a>
              <br>
              <br>
          </div>
          <script src="descargar.js"></script>
      </body>
      </html>
          
  `)
})



app.post('/descifrar128', (req,res)=>{

    var IV = req.body.ivTres
    var ciphe = req.body.textoci3
    var llave = req.body.llaveTres
    console.log(ciphe)
    console.log(llave)

    var decrypt = ((encrypted) => {
        let decipher = crypto.createDecipheriv('aes-128-cbc', llave, IV);
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        return (decrypted + decipher.final('utf8'));
      });
      
      original_phrase = decrypt(ciphe);
      return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="estilos.css" rel="stylesheet">
      <title>Descifrado AES 128</title>
      </head>
      <body>
          <div class="contenedor">
              <h1 class="titulo">Descifrado AES 128</h1>
              <br>
              <br>
              <label for="exampleInputEmail1" class="form-label">Texto Plano</label>
              <input type="text" class="form-control" id="texto" aria-describedby="emailHelp" value="${original_phrase}">
              <br>
              <br>
              <br>
              <a class="link" href="cifrar.html">¡Pica aquí para cifrar!</a>
              <br>
              <br>
          </div>
          <script src="descargar.js"></script>
      </body>
      </html>
          
  `)
})






app.listen(app.get('port'),()=>{
    console.log(`Escuchando desde el puerto ${app.get('port')}`)
})



/*

app.post('/descifrarCifrado' , (req,res)=>{


    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    
    // Convertir a cadena utf8
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

    return console.log(decrypted)
})


app.post('/cifrarTexto', (req,res)=>{
    str = req.body.textoPlano;
    key = req.body.llave;
    iv = req.body.llave;
    cifrado = CryptoJS.AES.encrypt(str,key);

    encrypted = CryptoJS.AES.encrypt(str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    
    encrypted = encrypted.toString();

    return console.log(encrypted)

})


*/