import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 30px auto;
  width: 500px;
  border: 1px solid #918c8c;
  // background: white;
`;
export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #918c8c;
  background-color: #918c8c;
`;
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #918c8c;
`;
export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f9f9f9;
  }
  :hover {
    background-color: #f0f0f0;
  }
`;
