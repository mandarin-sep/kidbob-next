# kidBob

---

https://www.data.go.kr/data/15109168/openapi.do#/

> 해당 API + 네이버 지도 API 를 활용한 급식카드 가맹점(사용처) 지도 제공 웹

## 주요 기능

- 행정 구역별 급식 카드 가맹점 위치 마커로 표시
- 가맹점 정보를 리스트로 제공
- 리스트의 가맹점을 클릭하면 해당하는 마커를 zoomin
- 가맹점 검색 기능
- 가맹점 분류별 필터링 기능

<br><br>

## 사용기술

| 역할       | 종류                                                                                                                 | 사용이유                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 언어       | ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=javascript&logoColor=white)    | Type 안정성을 제공해서 버그를 줄여줌                                                                               |
| 프레임워크 | ![NEXT](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)                | SSR과 SSG를 통해 렌더링 속도와 SEO가 향상됨                                                                        |
| 스타일     | ![tailwindcss](https://img.shields.io/badge/tailwindcss-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white) | 컴포넌트의 재사용성이 높고, 빌드시 사용하지 않는 CSS를 자동으로 제거하여 최종 번들 CSS의 크기를 줄여 성능이 향상됨 |
| 상태관리   | ![SWR](https://img.shields.io/badge/SWR-000000?style=for-the-badge&logo=SWR&logoColor=white)                         | NEXT와 같은 회사에서 만들어서 호환성이 좋을거라고 생각                                                             |
| 배포       |                                                                                                                      |

## 사용 api

<img src="https://img.shields.io/badge/공공데이터-1A5EBD">
<img src="https://img.shields.io/badge/네이버지도 api-03C75A">
