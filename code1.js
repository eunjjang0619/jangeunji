gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.idToCallbackMap = new Map();
gdjs._50Code.GDNewSpriteObjects1= [];
gdjs._50Code.GDNewSpriteObjects2= [];
gdjs._50Code.GDNewSpriteObjects3= [];
gdjs._50Code.GDNewSpriteObjects4= [];
gdjs._50Code.GDNewSprite3Objects1= [];
gdjs._50Code.GDNewSprite3Objects2= [];
gdjs._50Code.GDNewSprite3Objects3= [];
gdjs._50Code.GDNewSprite3Objects4= [];
gdjs._50Code.GDNewTiledSpriteObjects1= [];
gdjs._50Code.GDNewTiledSpriteObjects2= [];
gdjs._50Code.GDNewTiledSpriteObjects3= [];
gdjs._50Code.GDNewTiledSpriteObjects4= [];
gdjs._50Code.GDNewSprite4Objects1= [];
gdjs._50Code.GDNewSprite4Objects2= [];
gdjs._50Code.GDNewSprite4Objects3= [];
gdjs._50Code.GDNewSprite4Objects4= [];
gdjs._50Code.GDNewSprite5Objects1= [];
gdjs._50Code.GDNewSprite5Objects2= [];
gdjs._50Code.GDNewSprite5Objects3= [];
gdjs._50Code.GDNewSprite5Objects4= [];
gdjs._50Code.GDNewTiledSprite2Objects1= [];
gdjs._50Code.GDNewTiledSprite2Objects2= [];
gdjs._50Code.GDNewTiledSprite2Objects3= [];
gdjs._50Code.GDNewTiledSprite2Objects4= [];
gdjs._50Code.GDyumObjects1= [];
gdjs._50Code.GDyumObjects2= [];
gdjs._50Code.GDyumObjects3= [];
gdjs._50Code.GDyumObjects4= [];
gdjs._50Code.GDNewSprite2Objects1= [];
gdjs._50Code.GDNewSprite2Objects2= [];
gdjs._50Code.GDNewSprite2Objects3= [];
gdjs._50Code.GDNewSprite2Objects4= [];


gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs._50Code.GDNewTiledSprite2Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._50Code.GDNewSprite2Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs._50Code.GDNewTiledSprite2Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs._50Code.GDNewTiledSprite2Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._50Code.GDNewSprite2Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._50Code.GDNewSpriteObjects1});
gdjs._50Code.asyncCallback9381308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects4);

{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects4.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9381308, gdjs._50Code.asyncCallback9381308);
gdjs._50Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9381308(runtimeScene, asyncObjectsList)), 9381308, asyncObjectsList);
}
}

}


};gdjs._50Code.asyncCallback9381164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("yum"), gdjs._50Code.GDyumObjects3);

{for(var i = 0, len = gdjs._50Code.GDyumObjects3.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects3[i].hide();
}
}

{ //Subevents
gdjs._50Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9381164, gdjs._50Code.asyncCallback9381164);
gdjs._50Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs._50Code.GDyumObjects2) asyncObjectsList.addObject("yum", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9381164(runtimeScene, asyncObjectsList)), 9381164, asyncObjectsList);
}
}

}


};gdjs._50Code.asyncCallback9380876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._50Code.GDNewSpriteObjects2);

gdjs.copyArray(runtimeScene.getObjects("yum"), gdjs._50Code.GDyumObjects2);
{for(var i = 0, len = gdjs._50Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._50Code.GDNewSpriteObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDyumObjects2.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects2[i].hide(false);
}
}

{ //Subevents
gdjs._50Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9380876, gdjs._50Code.asyncCallback9380876);
gdjs._50Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
for (const obj of gdjs._50Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9380876(runtimeScene, asyncObjectsList)), 9380876, asyncObjectsList);
}
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._50Code.GDNewSprite5Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._50Code.GDNewSprite4Objects1});
gdjs._50Code.asyncCallback9383572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects4);

{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects4.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9383572, gdjs._50Code.asyncCallback9383572);
gdjs._50Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9383572(runtimeScene, asyncObjectsList)), 9383572, asyncObjectsList);
}
}

}


};gdjs._50Code.asyncCallback9383428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("yum"), gdjs._50Code.GDyumObjects3);

{for(var i = 0, len = gdjs._50Code.GDyumObjects3.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects3[i].hide();
}
}

{ //Subevents
gdjs._50Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9383428, gdjs._50Code.asyncCallback9383428);
gdjs._50Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs._50Code.GDyumObjects2) asyncObjectsList.addObject("yum", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9383428(runtimeScene, asyncObjectsList)), 9383428, asyncObjectsList);
}
}

}


};gdjs._50Code.asyncCallback9383092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs._50Code.GDNewSprite4Objects2);

gdjs.copyArray(runtimeScene.getObjects("yum"), gdjs._50Code.GDyumObjects2);
{for(var i = 0, len = gdjs._50Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite4Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDyumObjects2.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects2[i].hide(false);
}
}

{ //Subevents
gdjs._50Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9383092, gdjs._50Code.asyncCallback9383092);
gdjs._50Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs._50Code.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9383092(runtimeScene, asyncObjectsList)), 9383092, asyncObjectsList);
}
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._50Code.GDNewSprite5Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._50Code.GDNewSprite5Objects1});
gdjs._50Code.asyncCallback9385772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects4);

{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects4.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9385772, gdjs._50Code.asyncCallback9385772);
gdjs._50Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9385772(runtimeScene, asyncObjectsList)), 9385772, asyncObjectsList);
}
}

}


};gdjs._50Code.asyncCallback9385628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("yum"), gdjs._50Code.GDyumObjects3);

{for(var i = 0, len = gdjs._50Code.GDyumObjects3.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects3[i].hide();
}
}

{ //Subevents
gdjs._50Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9385628, gdjs._50Code.asyncCallback9385628);
gdjs._50Code.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs._50Code.GDyumObjects2) asyncObjectsList.addObject("yum", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9385628(runtimeScene, asyncObjectsList)), 9385628, asyncObjectsList);
}
}

}


};gdjs._50Code.asyncCallback9385292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite5"), gdjs._50Code.GDNewSprite5Objects2);

gdjs.copyArray(runtimeScene.getObjects("yum"), gdjs._50Code.GDyumObjects2);
{for(var i = 0, len = gdjs._50Code.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite5Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDyumObjects2.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects2[i].hide(false);
}
}

{ //Subevents
gdjs._50Code.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(9385292, gdjs._50Code.asyncCallback9385292);
gdjs._50Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs._50Code.GDNewSprite5Objects1) asyncObjectsList.addObject("NewSprite5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback9385292(runtimeScene, asyncObjectsList)), 9385292, asyncObjectsList);
}
}

}


};gdjs._50Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._50Code.GDNewSprite2Objects1.length !== 0 ? gdjs._50Code.GDNewSprite2Objects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs._50Code.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewTiledSprite2Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDNewSprite2Objects1 */
/* Reuse gdjs._50Code.GDNewTiledSprite2Objects1 */
{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewTiledSprite2Objects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._50Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._50Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("yum"), gdjs._50Code.GDyumObjects1);
{for(var i = 0, len = gdjs._50Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDyumObjects1.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDyumObjects1.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50Code.GDyumObjects1.length ;i < len;++i) {
    gdjs._50Code.GDyumObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._50Code.GDNewSprite2Objects1.length !== 0 ? gdjs._50Code.GDNewSprite2Objects1[0] : null), true, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs._50Code.GDNewTiledSprite2Objects1);
{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewTiledSprite2Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._50Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite2Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9379988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDNewSpriteObjects1 */
/* Reuse gdjs._50Code.GDNewSprite2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "S-eating.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs._50Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSpriteObjects1[i].hide(false);
}
}

{ //Subevents
gdjs._50Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._50Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9381940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);
/* Reuse gdjs._50Code.GDNewSprite4Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "S-eating.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite4Objects1[i].hide(false);
}
}

{ //Subevents
gdjs._50Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._50Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9384396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50Code.GDNewSprite2Objects1);
/* Reuse gdjs._50Code.GDNewSprite5Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "S-eating.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite5Objects1[i].hide(false);
}
}

{ //Subevents
gdjs._50Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDNewSpriteObjects1.length = 0;
gdjs._50Code.GDNewSpriteObjects2.length = 0;
gdjs._50Code.GDNewSpriteObjects3.length = 0;
gdjs._50Code.GDNewSpriteObjects4.length = 0;
gdjs._50Code.GDNewSprite3Objects1.length = 0;
gdjs._50Code.GDNewSprite3Objects2.length = 0;
gdjs._50Code.GDNewSprite3Objects3.length = 0;
gdjs._50Code.GDNewSprite3Objects4.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects4.length = 0;
gdjs._50Code.GDNewSprite4Objects1.length = 0;
gdjs._50Code.GDNewSprite4Objects2.length = 0;
gdjs._50Code.GDNewSprite4Objects3.length = 0;
gdjs._50Code.GDNewSprite4Objects4.length = 0;
gdjs._50Code.GDNewSprite5Objects1.length = 0;
gdjs._50Code.GDNewSprite5Objects2.length = 0;
gdjs._50Code.GDNewSprite5Objects3.length = 0;
gdjs._50Code.GDNewSprite5Objects4.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects3.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects4.length = 0;
gdjs._50Code.GDyumObjects1.length = 0;
gdjs._50Code.GDyumObjects2.length = 0;
gdjs._50Code.GDyumObjects3.length = 0;
gdjs._50Code.GDyumObjects4.length = 0;
gdjs._50Code.GDNewSprite2Objects1.length = 0;
gdjs._50Code.GDNewSprite2Objects2.length = 0;
gdjs._50Code.GDNewSprite2Objects3.length = 0;
gdjs._50Code.GDNewSprite2Objects4.length = 0;

gdjs._50Code.eventsList9(runtimeScene);
gdjs._50Code.GDNewSpriteObjects1.length = 0;
gdjs._50Code.GDNewSpriteObjects2.length = 0;
gdjs._50Code.GDNewSpriteObjects3.length = 0;
gdjs._50Code.GDNewSpriteObjects4.length = 0;
gdjs._50Code.GDNewSprite3Objects1.length = 0;
gdjs._50Code.GDNewSprite3Objects2.length = 0;
gdjs._50Code.GDNewSprite3Objects3.length = 0;
gdjs._50Code.GDNewSprite3Objects4.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._50Code.GDNewTiledSpriteObjects4.length = 0;
gdjs._50Code.GDNewSprite4Objects1.length = 0;
gdjs._50Code.GDNewSprite4Objects2.length = 0;
gdjs._50Code.GDNewSprite4Objects3.length = 0;
gdjs._50Code.GDNewSprite4Objects4.length = 0;
gdjs._50Code.GDNewSprite5Objects1.length = 0;
gdjs._50Code.GDNewSprite5Objects2.length = 0;
gdjs._50Code.GDNewSprite5Objects3.length = 0;
gdjs._50Code.GDNewSprite5Objects4.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects3.length = 0;
gdjs._50Code.GDNewTiledSprite2Objects4.length = 0;
gdjs._50Code.GDyumObjects1.length = 0;
gdjs._50Code.GDyumObjects2.length = 0;
gdjs._50Code.GDyumObjects3.length = 0;
gdjs._50Code.GDyumObjects4.length = 0;
gdjs._50Code.GDNewSprite2Objects1.length = 0;
gdjs._50Code.GDNewSprite2Objects2.length = 0;
gdjs._50Code.GDNewSprite2Objects3.length = 0;
gdjs._50Code.GDNewSprite2Objects4.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
