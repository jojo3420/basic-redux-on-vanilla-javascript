

import { createStore } from 'redux';


const counterEl = document.getElementById('counter');
const toggleEl = document.querySelector('.toggle');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');


// Action
const TOGGLE = 'TOGGLE';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// Action Creator
const toggle = () => ({
  type: TOGGLE,
});

const increase = (number) => ({
  type: INCREASE,
  number,
});

const decrease = (number) => ({
  type: DECREASE,
  number
});



const initialState = {
  toggle: false,
  counter: 0,
};
// 3. reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.number,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - action.number
      }
    default:
      return state;
  }
}



// create Store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const render = () =>  {
  const state = store.getState();
  if (state.toggle) {
    toggleEl.classList.add('active');
  } else {
    toggleEl.classList.remove('active');
  }

  counterEl.innerText = state.counter;
}
// first rendering
render();

// subscribe
const disSubscribe = store.subscribe(render);

// dispatch
increaseBtn.onclick = () => {
  store.dispatch(increase(1));
}
decreaseBtn.onclick = () => {
  store.dispatch(decrease(1));
}

toggleEl.onclick = () => {
  store.dispatch(toggle());
}
