
document.querySelector('#exportar').onclick = function(){
    const cifrado = document.querySelector('#texto').value;
    const nombreDelArchivo = 'cifradoAES.txt';
    exportarr(cifrado,nombreDelArchivo)
}



function exportarr(cipher, nombreFile){
    const a = document.createElement("a");
    const contenido = cipher,
        blob = new Blob([contenido],{type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = nombreFile;
    a.click();
    window.URL.revokeObjectURL(url);
};
