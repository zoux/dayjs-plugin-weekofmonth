# dayjs-plugin-weekofmonth

📦 一个 [dayjs](https://github.com/iamkun/dayjs) 插件，用于获取当前时间为当前月中的第几周。


## 使用方式

### install

```javascript
import dayjs from 'dayjs'
import weekOfMonth from '@zouxin/dayjs-plugin-weekofmonth'

// 默认每周第一天为星期日
dayjs.extend(weekOfMonth)

// or 设置 offset 来将每周第一天定义为星期一
dayjs.extend(weekOfMonth, { offset: 1 })
```

### API

- weekOfMonth 增加了 `.weekOfMonth()` API 返回一个 `number` 来表示 `Dayjs` 的日期是当前月中的第几周，其中返回值为 `0` 则代表是上个月最后一周。

```javascript
dayjs('2019-11-02').weekOfMonth() // 0
dayjs('2019-11-03').weekOfMonth() // 1
dayjs('2019-11-23').weekOfMonth() // 3
dayjs('2019-11-24').weekOfMonth() // 4

// or 设置 offset 来将每周第一天定义为星期一
dayjs('2019-11-03').weekOfMonth() // 0
dayjs('2019-11-04').weekOfMonth() // 1
dayjs('2019-11-24').weekOfMonth() // 3
dayjs('2019-11-25').weekOfMonth() // 4
```

- weekOfMonth 增加了 `.weekMapOfMonth()` API 返回一个对象，key 为当前月的第几周，value 为这一周内包含的 date，其中 key 为 `0` 则代表是上个月最后一周。

```javascript
dayjs().weekMapOfMonth()
// {
//   0: [...],
//   1: [...].
//   ...
// }
```
