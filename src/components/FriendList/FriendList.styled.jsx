import styled from '@emotion/styled';

export const FriendList = styled.li`
  display: flex;
    align-items: center;
    gap: 20px;
    padding: 8px 10px;
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
}
`;

export const FriendAvatar = styled.img`
  width: 75px;
  background-color: #e7e9fc;
  border: 1px solid #e7e9fc;
`;


export const FriendName = styled.p`
  font-size: 18px;
  line-height: 1.62;
  font-weight: 18px;
  margin-left: 20px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const FriendItems = styled.ul`
  display: flex;
  width: 350px;
  flex-direction: column;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  
  background-color: #fff;
  border-radius: 10px;
`;
