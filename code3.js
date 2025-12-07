gdjs.Untitled_32scene4Code = {};
gdjs.Untitled_32scene4Code.localVariables = [];
gdjs.Untitled_32scene4Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects1= [];
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects2= [];
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects3= [];
gdjs.Untitled_32scene4Code.GDblackObjects1= [];
gdjs.Untitled_32scene4Code.GDblackObjects2= [];
gdjs.Untitled_32scene4Code.GDblackObjects3= [];
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects1= [];
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects2= [];
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects3= [];
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1= [];
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects2= [];
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects3= [];
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1= [];
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects2= [];
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects3= [];
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1= [];
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects2= [];
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects3= [];
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1= [];
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects2= [];
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects3= [];


gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GD_95959549324_95959546988_959595954Objects1Objects = Hashtable.newFrom({"사람_4": gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1});
gdjs.Untitled_32scene4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "typewriter") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9373980);
}
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


};gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GD_95959553581_95959549828_95959553944_95959552856Objects1Objects = Hashtable.newFrom({"텍스트칸": gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1});
gdjs.Untitled_32scene4Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("내용"), gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects2);
gdjs.copyArray(runtimeScene.getObjects("사람_4"), gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("산배경"), gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects2);
gdjs.copyArray(runtimeScene.getObjects("이름"), gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects2);
gdjs.copyArray(gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1, gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects2);

{gdjs.evtTools.camera.showLayer(runtimeScene, "GlitchLayer");
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "Amount", gdjs.random(10));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "blueX", gdjs.random(8));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "blueY", gdjs.random(8));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "greenX", gdjs.random(8));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "greenY", gdjs.random(8));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "redX", gdjs.random(8));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "redY", gdjs.random(8));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "Intensity", gdjs.random(10));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "GlitchLayer", "Effect", "slices", gdjs.random(10));
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects2[i].setLayer("GlitchLayer");
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects2[i].setLayer("GlitchLayer");
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects2[i].setLayer("GlitchLayer");
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects2[i].setLayer("GlitchLayer");
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects2[i].setLayer("GlitchLayer");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 15);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9453748);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene5", false);
}
}

}


};gdjs.Untitled_32scene4Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.Untitled_32scene4Code.GDblackObjects1);
gdjs.copyArray(runtimeScene.getObjects("내용"), gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1);
gdjs.copyArray(runtimeScene.getObjects("사람_4"), gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("이름"), gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1);
gdjs.copyArray(runtimeScene.getObjects("텍스트칸"), gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDblackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDblackObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 4, false);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GlitchLayer");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.Untitled_32scene4Code.GDblackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDblackObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDblackObjects1[i].getBehavior("Tween").hasFinished("fade") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDblackObjects1[k] = gdjs.Untitled_32scene4Code.GDblackObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDblackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8845004);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextImageDelay");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.Untitled_32scene4Code.GDblackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDblackObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDblackObjects1[i].getTimerElapsedTimeInSecondsOrNaN("fade") < 4 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDblackObjects1[k] = gdjs.Untitled_32scene4Code.GDblackObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDblackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9798956);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene4Code.GDblackObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDblackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDblackObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 225, "linear", 500, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("사람_4"), gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("사람_4"), gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GD_95959549324_95959546988_959595954Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextImageDelay") >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9678236);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("내용"), gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1);
gdjs.copyArray(runtimeScene.getObjects("이름"), gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1);
gdjs.copyArray(runtimeScene.getObjects("텍스트칸"), gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1);
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "DialougeDate3");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}
{gdjs.dialogueTree.startFrom("Begin");
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "NextImageDelay");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9519828);
}
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "typewriter") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("내용"), gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Untitled_32scene4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("텍스트칸"), gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GD_95959553581_95959549828_95959553944_95959552856Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9374340);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}

{ //Subevents
gdjs.Untitled_32scene4Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects3.length = 0;
gdjs.Untitled_32scene4Code.GDblackObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDblackObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDblackObjects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects3.length = 0;

gdjs.Untitled_32scene4Code.eventsList2(runtimeScene);
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9549328_9548176_9544221Objects3.length = 0;
gdjs.Untitled_32scene4Code.GDblackObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDblackObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDblackObjects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9550668_9551088_9554617_9549373Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9549324_9546988_95954Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9553581_9549828_9553944_9552856Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9551060_9547492Objects3.length = 0;
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects1.length = 0;
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects2.length = 0;
gdjs.Untitled_32scene4Code.GD_9545236_9550857Objects3.length = 0;


return;

}

gdjs['Untitled_32scene4Code'] = gdjs.Untitled_32scene4Code;
