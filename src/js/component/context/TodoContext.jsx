import React, { createContext, useReducer } from "react"

const initialState = { }

const TodoContext = createContext(initialState)

const reducer = (state, payload) => {

    return state
}

const state = { }


export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <TodoContext.Provider value={{ state, dispatch}}>
        <props.children/>
    </TodoContext.Provider>
}

export default TodoContext
