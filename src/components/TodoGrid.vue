<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md4 v-for="card in orderedCards" :key="card.order" class="pa-1">

        <div class="pa-2 todogrid">

          <scrollbar v-once :settings="settings" @ps-scroll-y="scrollHandle" v-bind:style="{ height: windowHeight}">
          

            <v-subheader class="px-0 py-1 subheading todocard--text">{{ card.title | capitalize}}</v-subheader>

            <v-card v-for="task in tasks" :key="task.created" v-if="card.title == task.card" color="todocard" class="white--text mb-3 sm-12">
              <v-card-title primary-title>
                <div class="subheading d-block">{{ task.title }}</div>
                <v-card-text class="px-0 pb-0 caption"><timeago :since="task.created"></timeago></v-card-text>
              </v-card-title>
            </v-card>

            <span class="px-0 py-1 body-2 todocard--text">Add task</span>

          </scrollbar>

        </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  import _ from 'lodash'

  export default {

    data: () => ({

      cards: [

        {title: 'todo', order: 1},
        {title: 'doing', order: 2},
        {title: 'done', order: 3}

      ],

      tasks: [

        {title: 'Fix header', created: 1520968528, card: 'todo'},
        {title: 'Fix contact link', created: 1519968528, card: 'done'},
        {title: 'Change background color on form elements', created: 1518968528, card: 'doing'},
        {title: 'Change background color on form button', created: 1518968528, card: 'todo'},
        {title: 'Change Google Analytics id', created: 1517968528, card: 'todo'},
        {title: 'Add more opacity to modal frame', created: 1516968528, card: 'todo'},
        {title: 'Change email address on contact page', created: 1515968528, card: 'done'},
        {title: 'Change email address on contact page #2', created: 1515968528, card: 'todo'}

      ],

      settings: {
        maxScrollbarLength: 500
      },

      windowHeight: 0,

    }),

    created() {
      this.taskCreated()
    },

    computed: {

      orderedCards: function () {
        return _.orderBy(this.cards, 'order')
      },

      filteredTasks: function () {
        var self = this
        return self.users.filter(function (user) {
          return user.name.indexOf(self.searchQuery) !== -1
        })
      }

    },

    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },

    methods: {
      taskCreated() {
        this.tasks.forEach(task => {
          task.created = task.created * 1000 //Convert PHP timestamp to js timestamp
        });
      },

      scrollHandle(evt) {
        console.log(evt)
      }

    },

    /*watch: {
      windowHeight(newHeight, oldHeight) {
       console.log('it changed from ' + newHeight + ' / ' + oldHeight);
      }
    },*/

    mounted() {
      let that = this;
      this.$nextTick(function() {
        window.addEventListener('resize', function(e) {
          that.windowHeight = window.innerHeight
          console.log(that)
        });
      })
    },

  }
</script>