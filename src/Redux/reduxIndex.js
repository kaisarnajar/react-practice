const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
   movieList : [],
   user : "Ram"
}

//Reducer

const rootReducer = (state = initialState, action) =>
{
   if(action.type === 'ADD_MOVIE')
   {
      return{
         ...state,
         movieList : action.list
      }
   }

   if(action.type === 'CHANGE_USER')
   {
      return{
         ...state,
         user : action.name
      }
   }

   return state;

}

//Create Store

const store = createStore(rootReducer);
console.log(store.getState());


//Subscription

store.subscribe(()=>{
   console.log(store.getState());
})


//Dispatch Action

store.dispatch({
   type : 'ADD_MOVIE',
   list : {
      name : "DDLJ",
      year : "1990"
   }
})

store.dispatch({
   type : 'CHANGE_USER',
   name : "Shyam"
})





