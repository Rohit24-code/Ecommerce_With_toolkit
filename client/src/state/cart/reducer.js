export const cartReducer={
    setItem:(state,action)=>{
        state.items=action.payload
    },
    addToCart:(state,action)=>{
        state.cart = [...state.cart,action.payload.item];
    },
    removeFromCart :(state,action)=>{
        state.cart = state.cart.filter((item)=>item.id!==action.payload.id)
    },
    increaseCount:(state,action)=>{
        state.cart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                item.count++
            }
            return item
        })
    },
    //modified
    decreaseCount:(state,action)=>{
        state.cart = state.cart.map((item,i)=>{
            if(item.id === action.payload.id){
                item.count--
                if(item.count<=0){
                   state.cart.slice(i,1)
                }
            }
            return item
        })
    },

    setIsCartOpen:(state)=>{
        state.isCartOpen=!state.isCartOpen
    }
}