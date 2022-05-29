import React from "react";
import styled from "styled-components";

export default function StyledComponents(){

    let mainColor = `#db7093`,
    mainAlphaColor89 = `#db709380`;

    const setTransitionTime = (time)=>`all ${time} ease-in-out`;

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        background-color: ${mainColor};
        transition: ${setTransitionTime("1s")};

        &:hover{
            background-color: ${mainAlphaColor89};
        }
    `;

    return (
        <>
            <h2>Styled-Components</h2>
            <MyH3>H3 estilizado con Styled-Component</MyH3>
        </>
    );
}