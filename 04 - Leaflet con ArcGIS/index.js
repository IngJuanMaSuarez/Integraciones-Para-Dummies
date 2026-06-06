const tokenDeAcceso = "AAPTaxmJF5r8eDtOUOnKY-ouSTA..rNf99MyRVFxnrt5-q7XUkYIMqosoWZhwL2Zdqlvqv39CO_SHkbaM1TSZZOqi4caBY1tPT3dKI-7U7K8gr3VVgJHd2t9fia2hJlMBYX2qOce8JxxsR22t34sZrO0DQYRRsrap0plbBWlD_NN0r362gsiJe_lwvSAYj92GY8mSl7GDCw54gNZrW3rD-fjjBnemCW5vF6a2gyQaQOnaaW1r8xD6b7kBcNGZZLJfMdM3CxoMvH5uWzi24AEKbV_p3oY.AT1_VSlyNoR3"
const mapaBase = "arcgis/outdoor"

var mapa = L.map("contenedor-del-mapa").setView([4.65, -74.12], 11)
L.esri.Vector.vectorBasemapLayer(mapaBase, {token: tokenDeAcceso}).addTo(mapa)

var marcador = L.marker([4.6281045, -74.0654527]).addTo(mapa)
marcador.bindPopup("Hola GeoCositas")

const circulo = L.circle([4.613573, -74.063889], {
    radius: 1000,
    color: "green"
}).addTo(mapa)
circulo.bindPopup("Programación en SIG")

function clicSobreMapa(evento){
    alert("Diste clic en el punto con coordenadas latitud: " + evento.latlng.lat + " y longitud: " + evento.latlng.lng)
}

mapa.on("click", clicSobreMapa);

console.log(mapa)
console.log(marcador)
console.log(circulo)