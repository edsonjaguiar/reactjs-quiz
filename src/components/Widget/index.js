import styled from 'styled-components';

const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.mainBg};
    border-radius: 4px;
    overflow: hidden;

    h1, h2, h3{
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }

    p{
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
    }
`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background: ${({ theme }) => theme.colors.primary};

    *{
        margin: 0;
    }
`;

Widget.Content = styled.div`
    padding: 24px 32px 32px 32px;

    & > *:first-child{
        margin-top: 0;
    }

    & > *:last-child{
        margin-bottom: 0;
    }

    ul{
        list-style: none;
        padding: 0;
    }
`;

Widget.Input = styled.input`
    position: relative;
    top: -22px;
    background: none;
    border: 1px solid #0288d1;
    border-radius: 4px;
    width: 100%;
    height: 38px;
    color: ${({ theme }) => theme.colors.contrastText};
    padding-left: 16px;
`;

Widget.Button = styled.button`
    width: 100%;
    height: 34px;
    color: #fff;
    text-transform: uppercase;
    background: #03a9f4;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;

    &:hover{
        background: #0276aa;
    }

    &:disabled{
        background: #979797;
    }

`;

export default Widget;
