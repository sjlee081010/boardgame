# 보드게임 인물 설정 앱

## 폴더 구조

```
boardgame/
├── index.html    ← 모든 코드와 인물 정보가 여기 들어있음
└── img/
    ├── characters/   인물 카드 배경 사진
    ├── scripts/      각 인물의 대본 페이지 이미지
    ├── photos/       일반 사진 (선택)
    └── secrets/      비밀 대본 이미지
```

## 동작 흐름

1. 인물 카드 화면 (가로 스크롤)
2. 카드 하단에 암호 입력 → 일치 시 그 인물 대본 화면으로
3. 대본 페이지를 가로 스크롤로 넘김
4. 마지막 페이지에서 비밀 암호 → 비밀 대본 공개
5. 좌상단 ← 버튼으로 뒤로가기

## 인물 추가/수정 방법

`index.html`을 텍스트 에디터로 열고, `★ 인물 정보 - 여기만 수정 ★`
주석 아래의 `CHARACTERS` 배열을 수정하세요.

```js
{
  id: "honggildong",
  image: "img/characters/홍길동.jpg",
  label: "인물 설정서",
  name: "홍길동",
  info: "30세 남성",
  quote: "정의는 살아있다.",
  publicInfo: "조선시대 의적...",
  scriptPassword: "1111",
  scriptPages: [
    "img/scripts/홍길동_1.jpg",
    "img/scripts/홍길동_2.jpg"
  ],
  secretPassword: "hong",
  secretPages: [
    "img/secrets/홍길동_비밀.jpg"
  ]
},
```

⚠️ 객체 끝의 콤마(,)를 빠뜨리지 마세요.

## 폰에서 바로 열기

`index.html`을 폰의 파일 앱에서 더블탭하면 브라우저에서 열립니다.
모든 코드가 한 파일 안에 있어 외부 파일 의존이 없습니다.
이미지가 없으면 회색 배경으로 표시됩니다.
