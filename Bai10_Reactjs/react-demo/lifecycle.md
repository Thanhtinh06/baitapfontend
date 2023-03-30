<!-- Mounting -->

# Mounting

Chạy khi component đc khởi tạo

### constructor

Chạy khi component được hiển thị, khởi tạo các thuộc tính của component

### getDerivedStateFromProps

Chạy sau constructor => dùng để thay đổi state trước khi render ra UI

```js
static getDerivedStateFromProps(nextProps, currentState) {
        // Không có sử dụng this
        console.log('getDerivedStateFromProps')
        // currentState.number = 10
        return currentState
    }
```

### render

Chạy sau getDerivedStateFromProps => render ra giao diện

### componentDidmount

Chạy sau hàm render => thường dùng để call API

# Updating

### getDerivedStateFromProps

Sử dụng để biến props thành state nội bộ của component

### shouldComponentUpdate

Sử dụng để hạn chế việc re render ko cần thiết của component
return true => cho phép component re render lại
return false => không cho phép component re render

### getSnapshotBeforeUpdate
Lấy giá trị trước khi component update DOM

### componentDidUpdate
Chạy khi state hoặc props thay đổi
Dùng để call API hoặc dispatch 1 action


# Unmounting

### componentWillUnmount
Chạy khi component bị huỷ
Dùng để clean up : clear Interval, clear timeout, huỷ lắng nghe socket

