import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .boxPage{
        width: 40vw;
        height: 60vh;
        margin-top: 20vh;
        background-color: #001427;
        padding-top: 7.5vh;
        border-radius: 5px;

        .inputUser{
            width: 30vw;
            height: 5vh;
            margin-left: 5vw;
            margin-top: 5vh;
            border: none;
            border-radius: 5px;
            padding: 10px;

        }
        .inputSubmite{
            width: 15vw;
            height: 5vh;
            margin-left: 12.5vw;
            margin-top: 5vh;
            border: none;
            border-radius: 5px;
            text-align: center;
            color: white;
            background-color: #88E308;


        }
    }

    @media (max-width: 800px){
        flex-direction: column;
    
        .boxPage{
            width: 90vw;
            margin-left: 5vw;
            .inputUser{
            width: 80vw;


        }
        .inputSubmite{
            width: 40vw;
            height: 5vh;
            margin-left: 25vw;



        }
        }

    }


`