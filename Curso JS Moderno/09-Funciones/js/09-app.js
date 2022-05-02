const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){ 
        console.log("pausando...");
    },
    borrar: function(id){
        console.log(`borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando LA playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist con el ${nombre}`);
    }

}

reproductor.reproducir (30);
reproductor.reproducir (20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("milista");
reproductor.crearPlaylist("HEAVY");
reproductor.reproducirPlaylist("HEAVY");