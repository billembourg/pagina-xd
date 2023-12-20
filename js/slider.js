var imagenes = ['img/img1.png', 'img/img2.jpg', 'img/img3.jpg'],
    cont=0;

function carrusel(slider){
    slider.addEventListener('click', e =>{
        let atras = slider.querySelector('.atras'),
            adelante = slider.querySelector('.adelante'),
            img = slider.querySelector('img'),
            tgt = e.target;

            if(tgt==atras){
                if(cont > 0){
                    img.src = imagenes[cont - 1];
                    cont--;
                }else{
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length - 1;
                }

            }else if(tgt == adelante){
                if(cont < imagenes.length - 1){
                    img.src = imagenes[cont + 1];
                    cont++;
                }else{
                    img.src = imagenes[0];
                    cont = 0;
                }
            }           
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let slider = document.querySelector('.slider');
    carrusel(slider);
});
