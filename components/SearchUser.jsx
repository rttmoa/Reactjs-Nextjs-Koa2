import { useState, useCallback, useRef } from 'react'
import { Select, Spin } from 'antd'
import debounce from 'lodash/debounce'

import api from '../lib/api'

const Option = Select.Option

function SearchUser({ onChange, value }) {
  // { current: 0 }
  const lastFetchIdRef = useRef(0) // 使用Ref逃脱闭包陷阱
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState([])

  // useCallback方法中没有任何依赖，fetching和options是永远不会变的，所以不用加依赖项
  const fetchUser = useCallback(
    // debounce： 如果用户输入的时间超过了500毫秒才会再发请求 && 节流
    debounce(value => {
      console.log('fetching user', value)

      lastFetchIdRef.current += 1
      const fetchId = lastFetchIdRef.current
      setFetching(true)
      setOptions([])

      // 在浏览器环境中，不会用到req，res
      api.request({url: `/search/users?q=${value}`}).then(resp => {
          console.log('user:', resp)
          if (fetchId !== lastFetchIdRef.current) {
            return
          }
          const data = resp.data.items.map(user => ({
            text: user.login,
            value: user.login,
          }));
          setFetching(false)
          setOptions(data)
        })
    }, 500),
  [],)

  const handleChange = value => {
    setOptions([])
    setFetching(false)
    onChange(value)
  }

  return (
    <Select
      style={{ width: 200 }}
      showSearch={true}
      notFoundContent={fetching ? <Spin size="small" /> : <span>nothing</span>}
      filterOption={false}
      placeholder="创建者"
      value={value}
      onChange={handleChange}
      onSearch={fetchUser}
      allowClear={true}
    >
      {options.map(op => (
        <Option value={op.value} key={op.value}>
          {op.text}
        </Option>
      ))}
    </Select>
  )
}

export default SearchUser
