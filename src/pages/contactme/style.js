import styled from 'styled-components';

export const StructureComp = styled.div`
    @media (max-width: 980px){
        display: none;

    }
    
`;

export const Content = styled.div`
        width: 80vw;
        height: 100vh;
        background-color: white;
        float: right;

        .h3-1{
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin-top: 5vh;

        }

        h1{
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            color: #EF233C;
            margin-bottom: 10vh;

        }

        form{
            width: 45vw;
            float: left;

            .name{
                width: 20vw;
                margin-left: 2.5vw;
                margin-bottom: 2.5vh;
                height: 7vh;
                background-color: rgba(0, 0, 0, 0.2);
                border: none;
                border-radius: 10px;
                padding-left: 2vw;
            }

            .email{
                width: 20vw;
                margin-left: 2.5vw;
                margin-bottom: 2.5vh;
                height: 7vh;
                background-color: rgba(0, 0, 0, 0.2);
                border: none;
                border-radius: 10px;
                padding-left: 2vw;

            }

            .projeto{
                width: 42.5vw;
                margin-left: 2.5vw;
                margin-bottom: 5vh;
                height: 7vh;
                background-color: rgba(0, 0, 0, 0.2);
                border: none;
                border-radius: 10px;
                padding-left: 2vw;

            }

            .mensagem{
                width: 42.5vw;
                margin-left: 2.5vw;
                height: 40vh;
                margin-bottom: 5vh;
                background-color: rgba(0, 0, 0, 0.2);
                border: none;
                border-radius: 10px;
                padding-left: 2vw;

            }
            .enviar{
                width: 10vw;
                margin-left: 17.5vw;
                height: 7vh;
                background-color: #EF233C;
                border: none;
                color: white;
                border-radius: 10px;
                text-align: center;
                font-size: 20px;

            }
        }

        .info{
            float: right;
            margin-right: 20vw;
        }
        @media (max-width: 980px){
        width: 100vw;
        padding-top: 0vh;
        display: flex;
        flex-direction: column;

        form{
            width: 100vw;
            float: left;

            .name{
                width: 90vw;
                margin-left: 5vw;
            }

            .email{
                width: 90vw;
                margin-left: 5vw;

            }

            .projeto{
                width: 90vw;
                margin-left: 5vw;

            }

            .mensagem{
                width: 90vw;
                margin-left: 5vw;

            }
            .enviar{
                width: 40vw;
                margin-left: 30vw;
                height: 7vh;

            }
        }
        .info{
            text-align: center;
            padding-top: 5vh;
            padding-bottom: 5vh;
            margin-right: 0vw;
    
        
        }



        }

`;