<template>
  <div class="info">
    <h2>Creador del Proyecto</h2>
    <p>Piero Montalvo Mendoza</p>
    <h2>Tecnologia Utilizada</h2>
    <p>Vuecli - Vuex - Router</p>
    <h2>Instituto</h2>
    <p>IDAT - Bootcamp 'PachaQtec'</p>
    <h1>2020</h1>
  </div>
</template>

<script>
export default {
  name: 'Info',
};
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  color: #333333;
  font-weight: lighter;
  font-size: 27px;
}

p {
  font-weight: bolder;
  font-size: 17px;
  color: #9a5801;
}

h1 {
  font-size: 40px;
}
</style>
