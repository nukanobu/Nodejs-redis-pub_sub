■起動するために
manager.html に記載してあるIPアドレスを環境に合わせて修正してください。

server.js に記載してあるredis の接続先は環境に合わせて修正してください。

■起動
sh startnode.jp

■停止
sh stopnode.jp

japanese only!

最低限必要なパッケージ
- redis
- express
- socket.io

実験した環境
├─┬ express@3.4.0
│ ├── buffer-crc32@0.2.1
│ ├─┬ commander@1.2.0
│ │ └── keypress@0.1.0
│ ├─┬ connect@2.9.0
│ │ ├── bytes@0.2.0
│ │ ├─┬ multiparty@2.1.8
│ │ │ ├── readable-stream@1.0.17
│ │ │ └── stream-counter@0.1.0
│ │ ├── pause@0.0.1
│ │ ├── qs@0.6.5
│ │ └── uid2@0.0.2
│ ├── cookie@0.1.0
│ ├── cookie-signature@1.0.1
│ ├── debug@0.7.2
│ ├── fresh@0.2.0
│ ├── methods@0.0.1
│ ├── mkdirp@0.3.5
│ ├── range-parser@0.0.4
│ └─┬ send@0.1.4
│   └── mime@1.2.11
├─┬ log4js@0.6.9
│ ├── async@0.1.15
│ ├── readable-stream@1.0.17
│ └── semver@1.1.4
├── redis@0.8.6
└─┬ socket.io@0.9.16
  ├── base64id@0.1.0
  ├── policyfile@0.0.4
  ├── redis@0.7.3
  └─┬ socket.io-client@0.9.16
    ├─┬ active-x-obfuscator@0.0.1
    │ └── zeparser@0.0.5
    ├── uglify-js@1.2.5
    ├─┬ ws@0.4.31
    │ ├── commander@0.6.1
    │ ├── nan@0.3.2
    │ ├── options@0.0.5
    │ └── tinycolor@0.0.1
    └── xmlhttprequest@1.4.2

