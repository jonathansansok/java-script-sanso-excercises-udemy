const reproductor = {
    cancion: "",
    reproducir:  id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:  () => console.log("pausando..."),
    borrar: id => console.log(`borrando cancion... ${id}`),
    crearPlaylist:  nombre  => console.log(`Creando LA playlist ${nombre}`),
    reproducirPlaylist:  nombre => console.log(`Reproduciendo la playlist con el ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Anadiendo cancion ${cancion}`);
    },


    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = "Enter Sadman"
reproductor.obtenerCancion; 




reproductor.reproducir (30);
reproductor.reproducir (20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("milista");
reproductor.crearPlaylist("HEAVY");
reproductor.reproducirPlaylist("HEAVY");