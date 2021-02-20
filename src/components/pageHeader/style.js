import styled from 'styled-components';

export const LinkSelect = styled.div`
    display: none;

    @media (max-width: 720px){
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 3vh;
            width: 100vw;
            height: 10.5vh;
            box-sizing: border-box;
            background-color: white;
            border-color: rgba(0, 0, 0, 0.2);
            border-style: solid;
            border-bottom-width: 0.5vh;
            border-top-width: 0;
            border-right-width: 0;
            border-left-width: 0;

            .link{
                margin-top: 0.5vh;
                margin-left: 0.5vh;
                border: none;
                border-radius: 5px;
                width: 20vw;
                height: 9vh;
                background-color: white;
            }

            
    }

    

    



`;