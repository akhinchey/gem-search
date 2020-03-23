import React from 'react';
import { Link } from 'react-router-dom';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled';

const breakpoints = [720, 500];

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const colors = {
  white: '#fff',
  grey: '#999',
  lightGrey: '#b0b0b0',
  orange: '#f09722',
  rouge: '#d25c71'
};

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
  color: ${colors.white};
  font-weight: 100;
  ${mq[0]} {
    display: block;
    text-align: center;
  }
  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

export const GemUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    border-bottom: 1px solid ${colors.lightGrey};
    margin-bottom: 20px;

    :first-of-type {
      padding-top: 30px;
    }
  }
`;

export const HeaderWrapper = styled.header`
  background: ${colors.rouge};
  background: linear-gradient(
    90deg,
    rgba(210,92,113,1) 26%,
    rgba(255,198,103,1) 79%
  );
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
  ${mq[0]} {
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
  ${mq[0]} {
    padding: 9px 65px 10px 10px;
    width: 26%;
    margin-right: 1%;
  }
  ${mq[1]} {
    width: 38%;
  }
`;

export const ViewSavedLinkSection = styled.div`
  display: inline;
  float: right;
  padding-top: 10px;
  a {
    color: ${colors.white};
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
  ${mq[0]} {
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
  color: ${colors.grey};
  font-size: 11pt;
  padding: 10px 0 50px;
  a {
    text-decoration: none;
  }
  ${mq[0]} {
    width: 80%;
  }
  ${mq[1]} {
    width: 85%;
  }
`;

export const MainContentHeader = styled.div`
  font-weight: lighter;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 20px 0;
  font-size: 1.3em;
`;

export const SubHeader = styled.div`
  font-size: 0.8em;
`;

export const Query = styled.span`
  color: ${colors.orange};
  font-size: 1.5em;
`;

export const GemName = styled.a`
  font-size: 1.3em;
  font-weight: bold;
  display: inline;
  color: ${colors.rouge};
`;

export const GemDescription = styled.p`
  padding-bottom: 10px;
  line-height: 1.5;
`;

const StyledButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.orange};
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
  font-size: 14px;
  ${mq[0]} {
    left: 60%;
  }
  ${mq[1]} {
    left: 63%;
  }
`;

export const SaveButton = styled(StyledButton)`
  float: right;
  padding: 5px;
  border-radius: 12px;
  font-size: 14px;
`;

export const BackLink = styled(Link)`
  color: ${colors.grey};
`;
