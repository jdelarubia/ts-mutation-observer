/**
 * rollup.config.js
 */

 
 export default {
     input: "./src/js/main.js",
     watch: {
         include: "./src/js/**",
     },
     output: {
         file: "./dist/js/bundle.js",
         format: "iife",
         sourcemap: "inline"
     },
 };
 