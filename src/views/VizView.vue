<script setup>
import SideBar from "../components/SideBar.vue";
import Chart from "../components/Chart.vue";
</script>

<template>
  <main>
    <header>
      <img alt="Vue logo" src="@/assets/logo.png" width="50" height="50" />
      <h2>FE Assignment</h2>
    </header>
    <div class="container">
      <SideBar />
      <Chart />
    </div>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  gap: 0 20px;
}
header h2 {
  color:#fff;
}
img {
  margin-left: 30px;
}
.container {
  display: flex;
  width: 100%;
}
.chart {
  margin: 0 auto;
  width: 100%;
}
</style>
