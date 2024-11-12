const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./finalDesign/assets')
	eleventyConfig.addPassthroughCopy('./finalDesign/images')
	eleventyConfig.addPassthroughCopy('./finalDesign/admin')
	eleventyConfig.addFilter('postDate', dateObj => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
	})

	return {
		dir: {
			input: 'finalDesign',
			output: 'public',
		},
	}
}
