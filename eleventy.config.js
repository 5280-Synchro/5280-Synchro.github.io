export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy('./assets/');
    eleventyConfig.addPassthroughCopy('./images/*jpg');
    eleventyConfig.addPassthroughCopy({'./assets/*ico':'.'});
};