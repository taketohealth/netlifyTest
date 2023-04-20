import light from './_lightMuiTheme'

const themes = {
  light,
}

const getTheme = (theme) => {
  return themes[theme]
}

export default getTheme
