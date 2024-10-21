 const canciones = [
    {
      nombre: 'Tal vez',
      artista: 'Paulo Londra',
      img: 'assets/images/tal vez.jpg',
      ruta: 'assets/music/Paulo Londra - Tal Vez (Official Video).mp3'
    },
    {
      nombre: 'Forever Happy',
      artista: 'Miky Woodz, Juhn',
      img: 'assets/images/forever.jpg',
      ruta: 'assets/music/Miky Woodz, Juhn - Forever Happy (Audio Oficial).mp3'
    },
    {
      nombre: 'Imitadora',
      artista: 'Romeo Santos',
      img: 'assets/images/imitadora.jpg',
      ruta: 'assets/music/Imitadora - Romeo Santos, letra.mp3'
    },
    {
      nombre: 'Amor de antes',
      artista: 'Plan B, Ñengo Flow y Jory Boy',
      img: 'assets/images/antes.jpg',
      ruta: 'assets/music/Amor De Antes Remix LETRA - Plan B, Ñengo Flow Amaro y Jory Boy  REGGAETON ABRIL 2013 VIDEO.mp3'
    },
    {
      nombre: '7 Días',
      artista: 'Romeo Santos',
      img: 'assets/images/romeo.jpg',
      ruta: 'assets/music/7 Días.mp3'
    },
  ]
  
  let indiceActual = 0;
  
  const audio = document.getElementById('audio');
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const former = document.getElementById('former')
  const forward = document.getElementById('forward');
  const rewind = document.getElementById('rewind');
  const following = document.getElementById('following')
  const stop = document.getElementById('stop');
  const audioSource = document.getElementById("audioSource");
  const songName = document.getElementById("songName");
  const imagen = document.getElementById("img")
  const artista = document.getElementById('artist')
  
  // Cargar la primera canción
  cargarCancion(indiceActual);
  
  // Función para cargar una canción
  function cargarCancion(indice) {
    songName.textContent = canciones[indice].nombre;
    artista.textContent = canciones[indice].artista
    imagen.src = canciones[indice].img;
    audioSource.src = canciones[indice].ruta;
    audio.load();
  }
  
  // Eventos
  play.addEventListener('click', () => audio.play());
  
  pause.addEventListener('click', () => audio.pause());
  
  rewind.addEventListener('click', () => audio.currentTime = Math.max(0, audio.currentTime - 10));
  
  forward.addEventListener('click', () => audio.currentTime += 10);
  
  stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
  });
  
  // Cambiar a la siguiente canción al clickiar
  following.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % canciones.length; // Cambiar al siguiente índice
    cargarCancion(indiceActual); // Cargar la nueva canción
    audio.play(); // Reproducir automáticamente
  })
  
  // retroceder a la siguiente canción al clickiar
  former.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + canciones.length) % canciones.length; // Cambiar al índice anterior, con ajuste para el caso negativo
    cargarCancion(indiceActual); // Cargar la nueva canción
    audio.play(); // Reproducir automáticamente
  })
  
  // Cambiar a la siguiente canción al terminar
  audio.addEventListener('ended', () => {
    indiceActual = (indiceActual + 1) % canciones.length; // Cambiar al siguiente índice
    cargarCancion(indiceActual); // Cargar la nueva canción
    audio.play(); // Reproducir automáticamente
  });