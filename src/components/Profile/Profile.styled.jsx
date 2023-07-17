import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebe2e1;
  
  
  padding-top: 60px;
  padding-bottom: 60px;

//   cursor: pointer;
`;

export const Description = styled.div`
  background-color: #d4c2c1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 350px;
`;

export const Avatar = styled.img`
  display: block;
  width: 50%;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: -4px -8px 62px 16px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -4px -8px 62px 16px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -4px -8px 62px 16px rgba(0, 0, 0, 0.69);
`;

export const Name = styled.p`
  font-size: 22px;
  line-height: 1.62;
  font-weight: 20px;
  color: #0f0f4f;
  margin-top: 20px;
`;
export const Tag = styled.p`
  margin-top: 10px;
 
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
  color: #545151;
`;

export const Location = styled.p`
  font-weight: 400;
  color: #545151;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  background-color: #ccc2c2;
  width: 350px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const StatsList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #4a4747;
  :not(:last-child) {
    border-right: 1px solid #4a4747;
  }
  :not(:last-child) span {
    border-right: none;
  }
`;
export const SpanLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  font-weight: 16px;
  text-align: center;
  justify-content: center;
`;
export const SpanQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: bold;
  margin: 2px auto 6px;
`;
