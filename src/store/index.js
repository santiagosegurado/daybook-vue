import { createStore } from 'vuex'
import daybook from '@/modules/daybook/store/daybook/index';

const store = createStore({
  modules: {
    daybook 
  }
})


export default store