/**
 * @fileoverview Eslint plugin for splunk UCC global configuration file
 * @author splunk-UCC-config
 */

const validator = require('./validators');

const contentCache = {};
// import processors
module.exports.processors = {
  '.json': {
    preprocess: function(text, fileName) {
      contentCache[fileName] = text;
      return [text];
    },
    postprocess: function(messages, fileName) {
      if (fileName.indexOf('globalConfig.json') === -1) {
        return;
      }
      let configObject = undefined;
      let errors = [];
      try {
        configObject = JSON.parse(contentCache[fileName]);
        errors = validator(configObject).errors;
      } catch (e) {
        errors.push({message: 'the global config is not a legal JSON file'});
      }
      return errors.map(d => ({
        ruleId: 'splunk-ucc-config',
        severity: 2,
        message: d.message,
        line: -1,
        column: -1
      }));
    }
  }
};
