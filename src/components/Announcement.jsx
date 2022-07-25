import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #e0ffcd;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>No Exchange/Return/COD/Cancellation.</Container>;
};

export default Announcement;
