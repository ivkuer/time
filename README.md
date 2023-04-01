# Time时间库

模仿dayjs制作的轻量级时间库

## 功能列表

引入
```js
import { Time } from './time';
```

返回时间的年月日时分秒，可选：传入{year：2000}可以设置时间的年份 可选参数： year ,monthday ,weekday ,hour ,minute ,second ,ms
```js
t.parts()
```

根据字符串格式化日期，目前支持的格式有 YYYY MM DD HH mm ss SSS
```
t.format(pattern = 'YYYY-MM-DD')
```

返回这个月的第一天
```
t.firstDayOfMonth()
```

返回这个月的最后一天
```
t.lastDayOfMonth()
```

返回今年的第一天
```
t.firstDayOfYear()
```

返回今年的最后一天
```
t.lastDayOfYear()
```
返回时间戳
```
t.getTimestamp
```

返回当前时间的原始格式
```
 t.getRaw()
```

增加当前时间，必传： amount是数字， unit是增加时间哪个部分 year ,month, day ,hour ,minute ,second ,millisecond
```
t.add(amount, unit)
```

返回是否是闰年
```
t.isLeapYear()
```
