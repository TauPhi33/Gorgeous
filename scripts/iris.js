const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');
const s = require('Scene');

Promise.all([
    Textures.findFirst('VV1'),
    Textures.findFirst('V1'),
    Textures.findFirst('VM1C'),
    Textures.findFirst('BVV1'),
    Textures.findFirst('VM1'),
    Textures.findFirst('VBB1'),
    Textures.findFirst('VB1'),
    Textures.findFirst('VB2'),
    Textures.findFirst('B2'),
    Textures.findFirst('BBM1'),
    Textures.findFirst('BVM3'),
    Textures.findFirst('BM7'),
    Textures.findFirst('BM4'),
]).then(onReady);


function onReady(assets) {

    const texture0 = assets[0];
    const texture1 = assets[1];
    const texture2 = assets[2];
    const texture3 = assets[3];
    const texture4 = assets[4];
    const texture5 = assets[5];
    const texture6 = assets[6];
    const texture7 = assets[7];
    const texture8 = assets[8];
    const texture9 = assets[9];
    const texture10 = assets[10];
    const texture11 = assets[11];
    const texture12 = assets[12];



    const picker = NativeUI.picker;

    const index = 0;
    const selection = 0;

    const configuration = {

      selectedIndex: index,

      items: [
        {image_texture: texture0},
        {image_texture: texture1},
        {image_texture: texture2},
        {image_texture: texture3},
        {image_texture: texture4},
        {image_texture: texture5},
        {image_texture: texture6},
        {image_texture: texture7},
        {image_texture: texture8},
        {image_texture: texture9},
        {image_texture: texture10},
        {image_texture: texture11},
        {image_texture: texture12},
      ]

    };

    picker.configure(configuration);
    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(index) {
      Patches.inputs.setScalar('selection', index.newValue);
    });

    Patches.getScalarValue("score").monitor().subscribe(()=>{
    s.root.find(Patches.getStringValue("textname").pinLastValue()).text = Patches.getScalarValue("score").toString();
    });


}
