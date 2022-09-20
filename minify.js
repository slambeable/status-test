import minify from '@node-minify/core';
import uglifyjs from '@node-minify/uglify-js';

minify({
  compressor: uglifyjs,
  input: 'build/**/*.js',
  output: 'build/index.min.cjs',
});
