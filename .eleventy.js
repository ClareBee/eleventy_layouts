
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const fs = require("fs");

const postcss = require("postcss");
const autoprefixer = require("autoprefixer");


module.exports = function(eleventyConfig){
  const cacheBusterOptions = {
    createResourceHash(outputDirectoy, url, target) {
       return Date.now();
   }
  };
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions))
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, bs) {
          const content_404 = fs.readFileSync('_site/404.html');

          bs.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        }
      }
    });
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
