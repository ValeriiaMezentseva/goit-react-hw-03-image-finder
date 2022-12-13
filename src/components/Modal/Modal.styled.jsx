import styled from "@emotion/styled";

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalContent = styled.div`
max-width: calc(100vw - 48px);
max-height: calc(100vh - 24px);
`;
export const Image = styled.img`
margin-top: 35px;
width: 100%;
height: 600px;
object-fit: cover;
`;