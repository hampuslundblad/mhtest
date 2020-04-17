import React from 'react'
import Hero from '../components/homeComponents/heroComponent';
import TextBox from '../components/homeComponents/textBox';
import styled from 'styled-components';

const Styles = styled.div`
`;
export default function homePage() {
    return (
        <Styles>
        <div className="home-wrapper">
            <Hero />
            <TextBox/>
        </div>
        </Styles>
    )
}
