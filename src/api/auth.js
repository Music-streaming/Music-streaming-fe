const BASE_URL = 'http://192.168.45.19:8080';

export async function login({ email, password }) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    let message = '로그인에 실패했습니다.';

    try {
      const errorData = await res.json();
      if (errorData.message) {
        message = errorData.message;
      }
    } catch (e) {
      console.error('에러 응답 파싱 실패:', e);
    }
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}

export async function signup({ email, password, username }) {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      username,
    }),
  });

  if (!res.ok) {
    let message = '회원가입에 실패했습니다.';

    try {
      const errorData = await res.json();
      if (errorData.message) {
        message = errorData.message;
      }
    } catch (e) {
      console.error('에러 응답 파싱 실패:', e);
    }
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}
