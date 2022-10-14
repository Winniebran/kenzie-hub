import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, textarea, option, input, select {
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        font-family: 'Inter', sans-serif;
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        background: none;
        color: none;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        width: 100vw;
        background-color: var(--color-grey-4);
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button{
        cursor: pointer;
    }

    :root {
        --color-primary-1: #ff577f;
        --color-primary-2: #ff427f;
        --color-primary-negative: #59323f;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343b41;
        --color-grey-1: #868e96;
        --color-transparency: rgba(0,0,0, 0);
        --color-white: #FFFFFF;
        --feedback-negative: #e83f5b;
        --feedback-sucess: #3FE864;

        --title-1: 28px;
        --title-2: 26px;
        --title-3: 24px;
        
        --headline-0: 18px;
        --headline-1: 16px;
        --headline-2: 14px;
        --headline-3: 12px;
        --headline-4: 10px;
        --headline-5: 8px;

        --font-weight-1: 700;
        --font-weight-2: 600;
        --font-weight-3: 500;
        --font-weight-4: 400;
    }
`;