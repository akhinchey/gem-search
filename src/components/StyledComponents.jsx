import React from 'react';
import { Link } from 'react-router-dom';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled';

export const GlobalStyle = () => (
	<Global
		styles={css`
			body {
				font-family: 'Quicksand', sans-serif;
				margin: 0;
				padding: 0;
			}
		`}
	/>
);

export const AppHeader = styled.h1`
	display: inline;
	color: #fff;
	font-weight: 100;
	@media (max-width: 720px) {
		display: block;
		text-align: center;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
`;

export const GemUl = styled.ul`
	list-style: none;
	padding: 0;
	li {
		border-bottom: 1px solid #b0b0b0;
		margin-bottom: 20px;

		:first-of-type {
			padding-top: 30px;
		}
	}
`;

export const HeaderWrapper = styled.header`
	background: rgb(210,92,113);
	background: linear-gradient(90deg, rgba(210,92,113,1) 26%, rgba(255,198,103,1) 79%);
	padding: 12px;
	margin: 0;
`;

export const SearchSection = styled.div`
	display: inline;
	vertical-align: super;
`;

export const SearchFormWrapper = styled.div`
	display: inline-block;
	padding-left: 20px;
	@media (max-width: 720px) {
		display: block;
		padding-bottom: 20px;
		text-align: center;
		padding-left: 0;
	}
`;

export const SearchForm = styled.form`
	display: inline;
	vertical-align: super;
`;

export const SearchInput = styled.input`
	padding: 9px 50px 10px 10px;
	border: 0;
	border-radius: 15px;
	width: 140px;
	:focus {
		outline: none;
	}
	@media (max-width: 720px) {
		padding: 9px 65px 10px 10px;
		width: 26%;
		margin-right: 1%;
	}
	@media (max-width: 500px) {
		width: 38%;
	}
`;

export const ViewSavedLinkSection = styled.div`
	display: inline;
	float: right;
	padding-top: 10px;
	a {
		color: #fff;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.3);
		transition: background 0.5s ease-out;
		padding: 12px;
		text-decoration: none;
		border-radius: 20px;
	}
	a:hover {
		background: rgba(255, 255, 255, 0.5);
	}
	@media (max-width: 720px) {
		display: block;
		float: none;
		text-align: center;
		padding-bottom: 30px;

		a {
			padding: 10px;
			font-size: 13px;
			position: relative;
			right: 0;
			top: 0;
			margin-bottom: 20px;
		}
	}
`;

export const MainContent = styled.div`
	width: 70%;
	max-width: 1100px;
	margin: auto;
	color: #999;
	font-size: 11pt;
	padding: 10px 0 50px;
	a {
		text-decoration: none;
	}
	@media (max-width: 720px) {
		width: 80%;
	}
	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const MainContentHeader = styled.div`
	font-weight: lighter;
	border-bottom: 1px solid #b0b0b0;
	padding: 20px 0;
	font-size: 1.3em;
`;

export const SubHeader = styled.div`
	font-size: 0.8em;
`;

export const Query = styled.span`
	color: #f09722;
	font-size: 1.5em;
`;

export const GemName = styled.a`
	font-size: 1.3em;
	font-weight: bold;
	display: inline;
	color: #d25c71;
`;

export const GemDescription = styled.p`
	padding-bottom: 10px;
	line-height: 1.5;
`;

const StyledButton = styled.button`
	color: #fff;
	cursor pointer;
	border: 0;
	border-radius: 15px;
	padding: 8px;
	:focus {
		outline: none;
	}
`;

export const SearchButton = styled(StyledButton)`
	position: absolute;
	left: 470px;
	background-color: #f09722;
	font-size: 14px;
	@media (max-width: 720px) {
		left: 60%;
	}
	@media (max-width: 500px) {
		left: 63%;
	}
`;

export const SaveButton = styled(StyledButton)`
	float: right;
	padding: 5px;
	background-color: #f09722;
	border-radius: 12px;
	font-size: 14px;
`;

export const BackLink = styled(Link)`
	color: #999;
`;
