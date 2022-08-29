<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="3000"
      background=""
      style="text-shadow: 1px 1px 2px #333"
      fade
    >
      <b-carousel-slide
        id="c1"
        img-src="https://img.freepik.com/fotos-gratis/fundo-de-folhas-verdes-tropicais_53876-88891.jpg?t=st=1655655273~exp=1655655873~hmac=130a104d203ac8ab45624aaaa9f7d5fb5dea77ef494644a3636d38a0f738fc3a&w=1380"
      >
      </b-carousel-slide>
      <b-carousel-slide
        id="c2"
        img-src="https://img.freepik.com/fotos-gratis/foto-detalhada-de-uma-bela-folha-de-samambaia-iluminada-por-raios-de-sol-raios-de-sol-de-primavera-brilham-atraves-das-folhas-verdes-de-samambaias-nas-profundezas-de-uma-pitoresca-floresta-de-pinheiros-nas-montanhas_661209-107.jpg?t=st=1655656374~exp=1655656974~hmac=1dfe80525fb4a93927ca945d17d6590923c797d847a3623393ae8bdb99fc28d1&w=1380"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script></script>

<style>
#c1 {
  height: 620px;
}
#c2 {
  height: 620px;
}
@media (max-width: 844px) {
  .dprincipal {
    width: auto;
    height: auto;
  }
  .row {
    margin: 0;
  }
  .navpr {
    box-shadow: none;
  }

  .navbar-nav {
    margin-right: 100px;
  }
  #c1 {
    height: 280px;
  }
  #c2 {
    height: 280px;
  }
  .section {
    margin: 0 0 30% 0;
  }
  #footer {
    margin: 0 0 0 5%;
    display: flex;
  }
  .titlepl {
    font-size: 25px;
    text-align: left;
    margin: 0 0 5% 5%;
    padding: 10px;
  }
  .titlepl2 {
    white-space: nowrap;
    font-size: 25px;
    text-align: left;
    margin: 10% 0 5% 6%;
    padding: 10px;
  }
  .col {
    padding: 20px;
    margin: 0 20% 0 0;
  }
  .card {
    margin-left: 50px;
    width: 270px;
  }
}
</style>
