<template>
  <div class="about">
    <h1>Daily To Do</h1>
    <div v-if="todo">
      <h2>{{ todo.Date.Month }}/{{ todo.Date.Day }}/{{ todo.Date.Year }}</h2>
    </div>
    <div v-if="todo">
      <div class="todoItems" v-for="item in todo.ToDoItem" :key="item._id">
        <div class="todoItem">
          <input
            type="checkbox"
            class="todoItem--check"
            v-model="item.Completed"
          />
          <input type="text" class="todoItem--label" v-model="item.Label" />
        </div>
      </div>
       <div class="journalEntries" v-for="entry in todo.JournalEntries" :key="entry._id">
        <div class="entryType">
          <input type="text" v-model="entry.EntryType">
        </div>
        <div class="entryText">
          <input type="text" v-model="entry.Text">
        </div>
      </div>
    </div>
    <button v-on:click="saveData()">Save</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ToDoDate from "../models/ToDoDate";
import DataService from "../services/dataService";

@Options({
  components: {},
  data() {
    return {
      loading: false,
      todo: null,
      error: null,
      date: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.setDate();
    this.fetchData();
  },
  methods: {
    setDate() {
      const d = new Date();
      const retVal = new ToDoDate();
      retVal.Day = d.getDate();
      retVal.Month = d.getMonth() + 1;
      retVal.Year = d.getFullYear();
      this.date = new ToDoDate(
        undefined,
        retVal.Day,
        retVal.Month,
        retVal.Year
      );
    },
    saveData() {
      for (let i = 5; i < this.todo.ToDoItem.length; i++) {
        if (this.todo.ToDoItem[i].Label == "") {
          this.todo.ToDoItem.splice(i,1)
        }
      }

      DataService.Todos.save(this.todo, (ret, err) => {
        this.todo.ToDoItem.push({ Completed: false, Label: "" });
      });
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      const fetchedId = this.$route.params.id;

      const date = new ToDoDate(undefined, 28, 2, 2021);
      DataService.Todos.findByDate(this.date, (ret, err) => {
        this.todo = ret;
        this.todo.ToDoItem.push({ Completed: false, Label: "" });
      });
      // replace `getPost` with your data fetching util / API wrapper
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.todoItems {
  padding: 0 20rem 0 20rem;
}

.todoItem {
  display: flex;
  justify-content: start;

  &--check {
    display: flex;
    justify-content: center;
  }

  &--label {
    width: 100%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
