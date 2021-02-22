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
        background-color: #EF233C;
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
                color: white;
                h3{
                    font-size: 14px;
                    color: white;

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
    .modal {
  font-size: 12px;
}
.modal > .header {
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
}
.modal > .content {
  width: 100%;
  padding: 10px 5px;
}
.modal > .actions {
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
}
.modal > .close {
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
}


`;

export {Container};