gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548176_9544221Objects1= [];
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548176_9544221Objects2= [];
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects1= [];
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GD_95959549884_95959551089_95959548260_95959553948Objects1Objects = Hashtable.newFrom({"시작버튼": gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "시퀀스 01.mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("시작버튼"), gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GD_95959549884_95959551089_95959548260_95959553948Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548176_9544221Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548176_9544221Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548176_9544221Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548176_9544221Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9549884_9551089_9548260_9553948Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
