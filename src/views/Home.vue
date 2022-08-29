<template>
  <div :v-for="planta in plantas" :key="planta.id"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      planta: [],
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

<style></style>
