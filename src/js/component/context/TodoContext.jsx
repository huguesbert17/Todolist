import React, { createContext, useReducer } from "react"

const initialState = []

const TodoContext = createContext(initialState)

const reducer = (state, action) => {
    if(action.type === "ADD_TO_TODO") return [...state, action.payload]
    if(action.type === "DELETE_FROM_TODO") {
        const temp = [...state]
        const index = state.length === 1 ? action.payload : action.payload+1
        temp.splice(action.payload, 1)
        return temp
    }
    return state
}

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <TodoContext.Provider value={{ state, dispatch}}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoContext
