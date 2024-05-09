import { StyledNavLink } from "./styles";
import { ClientsInfo, ClientsWrapper, NavContainer } from "./styles";

function Clients(){
    return (
        <ClientsWrapper>
        <ClientsInfo>
        <NavContainer>           
           <StyledNavLink
           to='/clients/facebook'
           style={({ isActive }) => ({ textDecoration: isActive ? 'none' : 'underline' })}>
           Facebook
           </StyledNavLink>             
           <StyledNavLink
           to='/clients/instagram'
           style={({ isActive }) => ({ textDecoration: isActive ? 'none' : 'underline' })}>
           Instagram
           </StyledNavLink>              
           <StyledNavLink
           to='/clients/linkedin'
           style={({ isActive }) => ({ textDecoration: isActive ? 'none' : 'underline' })}>
           LinkedIn
           </StyledNavLink>             
        </NavContainer>
        </ClientsInfo>
        

        </ClientsWrapper>
        
       
    ) 
}

export default Clients;