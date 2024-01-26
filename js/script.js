window.addEventListener("load",function(){

    relogio = {horas:"0", minutos:"0", segundos:"0", milissegundos:"0"};

    document.getElementById("tempo").innerText = `${relogio.horas.padStart(2,'0')}:${relogio.minutos.padStart(2,'0')}:${relogio.segundos.padStart(2,'0')} ${relogio.milissegundos.padStart(3,'00')}`;
    
    
    document.getElementById("iniciar").addEventListener("click",function(event){

        event.preventDefault();
        txtBtn = document.getElementById("iniciar").innerHTML;

        if(txtBtn == "Iniciar" || txtBtn == "Continuar"){

            document.getElementById("iniciar").innerHTML = "Pausar";

            timer = setInterval(function(){
                relogio.milissegundos++;

                if(relogio.milissegundos > 999){
                    relogio.milissegundos = 0;
                    relogio.segundos++;
                }

                if(relogio.segundos > 59){
                    relogio.segundos = 0;
                    relogio.minutos++;
                }

                if(relogio.minutos > 59){
                    relogio.minutos = 0;
                    relogio.horas++;
                }
                
                if(relogio.horas > 23){
                    relogio.horas = 0;
                }
                
                ajustarPonteiros();
            },1);

            if(relogio.minutos == 30){

            }
        }else{
            if(txtBtn == "Pausar"){
                clearInterval(timer);
                document.getElementById("iniciar").innerHTML = "Continuar";
            }
        }
    });

    this.document.getElementById("parar").addEventListener("click",function(event){
        event.preventDefault();
        clearInterval(timer);

        relogio.horas = 0;
        relogio.minutos = 0;
        relogio.segundos = 0;
        relogio.milissegundos = 0;
        
        ajustarPonteiros();

        document.getElementById("iniciar").innerHTML = "Iniciar";
    })

    function ajustarPonteiros(){
        document.getElementById("tempo").innerText = `${(relogio.horas).toString().padStart(2,'0')}:${(relogio.minutos).toString().padStart(2,'0')}:${(relogio.segundos).toString().padStart(2,'0')} ${(relogio.milissegundos).toString().padStart(3,'00')}`;
    }
});