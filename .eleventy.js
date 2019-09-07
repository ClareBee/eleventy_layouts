
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function(eleventyConfig){
  const cacheBusterOptions = {
    createResourceHash(outputDirectoy, url, target) {
       return Date.now();
   }
  };
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions))
  eleventyConfig.addPassthroughCopy("assets")

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: "src",
      output: "_site",
      includes: "includes"
    }
  }
}
