import styled from 'styled-components';

export const Container = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: white;
    float: left;

    .select{
        width: 20vw;
        height: 100vh;
        background-color: #EF233C;
        padding-top: 10vh;
        padding-left: 2vw;
        float: left;

        .link{
        font-size: 16px;
        text-decoration: none;
        color: white;
        

            :hover{
            color: #828282;
            }
        }
        ul{
        list-style: none;   

            li{
            margin-bottom: 5vh;
            }
        }
    }

    @media (max-width: 720px){
        /* display: none; */
        .select{
            width: 100vw;
            text-align: center;
            padding-top: 30vh;

        } 

    }

`;