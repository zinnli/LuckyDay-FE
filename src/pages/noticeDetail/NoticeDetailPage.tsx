import * as S from "./NoticeDetailPage.styled";
import { SingleButtonLayout } from "components";
import { useParams } from "react-router-dom";

export default function NoticeDetailPage() {
  const { id } = useParams();

  const notices = [
    {
      id: "1",
      title: "일상에 특별함을 더해줄 럭키데이를 소개합니다.",
      date: "2024년 06월 01일",
      content: (
        <>
          클릭 한 번, 터치 한 번으로 <br />
          원하는 것을 즉각 이루는 것에 익숙해진 우리, <br /> <br />
          그렇기에 '우연히', '천천히' 찾아오는 행복이 있다면 <br />
          더 특별하고 소중하지 않을까요? 🍀 <br /> <br />
          <br />
          <ul>
            <li>
              럭키 데이는 조각 케이크 사기, 영화관 가기처럼 일상 속에서 소소한
              행복을 가져다줄 활동을 랜덤한 날짜에 랜덤 배정해 줍니다.
            </li>
            <li>
              어떤 날짜에 어떤 활동이 배정되었을지 궁금한 마음을 안고, 조금 더
              특별해진 일상을 충실히 보내 보아요. 요즘은 쉽게 경험할 수 없는
              기다림과 궁금증이 포인트랍니다.
            </li>
            <li>
              더 기대되는 D-Day! 럭키 데이 당일에는 해당 날짜에 배정된 활동까지
              확인할 수 있어요. 랜덤 배정된 내용을 참고해서 나만의 특별한 럭키
              데이를 보내 보아요.
            </li>
          </ul>
          <br />
          <br />
          여러분의 일상에 특별함을 더할 수 있도록, <br />
          럭키데이는 계속해서 새로운 기능들이 추가될 예정입니다. <br /> <br />
          많은 관심과 피드백 부탁드려요. 🧡
        </>
      ),
    },
    {
      id: "2",
      title: "럭키데이 서비스의 만족도를 평가해 주세요.",
      date: "2024년 07월 01일",
      content: (
        <>
          안녕하세요! 팀 럭키데이 입니다. <br />
          럭키데이 서비스를 이용하시면서 혹시 불편한 점은 없으셨나요? <br />
          <br /> <br />
          럭키데이 서비스를 개선하여 더 좋은 모습으로 찾아뵙기 위해, <br />
          사용자 여러분들을 대상으로 <span>서비스 만족도 설문 조사를 진행</span>
          하고자 합니다. <br /> <br />
          만족도 설문 조사를 통해 좋은 피드백을 남겨주신 분들 중 <br />
          추첨을 통해 매달 1일 한 분께 소정의 <span>기프티콘</span>을
          보내드립니다.
          <br />
          <br />
          만족도 설문 조사는 아래 링크 또는 <br />
          게시판의 [만족도 설문 보러가기] 목록을 통해 참여 가능합니다. <br />
          <br /> <br />
          👉🏻 피드백 남기러 가기
          <a href="https://forms.gle/UmPyPXtDNfBpZzzW6">
            (https://forms.gle/UmPyPXtDNfBpZzzW6)
          </a>
          <br />
          <br />
          감사합니다.😊
        </>
      ),
    },
  ];

  const notice = notices.find((notice) => notice.id === id);

  if (!notice) {
    return <S.NoticeTitle>공지사항을 찾을 수 없습니다.</S.NoticeTitle>;
  }

  return (
    <SingleButtonLayout>
      <S.TitleBox>공지사항</S.TitleBox>
      <S.ContentsBox>
        <S.NoticeTitle>
          {notice.title}
          <S.NoticeDate>{notice.date}</S.NoticeDate>
        </S.NoticeTitle>
        <S.NoticeContent>{notice.content}</S.NoticeContent>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
