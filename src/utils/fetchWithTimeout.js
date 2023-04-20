const fetchWithTimeout = async (path, options = {}) => {
  const { timeout = 8000, values, ...rest } = options
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  const response = await fetch(`${process.env.GATSBY_API_URL}${path}`, {
    method: 'POST',
    body: values && JSON.stringify(values), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    ...rest,
    signal: controller.signal,
  })
  clearTimeout(id)

  const result = await response.json()

  return result
}

export default fetchWithTimeout
