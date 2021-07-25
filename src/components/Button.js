import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    padding: ${({ big }) => (big ? "1rem 2rem" : ".75rem 1rem")};
    border-radius: 5px;
    outline: none;
    border: none;
    background: ${({ primary }) => (primary ? "#000d1a" : "#cd853f")};
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
    letter-spacing: 1px;
    cursor: pointer;
    transition: .5s ease-in-out;
    text-decoration: none;
    font-size: ${({ big }) => (big ? "1.1rem" : ".9rem")};

    &:hover
    {
        transform: translateY(-2px);
    }
`;