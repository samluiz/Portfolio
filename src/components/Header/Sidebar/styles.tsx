import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;

    /* Position and sizing of burger button */
    .bm-burger-button {
        position: fixed;
        width: 20px;
        height: 20px;
        top: 20px;
        right: 20px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #ffffff;
        transition-duration: 0.2s;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: #c6c6c6;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
    }

    /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
    .bm-menu-wrap {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 50% !important;
        right: 0 !important;
    }

    /* General sidebar styles */
    .bm-menu {
        background: #000000;
        font-size: 2em;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
        padding: 0.2em;
    }

    /* Individual item */
    .bm-item {
        display: inline-block;
        margin: 2rem;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    @media (min-width: 670px) {
        display: none;
    }

    @media (max-width: 470px) {
        font-size: 0.8rem;
    }

    @media (max-width: 370px) {
        font-size: 0.5rem;
    }
`
