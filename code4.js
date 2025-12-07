gdjs.Untitled_32scene5Code = {};
gdjs.Untitled_32scene5Code.localVariables = [];
gdjs.Untitled_32scene5Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene5Code.GDGlitchTextObjects1= [];
gdjs.Untitled_32scene5Code.GDGlitchTextObjects2= [];


gdjs.Untitled_32scene5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GlitchText"), gdjs.Untitled_32scene5Code.GDGlitchTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene5Code.GDGlitchTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene5Code.GDGlitchTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene5Code.GDGlitchTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene5Code.GDGlitchTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 225, "linear", 2, false);
}
}
}

}


};

gdjs.Untitled_32scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene5Code.GDGlitchTextObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDGlitchTextObjects2.length = 0;

gdjs.Untitled_32scene5Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene5Code.GDGlitchTextObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDGlitchTextObjects2.length = 0;


return;

}

gdjs['Untitled_32scene5Code'] = gdjs.Untitled_32scene5Code;
