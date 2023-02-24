const redux = require("redux");
const redux_logger = require("redux-logger")

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const logger = redux_logger.createLogger()


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

const initialStateCake = {
  numOfCake: 10,
};

const initialStateIcecream = {
    numOfIcecream: 5,
  };

const reducerCake = (state = initialStateCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
        return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

const reducerIcecream = (state = initialStateIcecream, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
          return { ...state, numOfIcecream: state.numOfIcecream - 1 };
      default:
        return state;
    }
  };

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Action"
  };
}

function Buy_Icecream() {
    return {
      type: BUY_ICECREAM,
      info: "First Action"
    };
}

const reducer = combineReducer({
    cake: reducerCake,
    icecream: reducerIcecream
})
const store = createStore(reducer, redux.applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(Buy_Icecream());
store.dispatch(Buy_Icecream());
store.dispatch(Buy_Icecream());
unsubscribe();
