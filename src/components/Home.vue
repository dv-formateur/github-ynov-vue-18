<template>
  <div class="home">
    <div class="uk-position-top">
      <h1>Application github ynov</h1>
      <form>
        <label class="uk-form-label">Choix du projet</label>
          <select class="uk-select">
              <option></option>
              <option></option>
          </select>
          <label class="uk-form-label">Choix de la periode</label>
             <date-picker i18n="EN"> </date-picker>
          <label class="uk-form-label">Choix du compte</label>
          <select class="uk-select">
              <option></option>
              <option></option>
          </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
