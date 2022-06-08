import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  margin-bottom: 16px;
  text-decoration: none;
  text-transform: uppercase;
  color: #010101;
  border: 1px solid black;
  border-radius: 10%;
  margin: 10px;
  :hover {
    color: #2196f3;
  }
`;