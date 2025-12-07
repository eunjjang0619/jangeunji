gdjs.Untitled_32scene3Code = {};
gdjs.Untitled_32scene3Code.localVariables = [];
gdjs.Untitled_32scene3Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects3= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects3= [];
gdjs.Untitled_32scene3Code.GD_958blackboxObjects1= [];
gdjs.Untitled_32scene3Code.GD_958blackboxObjects2= [];
gdjs.Untitled_32scene3Code.GD_958blackboxObjects3= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects1= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects2= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects3= [];
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1= [];
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects2= [];
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects3= [];
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1= [];
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects2= [];
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects3= [];


gdjs.Untitled_32scene3Code.eventsList0 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9366948);
}
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


};gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32scene3Code.GDNewSprite2Objects1});
gdjs.Untitled_32scene3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blackbox"), gdjs.Untitled_32scene3Code.GD_958blackboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogueTXT2"), gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32scene3Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("이름"), gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 4, false);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("blackbox"), gdjs.Untitled_32scene3Code.GD_958blackboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[i].getTimerElapsedTimeInSecondsOrNaN("fade") < 4 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[k] = gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9194268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GD_958blackboxObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 225, "linear", 500, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("blackbox"), gdjs.Untitled_32scene3Code.GD_958blackboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[i].getBehavior("Tween").hasFinished("fade") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[k] = gdjs.Untitled_32scene3Code.GD_958blackboxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9203804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextImageDelay");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextImageDelay") >= 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9516564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueTXT2"), gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32scene3Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("이름"), gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1);
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "DialougeDate2");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}
{gdjs.dialogueTree.startFrom("Begin");
}
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "NextImageDelay");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueTXT2"), gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Untitled_32scene3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene3Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4", false);
}
}

}


};

gdjs.Untitled_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length = 0;
gdjs.Untitled_32scene3Code.GD_958blackboxObjects2.length = 0;
gdjs.Untitled_32scene3Code.GD_958blackboxObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects3.length = 0;
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1.length = 0;
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects2.length = 0;
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects3.length = 0;

gdjs.Untitled_32scene3Code.eventsList1(runtimeScene);
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32scene3Code.GD_958blackboxObjects1.length = 0;
gdjs.Untitled_32scene3Code.GD_958blackboxObjects2.length = 0;
gdjs.Untitled_32scene3Code.GD_958blackboxObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects3.length = 0;
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects1.length = 0;
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects2.length = 0;
gdjs.Untitled_32scene3Code.GD_9551060_9547492Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDDialogueTXT2Objects3.length = 0;


return;

}

gdjs['Untitled_32scene3Code'] = gdjs.Untitled_32scene3Code;
