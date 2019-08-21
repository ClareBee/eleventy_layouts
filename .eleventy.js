module.exports = function(eleventyConfig){

  eleventyConfig.addPassthroughCopy("assets")

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      include: "includes"
    }
  }
}
