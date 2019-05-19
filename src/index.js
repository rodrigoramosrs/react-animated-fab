import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

const MainContainer = styled.div`
  
`;

const ReactFullScreenElement = props => {
  return (
    <div>
      <CSSTransition
        in={props.fullScreen}
        appear
        classNames="_fullscreen-transition"
        timeout={props.fullScreen ? 50 : 350}
      >
        {state => (
          <MainContainer
            fullScreen={props.fullScreen}
            allowScrollbar={props.allowScrollbar}
            state={state}
          >
            {props.children}
          </MainContainer>
        )}
      </CSSTransition>
    </div>
  );
};

ReactFullScreenElement.propTypes = {
  children: PropTypes.any,
  fullScreen: PropTypes.bool,
  allowScrollbar: PropTypes.bool
};

export default ReactFullScreenElement;
