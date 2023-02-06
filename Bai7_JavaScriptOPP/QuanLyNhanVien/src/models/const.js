const NOTI_INVALID = {
  notiInput: "(*) Vui lòng nhập thông tin",
  notiWrongFieldText: "(*) Vui lòng nhập chỉ kí tự",
  notiWrongFieldNumber: "(*) Vui lòng chỉ nhập số",
  notiWrongFieldEmail: "(*) Vui lòng nhập đúng email",
  notiWrongLenght:"(*) Vui lòng nhập từ 4-10 kí tự",
};

const FIELD_CONTENT = {
  NAME: "name",
  CODE: "msnv",
  EMAIL: "email",
};

const CONDITION = {
  TEXT: /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
  NUMBER: /^[0-9]+$/,
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  LENGHTMIN: 4,
  LENGHTMAX: 10,
  DATE: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
};
