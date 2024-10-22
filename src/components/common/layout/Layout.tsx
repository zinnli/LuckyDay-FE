import * as S from "./Layout.styled";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header";

export default function Layout() {
  const { pathname } = useLocation();

  const isHeaderVisible = !(pathname === "/404" || pathname === "/loading");

  return (
    <S.LayoutContainer>
      <S.Layout>
        {isHeaderVisible && (
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
