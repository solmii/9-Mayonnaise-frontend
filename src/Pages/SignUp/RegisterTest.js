export function isId(asValue) {
  // 영문자, 숫자,  특수 문자 하나 이상 + 4~12자
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export function isPassword(asValue) {
  // 대문자 하나 이상, 소문자 하나 이상, 숫자 또는 특수 문자 하나 이상 + 6~16자
  const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,16}/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
