gdjs.MenuInicialCode = {};
gdjs.MenuInicialCode.localVariables = [];
gdjs.MenuInicialCode.idToCallbackMap = new Map();
gdjs.MenuInicialCode.GDFundoMenuObjects1= [];
gdjs.MenuInicialCode.GDFundoMenuObjects2= [];
gdjs.MenuInicialCode.GDFundoMenuObjects3= [];
gdjs.MenuInicialCode.GDLuzMenuObjects1= [];
gdjs.MenuInicialCode.GDLuzMenuObjects2= [];
gdjs.MenuInicialCode.GDLuzMenuObjects3= [];
gdjs.MenuInicialCode.GDTituloObjects1= [];
gdjs.MenuInicialCode.GDTituloObjects2= [];
gdjs.MenuInicialCode.GDTituloObjects3= [];
gdjs.MenuInicialCode.GDBotaoIniciarObjects1= [];
gdjs.MenuInicialCode.GDBotaoIniciarObjects2= [];
gdjs.MenuInicialCode.GDBotaoIniciarObjects3= [];
gdjs.MenuInicialCode.GDBotaoCreditosObjects1= [];
gdjs.MenuInicialCode.GDBotaoCreditosObjects2= [];
gdjs.MenuInicialCode.GDBotaoCreditosObjects3= [];
gdjs.MenuInicialCode.GDBotaoSairObjects1= [];
gdjs.MenuInicialCode.GDBotaoSairObjects2= [];
gdjs.MenuInicialCode.GDBotaoSairObjects3= [];


gdjs.MenuInicialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BotaoCreditos"), gdjs.MenuInicialCode.GDBotaoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("BotaoIniciar"), gdjs.MenuInicialCode.GDBotaoIniciarObjects1);
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.MenuInicialCode.GDBotaoSairObjects1);
gdjs.copyArray(runtimeScene.getObjects("FundoMenu"), gdjs.MenuInicialCode.GDFundoMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("LuzMenu"), gdjs.MenuInicialCode.GDLuzMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo"), gdjs.MenuInicialCode.GDTituloObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.min(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 1280, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 720));
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDFundoMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDFundoMenuObjects1[i].getBehavior("Resizable").setWidth(Math.max(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * (1672 / 941)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDFundoMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDFundoMenuObjects1[i].getBehavior("Resizable").setHeight((gdjs.MenuInicialCode.GDFundoMenuObjects1[i].getWidth()) / (1672 / 941));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDFundoMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDFundoMenuObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.MenuInicialCode.GDFundoMenuObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDFundoMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDFundoMenuObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.MenuInicialCode.GDFundoMenuObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoIniciarObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 96 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoIniciarObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 350 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoIniciarObjects1[i].getBehavior("Resizable").setWidth(350 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoIniciarObjects1[i].getBehavior("Resizable").setHeight(110 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 96 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 466 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects1[i].getBehavior("Resizable").setWidth(350 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects1[i].getBehavior("Resizable").setHeight(110 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoSairObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoSairObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 96 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoSairObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoSairObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 582 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoSairObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoSairObjects1[i].getBehavior("Resizable").setWidth(350 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoSairObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoSairObjects1[i].getBehavior("Resizable").setHeight(110 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDLuzMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDLuzMenuObjects1[i].getBehavior("Resizable").setWidth(200 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDLuzMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDLuzMenuObjects1[i].getBehavior("Resizable").setHeight(200 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDLuzMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDLuzMenuObjects1[i].setX((( gdjs.MenuInicialCode.GDFundoMenuObjects1.length === 0 ) ? 0 :gdjs.MenuInicialCode.GDFundoMenuObjects1[0].getPointX("")) + (( gdjs.MenuInicialCode.GDFundoMenuObjects1.length === 0 ) ? 0 :gdjs.MenuInicialCode.GDFundoMenuObjects1[0].getWidth()) * 0.844 - (gdjs.MenuInicialCode.GDLuzMenuObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDLuzMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDLuzMenuObjects1[i].setY((( gdjs.MenuInicialCode.GDFundoMenuObjects1.length === 0 ) ? 0 :gdjs.MenuInicialCode.GDFundoMenuObjects1[0].getPointY("")) + (( gdjs.MenuInicialCode.GDFundoMenuObjects1.length === 0 ) ? 0 :gdjs.MenuInicialCode.GDFundoMenuObjects1[0].getHeight()) * 0.096 - (gdjs.MenuInicialCode.GDLuzMenuObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDLuzMenuObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDLuzMenuObjects1[i].getBehavior("Opacity").setOpacity(65 + 9 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.7));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDTituloObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 68 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDTituloObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 112 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDTituloObjects1[i].getBehavior("Resizable").setWidth(470 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDTituloObjects1[i].getBehavior("Resizable").setHeight(186 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


};gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoIniciarObjects2Objects = Hashtable.newFrom({"BotaoIniciar": gdjs.MenuInicialCode.GDBotaoIniciarObjects2});
gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoSairObjects2Objects = Hashtable.newFrom({"BotaoSair": gdjs.MenuInicialCode.GDBotaoSairObjects2});
gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoCreditosObjects1Objects = Hashtable.newFrom({"BotaoCreditos": gdjs.MenuInicialCode.GDBotaoCreditosObjects1});
gdjs.MenuInicialCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BotaoCreditos"), gdjs.MenuInicialCode.GDBotaoCreditosObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoIniciar"), gdjs.MenuInicialCode.GDBotaoIniciarObjects2);
gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.MenuInicialCode.GDBotaoSairObjects2);
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", null);
}
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoIniciarObjects2.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoIniciarObjects2[i].setColor("225;225;225");
}
for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoSairObjects2[i].setColor("225;225;225");
}
for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects2.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects2[i].setColor("225;225;225");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoIniciar"), gdjs.MenuInicialCode.GDBotaoIniciarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoIniciarObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuInicialCode.GDBotaoIniciarObjects2 */
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoIniciarObjects2.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoIniciarObjects2[i].setColor("255;255;255");
}
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.MenuInicialCode.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoSairObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuInicialCode.GDBotaoSairObjects2 */
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoSairObjects2.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoSairObjects2[i].setColor("255;255;255");
}
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoCreditos"), gdjs.MenuInicialCode.GDBotaoCreditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoCreditosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuInicialCode.GDBotaoCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuInicialCode.GDBotaoCreditosObjects1[i].setColor("255;255;255");
}
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


};gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoIniciarObjects2Objects = Hashtable.newFrom({"BotaoIniciar": gdjs.MenuInicialCode.GDBotaoIniciarObjects2});
gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoSairObjects2Objects = Hashtable.newFrom({"BotaoSair": gdjs.MenuInicialCode.GDBotaoSairObjects2});
gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoCreditosObjects1Objects = Hashtable.newFrom({"BotaoCreditos": gdjs.MenuInicialCode.GDBotaoCreditosObjects1});
gdjs.MenuInicialCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BotaoIniciar"), gdjs.MenuInicialCode.GDBotaoIniciarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoIniciarObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introducao", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoSair"), gdjs.MenuInicialCode.GDBotaoSairObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoSairObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoCreditos"), gdjs.MenuInicialCode.GDBotaoCreditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuInicialCode.mapOfGDgdjs_9546MenuInicialCode_9546GDBotaoCreditosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Creditos", false);
}
}

}


};gdjs.MenuInicialCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sons/musica_menu.mp3", 1, true, 20, 1);
}
}

}


{


gdjs.MenuInicialCode.eventsList0(runtimeScene);
}


{


gdjs.MenuInicialCode.eventsList1(runtimeScene);
}


{


gdjs.MenuInicialCode.eventsList2(runtimeScene);
}


};

gdjs.MenuInicialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuInicialCode.GDFundoMenuObjects1.length = 0;
gdjs.MenuInicialCode.GDFundoMenuObjects2.length = 0;
gdjs.MenuInicialCode.GDFundoMenuObjects3.length = 0;
gdjs.MenuInicialCode.GDLuzMenuObjects1.length = 0;
gdjs.MenuInicialCode.GDLuzMenuObjects2.length = 0;
gdjs.MenuInicialCode.GDLuzMenuObjects3.length = 0;
gdjs.MenuInicialCode.GDTituloObjects1.length = 0;
gdjs.MenuInicialCode.GDTituloObjects2.length = 0;
gdjs.MenuInicialCode.GDTituloObjects3.length = 0;
gdjs.MenuInicialCode.GDBotaoIniciarObjects1.length = 0;
gdjs.MenuInicialCode.GDBotaoIniciarObjects2.length = 0;
gdjs.MenuInicialCode.GDBotaoIniciarObjects3.length = 0;
gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length = 0;
gdjs.MenuInicialCode.GDBotaoCreditosObjects2.length = 0;
gdjs.MenuInicialCode.GDBotaoCreditosObjects3.length = 0;
gdjs.MenuInicialCode.GDBotaoSairObjects1.length = 0;
gdjs.MenuInicialCode.GDBotaoSairObjects2.length = 0;
gdjs.MenuInicialCode.GDBotaoSairObjects3.length = 0;

gdjs.MenuInicialCode.eventsList3(runtimeScene);
gdjs.MenuInicialCode.GDFundoMenuObjects1.length = 0;
gdjs.MenuInicialCode.GDFundoMenuObjects2.length = 0;
gdjs.MenuInicialCode.GDFundoMenuObjects3.length = 0;
gdjs.MenuInicialCode.GDLuzMenuObjects1.length = 0;
gdjs.MenuInicialCode.GDLuzMenuObjects2.length = 0;
gdjs.MenuInicialCode.GDLuzMenuObjects3.length = 0;
gdjs.MenuInicialCode.GDTituloObjects1.length = 0;
gdjs.MenuInicialCode.GDTituloObjects2.length = 0;
gdjs.MenuInicialCode.GDTituloObjects3.length = 0;
gdjs.MenuInicialCode.GDBotaoIniciarObjects1.length = 0;
gdjs.MenuInicialCode.GDBotaoIniciarObjects2.length = 0;
gdjs.MenuInicialCode.GDBotaoIniciarObjects3.length = 0;
gdjs.MenuInicialCode.GDBotaoCreditosObjects1.length = 0;
gdjs.MenuInicialCode.GDBotaoCreditosObjects2.length = 0;
gdjs.MenuInicialCode.GDBotaoCreditosObjects3.length = 0;
gdjs.MenuInicialCode.GDBotaoSairObjects1.length = 0;
gdjs.MenuInicialCode.GDBotaoSairObjects2.length = 0;
gdjs.MenuInicialCode.GDBotaoSairObjects3.length = 0;


return;

}

gdjs['MenuInicialCode'] = gdjs.MenuInicialCode;
