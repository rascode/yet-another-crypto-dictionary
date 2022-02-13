module.exports = function(eleventyConfig){
    
    /* Ignore */
    eleventyConfig.ignores.add("README.md");
    
    /*Passthroughs*/
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/styles");
    
    /* Folder Structure */
    return {
        dir:{
            data: "data",
            input: "src",
            includes: "templates/partials",
            layouts: "templates/layouts",
            output: "dist"
        }
    }
}