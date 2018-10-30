import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    deletedTasks: [],
    teams: [],
  },
  mutations: {
    createNewTask(state, task) {
      state.tasks.push(task);
    },

    removeTask(state, task) {
      state.deletedTasks.push(state.tasks.splice(state.tasks.indexOf(task), 1));
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },

    addDeletedTaskToTasks(state, deletedTask) {
      state.tasks.push(deletedTask);
    }
  },
  actions: {

  }
})
