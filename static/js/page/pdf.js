require('../../css/pdf.scss');

import hljs from 'highlight.js';
import kotlin from 'highlight.js/lib/languages/kotlin';

hljs.registerLanguage('kotlin', kotlin);

const $ = require('jquery');
const SAMPLE_START = '//sampleStart';
const SAMPLE_END = '//sampleEnd';

$(document).ready(function () {
  $('.sample').each((ind, element) => {
    const codeElement = $(element).find('code')[0];
    let code = codeElement.textContent;
    code = code.split('\n').filter(line => !line.includes(SAMPLE_END)).filter(line => !line.includes(SAMPLE_START)).join("\n")
    // const startIndex = code.indexOf(SAMPLE_START);
    // const endIndex = code.indexOf(SAMPLE_END);
    // if (startIndex > -1 && endIndex > -1) {
    //   code = code.substring(code.indexOf(SAMPLE_START) + SAMPLE_START.length + 1);
    //   code = code.substring(0, code.indexOf(SAMPLE_END));
    //   if (code.charAt(0) === " ") code = code.split('\n').map(l => l.substring(2)).join("\n")
    // }
    codeElement.textContent = code;
    hljs.highlightBlock(codeElement);
  });
});
