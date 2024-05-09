import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 300px;
  `

export const ClientsInfo = styled.div`
  display: flex;
  font-size: 14px;
  color: #06006F;
  flex: 1;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`
export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: black;
`