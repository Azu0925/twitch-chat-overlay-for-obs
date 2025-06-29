export const validateTwitchUsername = (username: string): boolean => {
  if (!username || typeof username !== "string") {
    return false
  }

  const twitchUsernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,24}$/
  return twitchUsernameRegex.test(username)
}

export const escapeHtml = (text: string): string => {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

export const validateNumberRange = (
  value: number,
  min: number,
  max: number,
): boolean => {
  return !isNaN(value) && value >= min && value <= max
}

export const validateColorCode = (color: string): boolean => {
  if (!color || typeof color !== "string") {
    return false
  }

  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return colorRegex.test(color)
}
