import styled from 'styled-components';

export const Container =styled.div`
    display: grid; //coisas iguais uma do lado da outra, no lugar de display: flex
    grid-template-columns: repeat(3, 1fr); //repetir 3x o 1fr
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius:0.40rem;
        color: var(--text-title);

        header{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: normal;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background{
            background: var(--green);
            color: #fff;
        }
    }
`