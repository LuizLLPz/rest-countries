export const checkTheme = (name = 'container', theme) => {
	return `${name}--${theme == 'light' ? 'light' : 'dark'}`
}