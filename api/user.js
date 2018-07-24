import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function register(username, password) {
  return request({
    url: '/user/register',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/getUserByToken',
    method: 'post',
    params: {},
    data:{token}
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
