<template>
  <v-app light>
    <v-toolbar class="ghcolor">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <!-- <v-parallax src="https://github.com/vwxyzjn/vuetify-parallax-starter2/raw/master/src/assets/background1.jpg" height="380"> -->
        <v-parallax src="images/gh55.jpg" height="380">

          <v-layout column align-center justify-center>
            <h2 class="teal--text text--lighten-2 mb-2">ghff55</h2>
            <div class="white--text headline mb-3 text-xs-center">
              <!-- A modern responsive front-end framework based on Material Design -->
            </div>
            <!-- <v-btn light large class="teal lighten-2 white--text"
            href="https://github.com/vwxyzjn/vuetify-parallax-starter">
            Get Started
          </v-btn> -->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4 v-for="d, key in categoryItems" >
                  <v-card class="elevation-0 transparent card-block" v-bind:style="{ backgroundImage: 'url(' + d.img + ')',  }" >
                    <v-card-text class="text-xs-center card-block-text">
                      {{d.text}}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <v-footer class="grey ">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              <!-- Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a> -->
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import category_json from '../static/category.json'

export default {
  data () {
    return {
      title: "GolderHorse 55th - Quick viewer",
      categoryItems: []
    }
  },
  methods: {
    getCategory() {
      console.log("dsfjkldsf");
      this.categoryItems = [...category_json];
      // console.dir(this.categoryItems);

    }
  },
  created() {
    this.getCategory();
  }
}
</script>

<style scope="scss">
.ghcolor {
  background-color: #231916;
}
.card-block {
  height: 200px;
  background-position: center center;
  background-size: 100%;
}
.card-block-text {
  color: #f1f1f1;
  font-size: 30px;
}
</style>
