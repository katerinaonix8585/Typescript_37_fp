import { Footer, Header, HeaderLogo, HeaderLogoContainer, LayoutComponent, Main } from "./styles"
import { LayoutProps } from "./types"

function Layout({children} : LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </Header>
      <Main>
      {children}
      </Main>
      <Footer>
      <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>      
      </Footer>
    </LayoutComponent>
  )
}

export default Layout
