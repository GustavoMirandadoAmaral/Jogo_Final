gdjs.IntroducaoCode = {};
gdjs.IntroducaoCode.localVariables = [];
gdjs.IntroducaoCode.idToCallbackMap = new Map();
gdjs.IntroducaoCode.GDFundoIntroducaoObjects1= [];
gdjs.IntroducaoCode.GDFundoIntroducaoObjects2= [];
gdjs.IntroducaoCode.GDFundoIntroducaoObjects3= [];
gdjs.IntroducaoCode.GDSombraIntroducaoObjects1= [];
gdjs.IntroducaoCode.GDSombraIntroducaoObjects2= [];
gdjs.IntroducaoCode.GDSombraIntroducaoObjects3= [];
gdjs.IntroducaoCode.GDLogoIntroducaoObjects1= [];
gdjs.IntroducaoCode.GDLogoIntroducaoObjects2= [];
gdjs.IntroducaoCode.GDLogoIntroducaoObjects3= [];
gdjs.IntroducaoCode.GDTituloHistoriaObjects1= [];
gdjs.IntroducaoCode.GDTituloHistoriaObjects2= [];
gdjs.IntroducaoCode.GDTituloHistoriaObjects3= [];
gdjs.IntroducaoCode.GDHistoriaObjects1= [];
gdjs.IntroducaoCode.GDHistoriaObjects2= [];
gdjs.IntroducaoCode.GDHistoriaObjects3= [];
gdjs.IntroducaoCode.GDTituloComandosObjects1= [];
gdjs.IntroducaoCode.GDTituloComandosObjects2= [];
gdjs.IntroducaoCode.GDTituloComandosObjects3= [];
gdjs.IntroducaoCode.GDTecla0Objects1= [];
gdjs.IntroducaoCode.GDTecla0Objects2= [];
gdjs.IntroducaoCode.GDTecla0Objects3= [];
gdjs.IntroducaoCode.GDAcao0Objects1= [];
gdjs.IntroducaoCode.GDAcao0Objects2= [];
gdjs.IntroducaoCode.GDAcao0Objects3= [];
gdjs.IntroducaoCode.GDTecla1Objects1= [];
gdjs.IntroducaoCode.GDTecla1Objects2= [];
gdjs.IntroducaoCode.GDTecla1Objects3= [];
gdjs.IntroducaoCode.GDAcao1Objects1= [];
gdjs.IntroducaoCode.GDAcao1Objects2= [];
gdjs.IntroducaoCode.GDAcao1Objects3= [];
gdjs.IntroducaoCode.GDTecla2Objects1= [];
gdjs.IntroducaoCode.GDTecla2Objects2= [];
gdjs.IntroducaoCode.GDTecla2Objects3= [];
gdjs.IntroducaoCode.GDAcao2Objects1= [];
gdjs.IntroducaoCode.GDAcao2Objects2= [];
gdjs.IntroducaoCode.GDAcao2Objects3= [];
gdjs.IntroducaoCode.GDTecla3Objects1= [];
gdjs.IntroducaoCode.GDTecla3Objects2= [];
gdjs.IntroducaoCode.GDTecla3Objects3= [];
gdjs.IntroducaoCode.GDAcao3Objects1= [];
gdjs.IntroducaoCode.GDAcao3Objects2= [];
gdjs.IntroducaoCode.GDAcao3Objects3= [];
gdjs.IntroducaoCode.GDTecla4Objects1= [];
gdjs.IntroducaoCode.GDTecla4Objects2= [];
gdjs.IntroducaoCode.GDTecla4Objects3= [];
gdjs.IntroducaoCode.GDAcao4Objects1= [];
gdjs.IntroducaoCode.GDAcao4Objects2= [];
gdjs.IntroducaoCode.GDAcao4Objects3= [];
gdjs.IntroducaoCode.GDBotaoJogarObjects1= [];
gdjs.IntroducaoCode.GDBotaoJogarObjects2= [];
gdjs.IntroducaoCode.GDBotaoJogarObjects3= [];
gdjs.IntroducaoCode.GDAvisoEnterObjects1= [];
gdjs.IntroducaoCode.GDAvisoEnterObjects2= [];
gdjs.IntroducaoCode.GDAvisoEnterObjects3= [];
gdjs.IntroducaoCode.GDVoltarMenuObjects1= [];
gdjs.IntroducaoCode.GDVoltarMenuObjects2= [];
gdjs.IntroducaoCode.GDVoltarMenuObjects3= [];


gdjs.IntroducaoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Acao0"), gdjs.IntroducaoCode.GDAcao0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Acao1"), gdjs.IntroducaoCode.GDAcao1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Acao2"), gdjs.IntroducaoCode.GDAcao2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Acao3"), gdjs.IntroducaoCode.GDAcao3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Acao4"), gdjs.IntroducaoCode.GDAcao4Objects1);
gdjs.copyArray(runtimeScene.getObjects("AvisoEnter"), gdjs.IntroducaoCode.GDAvisoEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("BotaoJogar"), gdjs.IntroducaoCode.GDBotaoJogarObjects1);
gdjs.copyArray(runtimeScene.getObjects("FundoIntroducao"), gdjs.IntroducaoCode.GDFundoIntroducaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Historia"), gdjs.IntroducaoCode.GDHistoriaObjects1);
gdjs.copyArray(runtimeScene.getObjects("LogoIntroducao"), gdjs.IntroducaoCode.GDLogoIntroducaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("SombraIntroducao"), gdjs.IntroducaoCode.GDSombraIntroducaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tecla0"), gdjs.IntroducaoCode.GDTecla0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tecla1"), gdjs.IntroducaoCode.GDTecla1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tecla2"), gdjs.IntroducaoCode.GDTecla2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tecla3"), gdjs.IntroducaoCode.GDTecla3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tecla4"), gdjs.IntroducaoCode.GDTecla4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TituloComandos"), gdjs.IntroducaoCode.GDTituloComandosObjects1);
gdjs.copyArray(runtimeScene.getObjects("TituloHistoria"), gdjs.IntroducaoCode.GDTituloHistoriaObjects1);
gdjs.copyArray(runtimeScene.getObjects("VoltarMenu"), gdjs.IntroducaoCode.GDVoltarMenuObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.min(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 1280, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 720));
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDFundoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].getBehavior("Resizable").setWidth(Math.max(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * 1672 / 941));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDFundoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].getBehavior("Resizable").setHeight((gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].getWidth()) * 941 / 1672);
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDFundoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDFundoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.IntroducaoCode.GDFundoIntroducaoObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDLogoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDLogoIntroducaoObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 76 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDLogoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDLogoIntroducaoObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 28 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDLogoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDLogoIntroducaoObjects1[i].getBehavior("Resizable").setWidth(350 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDLogoIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDLogoIntroducaoObjects1[i].getBehavior("Resizable").setHeight(139 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDBotaoJogarObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDBotaoJogarObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDBotaoJogarObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDBotaoJogarObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 581 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDBotaoJogarObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDBotaoJogarObjects1[i].getBehavior("Resizable").setWidth(280 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDBotaoJogarObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDBotaoJogarObjects1[i].getBehavior("Resizable").setHeight(84 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTituloHistoriaObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTituloHistoriaObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTituloHistoriaObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTituloHistoriaObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 189 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTituloHistoriaObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTituloHistoriaObjects1[i].setCharacterSize(27 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDHistoriaObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDHistoriaObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDHistoriaObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDHistoriaObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 235 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDHistoriaObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDHistoriaObjects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTituloComandosObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTituloComandosObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTituloComandosObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTituloComandosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 336 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTituloComandosObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTituloComandosObjects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla0Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla0Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla0Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla0Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 374 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla0Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla0Objects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao0Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao0Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 310 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao0Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao0Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 371 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao0Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao0Objects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla1Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla1Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla1Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla1Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 411 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla1Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla1Objects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao1Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao1Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 310 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao1Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao1Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 408 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao1Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao1Objects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla2Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla2Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla2Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla2Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 448 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla2Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla2Objects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao2Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao2Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 310 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao2Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao2Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 445 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao2Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao2Objects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla3Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla3Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla3Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla3Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 485 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla3Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla3Objects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao3Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao3Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 310 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao3Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao3Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 482 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao3Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao3Objects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla4Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla4Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla4Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla4Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 522 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDTecla4Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDTecla4Objects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao4Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao4Objects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 310 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao4Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao4Objects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 519 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAcao4Objects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAcao4Objects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAvisoEnterObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAvisoEnterObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 382 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAvisoEnterObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAvisoEnterObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 612 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDAvisoEnterObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDAvisoEnterObjects1[i].setCharacterSize(17 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDVoltarMenuObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDVoltarMenuObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDVoltarMenuObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDVoltarMenuObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 682 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDVoltarMenuObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDVoltarMenuObjects1[i].setCharacterSize(14 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDSombraIntroducaoObjects1[i].getBehavior("Opacity").setOpacity(95);
}
}
}

}


};gdjs.IntroducaoCode.mapOfGDgdjs_9546IntroducaoCode_9546GDBotaoJogarObjects1Objects = Hashtable.newFrom({"BotaoJogar": gdjs.IntroducaoCode.GDBotaoJogarObjects1});
gdjs.IntroducaoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BotaoJogar"), gdjs.IntroducaoCode.GDBotaoJogarObjects2);
{for(var i = 0, len = gdjs.IntroducaoCode.GDBotaoJogarObjects2.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDBotaoJogarObjects2[i].setColor("225;225;225");
}
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoJogar"), gdjs.IntroducaoCode.GDBotaoJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroducaoCode.mapOfGDgdjs_9546IntroducaoCode_9546GDBotaoJogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroducaoCode.GDBotaoJogarObjects1 */
{for(var i = 0, len = gdjs.IntroducaoCode.GDBotaoJogarObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDBotaoJogarObjects1[i].setColor("255;255;255");
}
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


};gdjs.IntroducaoCode.mapOfGDgdjs_9546IntroducaoCode_9546GDBotaoJogarObjects2Objects = Hashtable.newFrom({"BotaoJogar": gdjs.IntroducaoCode.GDBotaoJogarObjects2});
gdjs.IntroducaoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Arena", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoJogar"), gdjs.IntroducaoCode.GDBotaoJogarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroducaoCode.mapOfGDgdjs_9546IntroducaoCode_9546GDBotaoJogarObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Arena", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuInicial", false);
}
}

}


};gdjs.IntroducaoCode.eventsList3 = function(runtimeScene) {

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


gdjs.IntroducaoCode.eventsList0(runtimeScene);
}


{


gdjs.IntroducaoCode.eventsList1(runtimeScene);
}


{


gdjs.IntroducaoCode.eventsList2(runtimeScene);
}


};

gdjs.IntroducaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroducaoCode.GDFundoIntroducaoObjects1.length = 0;
gdjs.IntroducaoCode.GDFundoIntroducaoObjects2.length = 0;
gdjs.IntroducaoCode.GDFundoIntroducaoObjects3.length = 0;
gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length = 0;
gdjs.IntroducaoCode.GDSombraIntroducaoObjects2.length = 0;
gdjs.IntroducaoCode.GDSombraIntroducaoObjects3.length = 0;
gdjs.IntroducaoCode.GDLogoIntroducaoObjects1.length = 0;
gdjs.IntroducaoCode.GDLogoIntroducaoObjects2.length = 0;
gdjs.IntroducaoCode.GDLogoIntroducaoObjects3.length = 0;
gdjs.IntroducaoCode.GDTituloHistoriaObjects1.length = 0;
gdjs.IntroducaoCode.GDTituloHistoriaObjects2.length = 0;
gdjs.IntroducaoCode.GDTituloHistoriaObjects3.length = 0;
gdjs.IntroducaoCode.GDHistoriaObjects1.length = 0;
gdjs.IntroducaoCode.GDHistoriaObjects2.length = 0;
gdjs.IntroducaoCode.GDHistoriaObjects3.length = 0;
gdjs.IntroducaoCode.GDTituloComandosObjects1.length = 0;
gdjs.IntroducaoCode.GDTituloComandosObjects2.length = 0;
gdjs.IntroducaoCode.GDTituloComandosObjects3.length = 0;
gdjs.IntroducaoCode.GDTecla0Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla0Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla0Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao0Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao0Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao0Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla1Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla1Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla1Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao1Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao1Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao1Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla2Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla2Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla2Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao2Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao2Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao2Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla3Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla3Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla3Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao3Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao3Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao3Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla4Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla4Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla4Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao4Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao4Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao4Objects3.length = 0;
gdjs.IntroducaoCode.GDBotaoJogarObjects1.length = 0;
gdjs.IntroducaoCode.GDBotaoJogarObjects2.length = 0;
gdjs.IntroducaoCode.GDBotaoJogarObjects3.length = 0;
gdjs.IntroducaoCode.GDAvisoEnterObjects1.length = 0;
gdjs.IntroducaoCode.GDAvisoEnterObjects2.length = 0;
gdjs.IntroducaoCode.GDAvisoEnterObjects3.length = 0;
gdjs.IntroducaoCode.GDVoltarMenuObjects1.length = 0;
gdjs.IntroducaoCode.GDVoltarMenuObjects2.length = 0;
gdjs.IntroducaoCode.GDVoltarMenuObjects3.length = 0;

gdjs.IntroducaoCode.eventsList3(runtimeScene);
gdjs.IntroducaoCode.GDFundoIntroducaoObjects1.length = 0;
gdjs.IntroducaoCode.GDFundoIntroducaoObjects2.length = 0;
gdjs.IntroducaoCode.GDFundoIntroducaoObjects3.length = 0;
gdjs.IntroducaoCode.GDSombraIntroducaoObjects1.length = 0;
gdjs.IntroducaoCode.GDSombraIntroducaoObjects2.length = 0;
gdjs.IntroducaoCode.GDSombraIntroducaoObjects3.length = 0;
gdjs.IntroducaoCode.GDLogoIntroducaoObjects1.length = 0;
gdjs.IntroducaoCode.GDLogoIntroducaoObjects2.length = 0;
gdjs.IntroducaoCode.GDLogoIntroducaoObjects3.length = 0;
gdjs.IntroducaoCode.GDTituloHistoriaObjects1.length = 0;
gdjs.IntroducaoCode.GDTituloHistoriaObjects2.length = 0;
gdjs.IntroducaoCode.GDTituloHistoriaObjects3.length = 0;
gdjs.IntroducaoCode.GDHistoriaObjects1.length = 0;
gdjs.IntroducaoCode.GDHistoriaObjects2.length = 0;
gdjs.IntroducaoCode.GDHistoriaObjects3.length = 0;
gdjs.IntroducaoCode.GDTituloComandosObjects1.length = 0;
gdjs.IntroducaoCode.GDTituloComandosObjects2.length = 0;
gdjs.IntroducaoCode.GDTituloComandosObjects3.length = 0;
gdjs.IntroducaoCode.GDTecla0Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla0Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla0Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao0Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao0Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao0Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla1Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla1Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla1Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao1Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao1Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao1Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla2Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla2Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla2Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao2Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao2Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao2Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla3Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla3Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla3Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao3Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao3Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao3Objects3.length = 0;
gdjs.IntroducaoCode.GDTecla4Objects1.length = 0;
gdjs.IntroducaoCode.GDTecla4Objects2.length = 0;
gdjs.IntroducaoCode.GDTecla4Objects3.length = 0;
gdjs.IntroducaoCode.GDAcao4Objects1.length = 0;
gdjs.IntroducaoCode.GDAcao4Objects2.length = 0;
gdjs.IntroducaoCode.GDAcao4Objects3.length = 0;
gdjs.IntroducaoCode.GDBotaoJogarObjects1.length = 0;
gdjs.IntroducaoCode.GDBotaoJogarObjects2.length = 0;
gdjs.IntroducaoCode.GDBotaoJogarObjects3.length = 0;
gdjs.IntroducaoCode.GDAvisoEnterObjects1.length = 0;
gdjs.IntroducaoCode.GDAvisoEnterObjects2.length = 0;
gdjs.IntroducaoCode.GDAvisoEnterObjects3.length = 0;
gdjs.IntroducaoCode.GDVoltarMenuObjects1.length = 0;
gdjs.IntroducaoCode.GDVoltarMenuObjects2.length = 0;
gdjs.IntroducaoCode.GDVoltarMenuObjects3.length = 0;


return;

}

gdjs['IntroducaoCode'] = gdjs.IntroducaoCode;
