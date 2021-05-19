import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

const StyledApp = styled.div`

color: ${props => props.theme.fontColor}

`

const Component = () => {

    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <h1>Theme Changer</h1>
                <button onClick={() => themeToggler()}>Change Theme </button>
            </StyledApp>
        </ThemeProvider>

    )
}

export default Component
