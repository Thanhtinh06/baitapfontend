### useState

- Giá trị state có thể là number,string,object hay fnc

khi dùng useState giá trị mặc định được tính toán duy nhất một lần khi hàm contructor chạy
=> nếu muốn thay đổi giá trị thì phải dùng setState
=>hoặc unmount componnent và chạy lại

- Syntax declare:

* agr1: value state
* agr2: setState
  => có thể khai báo state bằng nhiều tên không nhất thiết phải là state => và set lại đúng với tên đã đặt cho state

  ```js
  const [number, setNumber] = useState(100);
  const [func, setFunc] = useState(() => {
    return 100;
  });
  ```

### useEffect

thay thế life cycle componentDidmount và componentDidUpdate
useEffect : Nhận vào 2 tham số

- arg1: callback func (bắt buộc)
- arg2: [] (dependencyList)(có thể có hoặc ko)
  Note:
  => useEffect luôn chạy ít nhất 1 lần sau khi component render xong (đúng trong tất cả trường hợp sử dụng useEffect)
  Có 3 cách dùng useEffect:
  TH1. Chỉ nhận vào duy nhất 1 tham số là callBack Func
  => thay thế life cycle componentDidmount và componentDidUpdate
  => đối với trường hợp này: useEffect sẽ luôn được chạy lại khi component bị rerender (khi setState trong useEffect sẽ bị re render liên tục -> vòng lặp vô hạn)

```js
useEffect(() => {
  console.log("UseEffect");
});
```

TH2. useEffect nhận vào 2 agr,

- 1 call back
- 1 [] (rỗng)
  => chỉ chạy duy nhất 1 lần khi component render xong (component có bị re render cũng ko chạy lại)
  => thay thế cho life cycle: componentDidMount

  ```js
  useEffect(() => {
    console.log("UseEffect TH2");
  }, []);
  ```

````

TH3. useEffect nhận vào 2 agr,
+ 1 call back
+ 1 [] (Có giá trị) ([]=> được gọi là dependencies -> trường hợp 3 có được chạy hay ko tùy thuộc vào giá trị ở trong dependencies nếu có thay đổi => useEffect chạy lại)
=>thay thế cho life cycle componentDidUpdate
```js
  useEffect(()=>{
  console.log('UseEffect TH3')
},[number]);

````

TH4. useEffect nhận vào 2 agr,

- 1 call back và return về một hàm khác
- []
  => code ở ngoài phần return vẫn chạy bình thường
  => code trong return chạy khi component bị hủy (chạy duy nhất 1 lần )
  => thay thế cho life cycle: componentWillUnmount

  ```js
  useEffect(() => {
    console.log("UseEffect TH4");
    return () => {};
  }, []);
  ```

callAPI in UseEffect

Note: callAPI dùng axios và async await

- cách 1:

  - step1: tạo hàm ở bên ngoài
  - call ở trong UseEffect:

  ```js
  const getMovieList = async () => {
    try {
      const res = await axios.get(
        "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13",
        {
          headers: {
            TokenCyberSoft: TOKEN_CYBER,
          },
        }
      );
      setMovieList(res.data.content);
      console.log("movieList after callAPI", movieList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);
  ```

- cách 2: IIFE (Immediately Invoked Function Expression)

  - Hàm được tạo bên trong UseEffect và gọi hàm chạy sau khi tạo
  - Syntax (()=>{})()

```js
useEffect(() => {
  // ngoặc 1()-> tạo hàm ngoặc 2()->gọi hàm
  (async () => {
    try {
      const res = await movieServices.getMovieList("?maNhom=GP13");
      setMovieList(res.data.content);
    } catch (err) {
      console.log(err);
    }
  })();
}, []);
```

# config (cấu hình khi gọi API)

### file constant/api

- Trong đó:

  - Token_cyber: mã token để xác nhận để truy cập => api có thể trả về kết quả
  - baseURL: URL base của nhiều API
  - axios.create(): là một phương thức trong thư viện Axios cho phép bạn tạo một phiên bản Axios mới với các giá trị mặc định tùy chỉnh cho các tùy chọn cấu hình.

    # baseURL:

    This can be helpful if you are making multiple requests to the same API or server, as it allows you to avoid having to repeat the base URL in every request.

    # headers:

    Headers contain metadata about the request or response, such as information about the content type, encoding, authentication, caching, and more.(Tiêu đề chứa siêu dữ liệu về yêu cầu hoặc phản hồi, chẳng hạn như thông tin về loại nội dung, mã hóa, xác thực, bộ nhớ đệm, v.v.) => Tiêu đề là một phần quan trọng của giao tiếp HTTP, vì chúng cho phép máy khách và máy chủ trao đổi thông tin về yêu cầu và phản hồi theo cách chuẩn hóa. Có hai loại tiêu đề:

    - Request Headers: Các tiêu đề yêu cầu được máy khách gửi đến máy chủ và chúng cung cấp thông tin bổ sung về yêu cầu được thực hiện. Ví dụ: tiêu đề yêu cầu có thể bao gồm thông tin về trình duyệt thực hiện yêu cầu, loại dữ liệu mà khách hàng sẵn sàng chấp nhận và mọi thông tin xác thực cần thiết cho yêu cầu.

    - Response Headers: Các tiêu đề phản hồi được máy chủ gửi tới máy khách để đáp ứng yêu cầu và chúng cung cấp thông tin bổ sung về phản hồi được trả về. Ví dụ: tiêu đề phản hồi có thể bao gồm thông tin về loại nội dung của phản hồi, độ dài của phản hồi và hướng dẫn lưu vào bộ nhớ đệm cho máy khách.

    # timeout:

    Tùy chọn thời gian chờ là một cài đặt cấu hình trong thư viện Axios cho phép bạn đặt lượng thời gian tối đa (tính bằng mili giây) mà Axios sẽ đợi phản hồi trước khi hết thời gian chờ. Nếu máy chủ không phản hồi trong khoảng thời gian chờ đã chỉ định, Axios sẽ từ chối yêu cầu kèm theo lỗi.
    => Đặt thời gian chờ có thể giúp ngăn ứng dụng của bạn bị kẹt hoặc treo vô thời hạn nếu máy chủ không phản hồi hoặc phản hồi rất chậm. Tuy nhiên, bạn nên chọn giá trị thời gian chờ phù hợp với ứng dụng của mình và máy chủ mà bạn đang gửi yêu cầu, vì việc đặt thời gian chờ quá ngắn có thể khiến các yêu cầu hợp lệ bị từ chối quá nhanh.

    # params.

    Trong các yêu cầu HTTP, tham số đề cập đến các tham số chuỗi truy vấn được gửi cùng với URL của yêu cầu. Tham số chuỗi truy vấn là một cách để truyền dữ liệu đến máy chủ bằng cách nối thêm các cặp khóa-giá trị vào cuối URL.
    Tùy chọn params là một cài đặt cấu hình trong thư viện Axios cho phép bạn đặt các tham số chuỗi truy vấn mặc định cho tất cả các yêu cầu được thực hiện với phiên bản Axios. Điều này có thể hữu ích nếu bạn đang thực hiện nhiều yêu cầu yêu cầu các tham số chuỗi truy vấn giống nhau.
    => Setting default params can help simplify your code and make it easier to maintain, especially if you are making multiple requests that require the same query string parameters.

  - interceptors : are functions that allow you to intercept HTTP requests or responses before they are handled by the then or catch functions. Interceptors can be added to an Axios instance using the interceptors property of the instance. (bộ chặn là các hàm cho phép bạn chặn các yêu cầu hoặc phản hồi HTTP trước khi chúng được xử lý bởi các hàm then hoặc catch. Bộ chặn có thể được thêm vào phiên bản Axios bằng cách sử dụng thuộc tính bộ chặn của phiên bản.)
    => Phương thức axios.create() trả về một phiên bản Axios mới, có thể tùy chỉnh phiên bản này bằng cách thêm các bộ chặn vào phiên bản đó. Có hai loại thiết bị chặn có thể được thêm vào phiên bản Axios: thiết bị chặn yêu cầu và thiết bị chặn phản hồi.

    # Bộ chặn yêu cầu (Request interceptors)

    > là các chức năng được gọi trước khi yêu cầu được gửi đến máy chủ. Chúng cho phép bạn sửa đổi yêu cầu hoặc thêm tiêu đề vào yêu cầu đó, trong số những thứ khác.

    # Bộ chặn phản hồi (Response interceptors)

    > là các chức năng được gọi khi nhận được phản hồi từ máy chủ. Chúng cho phép bạn sửa đổi dữ liệu phản hồi hoặc tiêu đề hoặc xử lý các lỗi xảy ra trong quá trình yêu cầu.

    => Both interceptors have two method:

# use

> để thêm một thiết bị chặn vào chuỗi chặn. Khi một yêu cầu hoặc phản hồi bị chặn, nó sẽ được chuyển qua từng thiết bị chặn trong chuỗi theo thứ tự chúng được thêm vào và mỗi thiết bị chặn có thể sửa đổi yêu cầu hoặc phản hồi trước khi chuyển nó sang thiết bị chặn tiếp theo. Phương thức sử dụng nhận một hàm sẽ trả về đối tượng phản hồi hoặc yêu cầu đã sửa đổi hoặc Lời hứa giải quyết đối tượng đã sửa đổi.

# eject

> được sử dụng để loại bỏ một thiết bị chặn khỏi chuỗi thiết bị chặn. Nó lấy ID chặn được trả về bởi phương thức sử dụng làm đối số của nó.

```js
import axios from "axios";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk";

const baseURL = "http://movienew.cybersoft.edu.vn/api/";
const http = axios.create();
http.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      TokenCyberSoft: TOKEN_CYBER,
    },
    baseURL,
  };
});

export default http;
```

### file Services

```js
import http from "../constant/api";

export const movieServices = {
  //getListFilm
  getMovieList: (query = "") => {
    return http.get(`QuanLyPhim/LayDanhSachPhim${query}`);
  },
  //getListUser
  getUserList: (query = "") => {
    return http.get(`QuanLyNguoiDung/LayDanhSachNguoiDung${query}`);
  },
};
```

# Use Selector

## Lấy dữ liệu từ state

- useSelector nhận vào 1 call back func 
  + param : state (rootReducer)
  + return: stateChirld cần lấy
=> useSelector return về một component (bắt buộc)

```js
import { useSelector } from "react-redux";

const UseSelector = () => {
  const movieBooking = useSelector((state) => state.movieBookingReducer);
  console.log(movieBooking);
  return (
    <div className="container">
      <hr></hr>
      <h2>UseSelector</h2>
    </div>
  );
};
```

## dispatch action 


