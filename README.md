
# 📍 MEMEGLE  - Admin / 밈글 관리자 

<br/>

#### 🧸 관리자가 쉽게 운영할 수 있는 직관적인 웹 애플리케이션

> MEMEGLE Admin(밈글 어드민) 프로젝트는
> 
> MEMEGLE(밈글) 사용자들에게 보다 나은 경험을 제공하기 위한 관리 페이지로 기획되었습니다.
>
> 관리자는 이미지 및 회원 데이터를 효과적으로 관리하고,
> 
> 직관적인 UI를 통해 쉽게 운영할 수 있도록 도와줍니다.

<br/><br/>

## 📋 주요 기능 (진행중)

- **회원 관리**
    - 회원 목록 조회
    - 회원 정보 수정 
    - 회원 탈퇴 처리

- **이미지 관리**
    - 이미지 목록 조회
    - 이미지 업로드 수락 및 반려
    - 이미지 정보 수정
    - 이미지 삭제
    - 이미지 업로드 (지원 포맷: webp, jpeg, jpg, png, gif)
    - 이미지 카테고리 관리
    - 이미지 태그 관리

- **기타**
    - 관리자 대시보드 (통계 및 분석)
    - 권한 관리

<br/><br/>

## ⚒ 기술 스택

### 주요 라이브러리 및 도구

- **React**: 관리 인터페이스 개발
- **TypeScript**: 정적 타입을 통한 코드 안정성 강화
- **React Query**: 서버 상태 관리
- **React Router**: 클라이언트 사이드 라우팅
- **DND Kit**: 드래그 앤 드롭 구현 (이미지 순서 변경 등)
- **MSW (Mock Service Worker)**: API 모킹 및 테스트 환경 지원
- **Node-Sass**: 스타일링 옵션 제공
- **Axios**: HTTP 요청 처리

<br/>

### 빌드 및 개발 환경

- **Vite**: 빠른 개발 환경 구축 및 번들링
- **Jest**: 단위 테스트 및 통합 테스트 지원
- **ESLint**: 코드 품질 관리

<br/><br/>

## ✅ 배포 URL

🔗 [https://memegle-admin.netlify.app/](https://memegle-admin.netlify.app/)

<br/><br/>

## 🪄 미리보기


![admin-demo](https://github.com/user-attachments/assets/7c406ff6-dd2f-4ee3-909d-353a1f0ef9d2)

<br/><br/>

## 🎃 설치 및 실행

### 설치

이 프로젝트는 [Node.js](https://nodejs.org/) 16+ 버전을 필요로 합니다.

아래 명령어를 실행하여 의존성을 설치하고 개발 환경을 시작하세요.

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
