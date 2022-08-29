<template>
  <div :v-for="planta in plantas" :key="planta.id">
    <div class="titlepl">{{ planta.tipo_planta }}</div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            img-src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
            img-alt="Image"
            img-top
            tag="article"
            style="height: 550px"
            class="titlep mb-2"
          >
            <hr class="hrH" />
            <div class="titulo5">{{ planta.nome }}</div>
            <b-card-text class="textop"> {{ planta.preco }} </b-card-text>
            <b-button class="btn1" href="/produto" variant="primary"
              >Adicionar ao Carrinho</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      plantas: [],
    };
  },
  methods: {
    fetchUsers: function () {
      const baseURI = "http://127.0.0.1:8000/plantas/";
      axios.get(baseURI).then((result) => {
        this.plantas = result.data;
      });
    },
  },
};
</script>

<style>
a.btn.btn1.btn-primary {
  background: rgb(21, 213, 165);
  background: linear-gradient(7deg, rgb(29, 88, 59) 0%, rgb(65, 161, 123) 66%);
  border-radius: 5px;
  border: 0;
  padding: 10px;
  font-size: 17px;
  margin: 10% 0 0 5%;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  white-space: nowrap;
}
a.btn.btn1.btn-primary:hover {
  background: #328051a1;
}
.imgpr {
  width: 100%;
}
.card-img-top {
  height: 300px;
  border-radius: 3px;
}
.titlep {
  text-align: left;
  box-shadow: 0 0 2px 1px rgb(17, 63, 17);
  border-radius: 5px;
}
.card-text {
  font-family: "Jomolhari", serif;
  font-size: 22px;
}
.titlepl {
  margin: 5% 0 0 20%;
  font-size: 29px;
  color: #05701c;
  padding: 30px;
  font-style: normal;
  font-weight: 400;
}

.titlepl2 {
  margin: 5% 0 0 22%;
  font-size: 29px;
  color: #05701c;
  font-style: normal;
  font-weight: 400;
}
.titulo5 {
  color: #328051a1; /* fallback for old browsers */
  color: -webkit-(to top, #001510, #00bf8f); /* Chrome 10-25, Safari 5.1-6 */
  color: #328051a1; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 100%;
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  font-size: 21px;
  font-weight: bold;
  white-space: nowrap;
}
.hrH {
  border-color: black;
}
.textop {
  margin: 3% 0 3% 0;
  text-align: left;
}
</style>
