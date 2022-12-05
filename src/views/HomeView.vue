<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <div class="flex">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.png"
        width="75"
        height="75"
      />
    </div>
  </header>
  <div class="about">
    <div class="center">
      <h1>Technical Assignment</h1>
      <p>Jabran Saeed</p>
      <img src="@/assets/jab.png" width="100" height="100" alt="Jabran Photo" />
      <div class="btn">
        <RouterLink to="/chart"><button>Start Here</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 50vh;
}
.center {
  margin: 35px auto;
  text-align: center;
}
.flex {
  display: flex;
  direction: row;
  justify-content: center;
}
.desc p {
  margin-left: 20px;
}
h1 {
  color: #fff;
}
img {
  border-radius: 100%;
  margin-top: 50px;
}
.btn {
  margin-top: 35px;
}
.btn button {
  border: 1px solid #ffcd00;
  box-shadow: 1px 1px 3px 0px rgb(98, 100, 87);
  padding: 10px 20px;
  border-radius: 12px;
  font-size: large;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: 200ms;
}
.btn button:hover {
  background: #ffcd00;
  color: #000;
}
</style>
