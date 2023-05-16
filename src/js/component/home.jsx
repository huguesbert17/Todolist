import React, { useContext, useRef } from "react";
import TodoContext from "./context/TodoContext";
import styled from "styled-components"

const Wrapper = styled.div`
	width: 600px;
	margin: 50px auto;
	min-height: 100px;
	border-radius: 3px;
	background: #F9F9F9!important;
	input{
		border: none;
		outline: none;
		width: 100%;
		padding: 10px;
		font-size: 1.5em;
		background: transparent;
	}
`
const Title = styled.h2`
	font-size: 5em;
	color: #EDDEDF;
	font-weight: 200;
`

const Empty = styled.div`
	display: flex;
	flex-direction: column;
`

const TodoList = styled.div`
	li{
		list-style-type: none;
		padding: 15px 0;
		font-size: 1.2em;
		&:not(:first-of-type){
			border-top: 1px solid #F2F0F0;
		}
	}
`

const Footer = styled.div`
	border-top: 1px solid #F2F0F0;
	padding 5px 0;
`

const InputWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid rgb(242, 240, 240);
`
const Li = styled.li`
	display: flex;
	justify-content: space-between;
	svg{
		fill: #ECDDDF;
	}
	span:last-of-type{
		display: none;
		cursor: pointer;
		transition: .3s ease;
	}
	&:hover{
		span:last-of-type{
			display: inline-block
		}
	}
`
const Hint = styled.span`

`

//create your first component
const Home = () => {
	const {state, dispatch} = useContext(TodoContext)
	
	const handleKeyPress = (e) => {
		if(e.key !== "Enter") return
		dispatch({type: "ADD_TO_TODO", payload: e.target.value})
		e.target.value = ""
	}

	const handleDelete = (index) => {
		dispatch({type: "DELETE_FROM_TODO", payload: index})
	}
	
	return (
		<div className="row">
			<div className="col-md-6 mx-auto">
				<Title className="text-center">todos</Title>
				<Wrapper className="shadow mb-1 mt-0 bg-white rounded pb-0">
					<InputWrapper>
						<input onKeyDown={handleKeyPress} className="ps-4" type="text" placeholder="Buy bath soap tonight"/>
						<Hint>
							<i className="fa-regular fa-arrow-turn-down-left"></i>
						</Hint>
					</InputWrapper>
					{state.length > 0 && <>
						<TodoList>
							<ul className="ps-4 pe-4 mb-0">
								{state.map((item, key) => <Li key={key} className="text-muted">
									<span>{item}</span>
									<span onClick={() => handleDelete(key)}>
										<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 6.585 4.593-4.592a1 1 0 0 1 1.415 1.416L9.417 8l4.591 4.591a1 1 0 0 1-1.415 1.416L8 9.415l-4.592 4.592a1 1 0 0 1-1.416-1.416L6.584 8l-4.59-4.591a1 1 0 1 1 1.415-1.416z" fillRule="evenodd"></path></svg>
									</span>									
								</Li>)}
							</ul>
						</TodoList>
						<Footer className="ps-4 pe-4">
							<small className="text-muted">{`${state.length} item${state.length > 1 ? "s" : ""}`} left</small>
						</Footer>
					</>}
					{state.length == 0 && <Empty className="align-items-center justify-content-center pt-5 pb-5">
						<span className="text-muted">Your todo is empty!</span>
					</Empty>}
				</Wrapper>
			</div>
		</div>
	);
};

export default Home;
