import styled from "styled-components";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #A8648D;
  color: #fff;
  padding: 50px 50px 0px 50px;
  height: 200px;
  @media (max-width: 500px) {
    padding: 20px 20px 0px 20px;
  }
`;

export default Toolbar;
