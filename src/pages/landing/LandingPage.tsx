import * as S from "./LandingPage.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { Carousel, KakaoLogin, ProductTour, SvgButton } from "components";
import { LongBoxIcon } from "assets";

export default function LandingPage() {
  const navigate = useNavigate();

  const images: string[] = [
    "/images/landing/landing-01.webp",
    "/images/landing/landing-02.webp",
    "/images/landing/landing-03.webp",
    "/images/landing/landing-04.webp",
    "/images/landing/landing-05.webp",
    "/images/landing/landing-06.webp",
  ];

  const texts: string[] = [
    "럭키 데이\n무작위로 찾아오는 나만의 행운의 날",
    "다양한 카테고리 가운데\n원하는 럭키 데이 활동을 골라 보세요.",
    "선택한 기간 안에서 원하는 개수의\n럭키 데이 활동과 날짜가 랜덤 배정됩니다.",
    "만들어진 럭키 데이를\n변화하는 아이콘으로 확인해 보세요.",
    "럭키 데이 전날에 깜짝 메일을 받아 보세요.\n배정된 활동은 당일에 확인할 수 있습니다.",
    "나만의 사진과 텍스트로\n럭키 데이를 기록하고 추억해 보세요.",
  ];

  const callback = () => {
    console.log("hi");
  };

  const tutorial = `안녕하세요!\n럭키 데이에 오신 것을 환영해요.\n\n제가 럭키 데이를 만드는 방법을 보여드릴까요?\n아래 버튼을 한 번 더 클릭해보세요.`;

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      navigate("/luckyboard");
    }
  }, [navigate]);

  return (
    <>
      <S.Landing>
        <ProductTour
          run={true}
          callback={callback}
          steps={[
            {
              target: "#tutorial",
              content: tutorial,
              disableBeacon: true,
              placement: "top",
            },
          ]}
        />
        <S.ContentsBox>
          <Carousel images={images} texts={texts} />
          {!Cookies.get("accessToken") && <KakaoLogin />}
          <div id="tutorial">
            <SvgButton
              label="튜토리얼 체험하기"
              icon={<LongBoxIcon />}
              onClick={() => navigate("/404")}
            />
          </div>
        </S.ContentsBox>
      </S.Landing>
    </>
  );
}
