module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addWatchTarget("./src/img/");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
