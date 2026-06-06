export function parseRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g // não nomeados

  const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)")

  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`) // nomeados

  return pathRegex
}