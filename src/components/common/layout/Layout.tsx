import * as S from "./Layout.styled";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header";
import { TutorialLayout, useTutorial } from "components/tutorial";

export default function Layout() {
  const { pathname } = useLocation();
  const { isTutorialActive } = useTutorial();

  return (
    <S.LayoutContainer>
      <S.Layout>
        {!(pathname === "/loading" || pathname === "/404") && <Header />}
        <Outlet />
        {isTutorialActive && <TutorialLayout />}

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
