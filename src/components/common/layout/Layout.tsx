import * as S from "./Layout.styled";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <S.LayoutContainer>
      <S.Layout>
        {!(pathname === "/404" || pathname === "/loading") && (
          <S.HeaderContainer>
            <Header />
          </S.HeaderContainer>
        )}
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Layout>
    </S.LayoutContainer>
  );
}
