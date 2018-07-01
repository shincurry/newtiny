# newtiny

```shell
yarn install
yarn serve # dev
yarn build # production
```

```javascript
// GET 获取票种信息
{
  "status": "success",
  "data": [
    {
      "rest": 3,
      "type": "标准票",
      "price": 199,
      "note": ""
    },
    {
      "rest": 99,
      "type": "站票",
      "price": 99,
      "note": "无座位，可自备小板凳"
    },
    {
      "rest": 99,
      "type": "远程支持票",
      "price": 9.99,
      "note": "可获得活动 PPT 等资料"
    },
    {
      "rest": 99,
      "type": "赞助商",
      "price": 999.99,
      "note": "获得品牌露出机会，详情联系..."
    }
  ]
}
```



```javascript
// POST 用户购票信息

{ selectedTicket: String,
  ticketsCount: Number,
  applicantInfo: { phone: String, email: String },
  participantsInfos:
   [ 
       { name: String, idCard: String, gender: String },
       {...}
   ],
  totalPrice: Number }
```

修改 src/api.js 文件里的 baseUrl 为本机局域网IP