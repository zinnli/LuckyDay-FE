import * as S from "./NavigationToggle.styled";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SendFeedbackModal } from "./sendFeedbackModal";
import { useModal } from "hooks";
import { MenuIcon } from "assets";

interface NavigationToggleProps {
  defaultOn?: boolean;
}

export default function NavigationToggle({
  defaultOn = false,
}: NavigationToggleProps) {
  const [isToggleVisible, setIsToggleVisible] = useState(defaultOn);
  const [toggleBoxPosition, setToggleBoxPosition] = useState({
    top: 0,
    left: 0,
    right: "auto" as number | "auto",
  });
  const toggleRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { handleOpenModal, handleModalClose } = useModal();

  const nickname = sessionStorage.getItem("nickname");
  const profileNumber = sessionStorage.getItem("profileNumber");

  const getProfileImageUrl = (prfNo: string | null) => {
    if (!prfNo) return "/images/profile/profile-03.webp";
    const profileNumber = parseInt(prfNo, 10);
    if (profileNumber < 1 || profileNumber > 6)
      return "/images/profile/profile-03.webp";
    return `/images/profile/profile-0${profileNumber}.webp`;
  };

  const profileImageUrl = getProfileImageUrl(profileNumber);

  const closeToggle = () => {
    setIsToggleVisible(false);
  };

  const openSendFeedbackModal = () => {
    handleOpenModal(<SendFeedbackModal onClose={handleModalClose} />);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !toggleRef.current?.contains(event.target as Node) &&
        !menuIconRef.current?.contains(event.target as Node)
      ) {
        closeToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNavigation = () => {
    if (menuIconRef.current) {
      const { bottom, right, width } =
        menuIconRef.current.getBoundingClientRect();
      const toggleBoxWidth = 200;
      const screenWidth = window.innerWidth;
      let leftPosition = right - toggleBoxWidth + width / 2;
      let rightPosition: number | "auto" = "auto";

      if (leftPosition + toggleBoxWidth > screenWidth) {
        leftPosition = screenWidth - toggleBoxWidth;
        rightPosition = 0;
      }

      setToggleBoxPosition({
        top: bottom,
        left: leftPosition,
        right: rightPosition,
      });
    }
    setIsToggleVisible((prevState) => !prevState);
  };

  useEffect(() => {
    closeToggle();
  }, [location]);

  const menuItems = [
    { label: "럭키 데이 보관함", to: "/luckydays/list" },
    { label: "마이페이지", to: "/mypage" },
    { label: "공지사항", to: "/notice" },
    { label: "게시판", to: "/noticeboard" },
  ];

  return (
    <>
      <S.MenuIcon onClick={toggleNavigation} ref={menuIconRef}>
        <MenuIcon />
      </S.MenuIcon>
      <S.ToggleBox
        ref={toggleRef}
        isVisible={isToggleVisible}
        style={{
          top: `${toggleBoxPosition.top}px`,
          left:
            typeof toggleBoxPosition.left === "number"
              ? `${toggleBoxPosition.left}px`
              : toggleBoxPosition.left,
          right:
            toggleBoxPosition.right === "auto"
              ? "auto"
              : `${toggleBoxPosition.right}px`,
        }}
      >
        <button onClick={toggleNavigation}></button>
        <S.ToggleContentsBox>
          <S.ProfileBox>
            <S.ProfileImage imageUrl={profileImageUrl} />
            {!nickname ? "사용자님" : `${nickname!.slice(0, 8)}님`}
          </S.ProfileBox>
          <S.ToggleMenuBox>
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={closeToggle}>
                <S.ToggleMenu>{item.label}</S.ToggleMenu>
              </Link>
            ))}
            <div onClick={closeToggle}>
              <S.ToggleMenuBottom onClick={openSendFeedbackModal}>
                피드백 보내기
              </S.ToggleMenuBottom>
            </div>
          </S.ToggleMenuBox>
        </S.ToggleContentsBox>
      </S.ToggleBox>
    </>
  );
}
