<template>
  <div class="home">
    <div class="">
      <h1>Application github ynov</h1>
      <div class="uk-column-1-3 uk-form-horizontal">
        <div>
          <label class="uk-form-label">Choix du projet</label>
          <select  v-model="selectedRepositories" class="uk-select">
              <option v-for="(repository, index) in repositories" :key="index">{{ repository.name }} : ({{ repository.owner.login }})</option>
          </select>
        </div>
        <div>
          <label class="uk-form-label">Choix de la periode</label>
          <date-picker i18n="EN" @selected="onDateSelected" compact="true"> </date-picker>
        </div>
        <div>
          <label class="uk-form-label">Choix du compte</label>
          <select class="uk-select" multiple="true" v-model="listeSelectedUser" >
              <option v-for="(profile, index) in profiles" :key="index" v-bind:value="index">{{ profile }}</option>
          </select>
        </div>
      </div>
      <button class="uk-button uk-button-primary">Valider</button>
    </div>
    <div class="">
      <git-user v-for="(commit, index) in listeCommit" :key="index" user="{{ commit.author }}" git="github-ynov-vue"></git-user>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GitUser from "./common/GitUser";
axios.defaults.headers.common["Authorization"] =
  "token 645d5398ff0a8af392ece93cbf64a480be5d6cde";

export default {
  name: "Home",
  components: { axios, GitUser },
  data() {
    return {
      selectedDate: {
        start: "",
        end: ""
      },
      repositories: {},
      selectedRepositories: {},
      listeSelectedUser: [],
      ListeUsersSelected: [],
      listeCommit: [],
      profiles: [
        "Killy85",
        "Nair0fl",
        "raphaelCharre",
        "mathiasLoiret",
        "thomaspich",
        "TeofiloJ",
        "Grigusky",
        "Dakistos",
        "mael61",
        "KevinPautonnier",
        "BenoitCochet",
        "sfongue",
        "ClementCaillaud",
        "gfourny",
        "Mokui",
        "LordInateur",
        "AntoineGOSSET",
        "etienneYnov",
        "Coblestone",
        "AlexDesvallees",
        "rudy8530",
        "benjaminbra",
        "msaintmartin",
        "maximerolland",
        "alixnzt"
      ]
    };
  },
  methods: {
    onDateSelected: function(daterange) {
      this.selectedDate = daterange;
      let dateDebut = new Date(this.selectedDate.start);
      let dateFin = new Date(this.selectedDate.fin);
    },
    recupereUtilisateurGit(login) {
      axios.get("https://api.github.com/users/" + login).then(r => {
        this.ListeUsersSelected.push(r.data);
      });
    },
    recupereListeRepertoireGit(repertoireName) {
      axios
        .get("https://api.github.com/search/repositories?q=" + repertoireName)
        .then(r => {
          this.repositories = r.data.items;
        });
    },
    recupereListeCommit(user, repo) {
      axios
        .get("https://api.github.com/repos/" + user + "/" + repo + "/commits")
        .then(r => {
          this.listeCommit.push(r.data);
        });
    }
  },
  beforeMount() {
    this.recupereListeRepertoireGit("github-ynov-vue");
    this.recupereListeCommit("maximerolland", "github-ynov-vue");
  }
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
