# 데이터베이스 팀플

React.js, Vite.js 를 이용한 원두 거래 플랫폼 프론트엔드입니다.


## 개발 가이드

### 브런치 전략

[dev 브런치](https://github.com/return0927/coffeebean-front/tree/dev)는 개발코드를 배포하는 브런치, [master 브런치](https://github.com/return0927/coffeebean-front/tree/master)는 모든 피드백 및 검토가 끝난 이후 프로덕션 배포를 위한 브런치입니다. 예를 들어 로그인 페이지를 구현하려는 경우에 코드는 `impl/login` 브런치에 구현한 후에 `impl/login` -> `dev` -> `master` 순으로 병합합니다.

개발을 진행할 때 `dev` 브런치에서 `impl/login` 등의 적절한 브런치 이름을 생성한 후 Github 에 push 하고 Pull Request 를 생성하면 코드 리뷰 이후에 병합하도록 하려고 합니다.

이런 개발 전략에 대한 자세한 내용은 [이 글](https://www.reddit.com/r/git/comments/14duvxl/looking_for_advice_for_a_good_branch_strategy_for/)에서 확인할 수 있습니다. 이 글에서 설명하는 내용 중 staging 과 hotfix 는 사용하지 않습니다.


### 커밋 메시지 규칙

커밋 규칙은 기본적으로 [이 글](https://velog.io/@chojs28/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%B9%99)을 따르려고 합니다.


### 자동배포 전략

이 repositor는 Github Actions 를 이용해 AWS 환경에 자동으로 배포하도록 설정되어 있습니다. [여기](https://github.com/return0927/coffeebean-front/actions)에서 배포 현황을 알아볼 수 있고, 배포에 성공하면 `dev` 브런치의 내용은 [https://dev.coffee.ajou.enak.kr](https://dev.coffee.ajou.enak.kr) 에, `master` 브런치의 내용은 [https://coffee.ajou.enak.kr](https://coffee.ajou.enak.kr) 에 배포됩니다. 보통 Pull Request 가 병합된 뒤 배포에 반영되기까지 1분정도 소요됩니다.



## React + Vite 에 대해 알아보려면...
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
