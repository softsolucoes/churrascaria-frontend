import styled from 'styled-components';

const Container = styled.div`

    width: 100vw;
    height: 14vh;
    margin-top: 1vh;
    margin-bottom: 1vh;

    img{
        width: 10vw;
        height: 12vh;

    }

    .food {
        width: 90vw;
        height: 14vh;
        border-radius: 5px;
        padding-top: 1vh;
        padding-left: 2.5vw;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: row;

        .info{
            width: 85vw;
            height: 12vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .description{
                width: 75vw;
                height: 12vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h3{
                    font-size: 14px;
                    color: #FF4500;

                }
                p{
                    font-size: 12px;
                }

            }
            .buttonAsk{
                width: 10vw;
                height: 5vh;
                text-align: center;
                border: none;
                background-color: #00FF00;
                color: white;
                border-radius: 5px;
            }

        }

    }

    @media (max-width: 720px){
        width: 100vw;
        display: flex; 
        flex-direction: row; 
        justify-content: center;
        padding-left: 0;
        

    }


`;

export {Container};