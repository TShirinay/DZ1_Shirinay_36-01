import React from 'react';

const Title = () => {
    return (
        <>
            <p>"Hello, my name is Shirinay"</p>
        </>
    );
};

const Header = () => {
    return (
        <>
            <p>"Header"</p>
            <Title/>
        </>
    );
};

const Content = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet.</p>
            <Title/>
        </>
    );
};

const Footer = () => {
    return (
        <>
            <p>"Footer"</p>
            <Title/>
        </>
    );
};

function App(props) {
    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
}

export default App;