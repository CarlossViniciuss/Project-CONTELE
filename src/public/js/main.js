//adicionando mapa
const map = L.map('map-template').setView([-23.5489, -46.6388], 4);

//estilos do mapa
const tileURL = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL);
tiles.addTo(map);

//JSON
const staticURL = 'http://images.contelege.com.br/poi.json';
async function getMapI(){
  const response = await fetch(staticURL);
  const data = await response.json();

  //Adicionando marcadores
  var markers = new L.MarkerClusterGroup({
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount()+'').length;
        return L.divIcon({ 
            html: cluster.getChildCount(), 
            className: 'cluster digits-'+digits,
            iconSize: null 
        });
    }
});

  
  for(item in data){
    markers.addLayer(L.marker([data[item].latitude, data[item].longitude]).bindPopup(data[item].name));
    map.addLayer(markers);
  }
}

getMapI();