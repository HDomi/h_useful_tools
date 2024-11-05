# A project to modularise useful methods for easy writing

#### How to use

```
 npm i @h_domi/useful_tools
```

```
import UFT from "@h_domi/useful_tools";

...

UFT.devLogger()

or

const { devLogger } = UFT;
devLogger()
```

<div style="width:100%;height:1px;background: black; margin: 30px 0"></div>

<span style="color: blue; font-size: 16px; margin-top: 20px;">Method</span>
| 이름 | input | output | 설명 |
| ---------- | ---------------------------------- | -------------------------------------- | -------- |
| parseValue | string / number / null / undefined | 컴마추가 후 문자열, 비어있다면 "-"표시 | 정수변환 |
| devLogger | data, log option | env: dev거나 development에서만 로그 동작 | 로거 |

<!-- | | | | | -->

<div style="width:100%;height:1px;background: black; margin: 30px 0"></div>

<span style="color: blue; font-size: 16px;">Constant</span>
| 이름 | 설명 | 타입 |
| ---------- | ---------------------------------- | ---------------------------------- |
| passwordReg | 비밀번호 정규표현식, 이 정규 표현식은 최소 8자에서 최대 16자의 길이를 가지며, 적어도 하나의 영문자, 하나의 숫자, 하나의 특수문자를 포함해야 하는 비밀번호를 검증합니다. |RegExp|
