<template>
  <section>
    <div class="card-group">
      <PlantaHome v-for="planta in plantas" :key="planta.id" :card="planta" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import PlantaHome from "@/layouts/PlantaHome.vue";
export default {
  components: { PlantaHome },
  data() {
    return {
      plantas: [],
    };
  },
  async created() {
    const plantas = await axios.get("http://177.74.210.90/plantas/");
    this.plantas = plantas.data;
  },
};
</script>

<style></style>
