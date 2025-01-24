import * as Blockly from 'blockly';

// Initialize Blockly
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="text"></block>
    </xml>
  `
});

const toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "controls_if"
    },
    {
      "kind": "block",
      "type": "controls_repeat_ext"
    },
    {
      "kind": "block",
      "type": "logic_compare"
    },
    {
      "kind": "block",
      "type": "math_number"
    },
    {
      "kind": "block",
      "type": "math_arithmetic"
    },
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "text_print"
    },
  ]
}
