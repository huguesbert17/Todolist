import React, { useContext } from "react";
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
		background: transparent;
	}
`
const Title = styled.h2`
	font-size: 5em;
	color: #EDDEDF;
	font-weight: 200;
`

//create your first component
const Home = () => {
	const {state, dispatch} = useContext(TodoContext)
	return (
		<div className="row">
			<div className="col-md-6 mx-auto">
				<Title className="text-center">todos</Title>
				<Wrapper className="shadow p-3 mb-1 mt-0 bg-white rounded">
					<input type="text" placeholder="e.g. Buy bath soap tonight"/>
				</Wrapper>
			</div>
		</div>
	);
};

export default Home;
