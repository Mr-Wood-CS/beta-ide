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
  `,
});