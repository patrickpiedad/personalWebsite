module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./finalDesign/assets')
    eleventyConfig.addPassthroughCopy('./finalDesign/images')

    return {
        dir: {
            input: "finalDesign",
            output: "public"
        }
    }
}