# 터미널풍 + 우주정거장 컨셉의 디자인
# 검정 바탕에 흰 글씨

<!--로그인 화면-->
PROJECT : VOYAGER
TRAINER OBSERVATION & SIMULATION NETWORK

REMOTE TERMINAL // NODE 03
────────────────────────────────────────────────────────
[BOOT] Initializing VOYAGER terminal...
[BOOT] Kernel................................. READY
[BOOT] Trainer interface...................... READY
[BOOT] Battle simulation core................. READY
[BOOT] Telemetry service...................... READY

[NET] Searching for VOYAGER network...
[NET] Relay station detected.
[NET] Establishing encrypted connection........ OK
[NET] Latency................................. 18ms

[SYNC] Synchronizing system clock.............. OK
[SYNC] Synchronizing battle database........... OK
[SYNC] Synchronizing Pokémon database.......... OK
[SYNC] Retrieving current project status....... OK

────────────────────────────────────────────────────────
[SYS] Authentication required.

> voyager auth --trainer

INITIALIZING TRAINER IDENTIFICATION...

[AUTH] Secure authentication module loaded.
[AUTH] Waiting for trainer identifier.

<!--여기까지 터미널처럼 타이핑 + 약간 불규칙하면 더 좋음-->
<!--아래는 이메일/비밀번호 입력-->

E-MAIL
> █

<!--이메일 입력 이후 비밀번호 입력창 올라옴-->

PASSWORD
> █

<!--로그인에 성공하면 아래는 빠르게 넘겨주면서 페이드(끝까지 안 보여도 되고, 입력 중인 모습 + 페이드로 main.html 진입-->

[AUTH] Credential packet received.
[AUTH] Encrypting.............................. OK
[AUTH] Verifying signature..................... OK
[AUTH] Comparing authentication key............ MATCH

[AUTH] Identity confirmed.
────────────────────────────────────────────────────────

TRAINER AUTHENTICATED

────────────────────────────────────────────────────────

[NET] Opening secure trainer channel...
[NET] Encryption layer........................ ACTIVE
[NET] Session key.............................. GENERATED

[SYNC] Retrieving trainer profile.............. OK
[SYNC] Retrieving registered Pokémon........... OK
[SYNC] Retrieving battle records............... OK
[SYNC] Retrieving simulation history........... OK

[SYS] Checking battle subsystem................ ONLINE
[SYS] Checking matchmaking subsystem........... ONLINE
[SYS] Checking telemetry subsystem............. ONLINE
[SYS] Checking observation subsystem........... ONLINE

[SYS] Checking experimental subsystem...

...

[SYS] Experimental subsystem................... ONLINE

[WARNING] Experimental subsystem is currently enabled.
[WARNING] Unexpected behavior may occur.

[SYS] Disable experimental subsystem? [Y/N]

> N

[SYS] Input received from PROJECT LEAD.