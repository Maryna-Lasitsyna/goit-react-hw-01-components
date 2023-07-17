import styled from '@emotion/styled';

export const Section = styled.section`
  background: #fff;
  border: 1px solid #e7e9fc;
  margin: 30px auto;
  padding-top: 20px;
  width: 350px;
  box-shadow: 0 0 10px #c6cccced;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #192431;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
`;

export const StatsList = styled.ul`
  display: flex;
 `;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  margin: auto;
  margin-top: 0;
  text-align: center;
  color: #f3f3f3;
  width: 100%;

  background-color: ${generateColor};
`;

export const StatLabel = styled.span`
  font-size: 16px;
  padding-top: 5px;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
`;

function generateColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return color;
}
