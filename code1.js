gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.localVariables = [];
gdjs.Untitled_32scene2Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects1= [];
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects2= [];
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects3= [];
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects1= [];
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects2= [];
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects3= [];
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects1= [];
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects2= [];
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects3= [];
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects1= [];
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects2= [];
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects3= [];
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects1= [];
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects2= [];
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects3= [];


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

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
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.hasClippedScrollingCompleted());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene3", false);
}
}

}


};gdjs.Untitled_32scene2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "DialogueData");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}
{gdjs.dialogueTree.startFrom("Begin");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueTXT"), gdjs.Untitled_32scene2Code.GDDialogueTXTObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDDialogueTXTObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDDialogueTXTObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects1.length = 0;
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects2.length = 0;
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects3.length = 0;
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects1.length = 0;
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects3.length = 0;
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects1.length = 0;
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects3.length = 0;
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects1.length = 0;
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects3.length = 0;

gdjs.Untitled_32scene2Code.eventsList1(runtimeScene);
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects1.length = 0;
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects2.length = 0;
gdjs.Untitled_32scene2Code.GD_9544160_9551221Objects3.length = 0;
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects1.length = 0;
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_9553581_9549828_9553944uiObjects3.length = 0;
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects1.length = 0;
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_958NAMETXTObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDDialogueTXTObjects3.length = 0;
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects1.length = 0;
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_958OptionsTXTObjects3.length = 0;


return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
