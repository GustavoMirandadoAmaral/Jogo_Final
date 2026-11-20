gdjs.CreditosCode = {};
gdjs.CreditosCode.localVariables = [];
gdjs.CreditosCode.idToCallbackMap = new Map();
gdjs.CreditosCode.GDFundoCreditosObjects1= [];
gdjs.CreditosCode.GDFundoCreditosObjects2= [];
gdjs.CreditosCode.GDFundoCreditosObjects3= [];
gdjs.CreditosCode.GDSombraCreditosObjects1= [];
gdjs.CreditosCode.GDSombraCreditosObjects2= [];
gdjs.CreditosCode.GDSombraCreditosObjects3= [];
gdjs.CreditosCode.GDPainelCreditosObjects1= [];
gdjs.CreditosCode.GDPainelCreditosObjects2= [];
gdjs.CreditosCode.GDPainelCreditosObjects3= [];
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1= [];
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2= [];
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects3= [];
gdjs.CreditosCode.GDTituloCreditosObjects1= [];
gdjs.CreditosCode.GDTituloCreditosObjects2= [];
gdjs.CreditosCode.GDTituloCreditosObjects3= [];
gdjs.CreditosCode.GDNomeJogoCreditosObjects1= [];
gdjs.CreditosCode.GDNomeJogoCreditosObjects2= [];
gdjs.CreditosCode.GDNomeJogoCreditosObjects3= [];
gdjs.CreditosCode.GDConcepcaoCreditosObjects1= [];
gdjs.CreditosCode.GDConcepcaoCreditosObjects2= [];
gdjs.CreditosCode.GDConcepcaoCreditosObjects3= [];
gdjs.CreditosCode.GDNomeGustavoCreditosObjects1= [];
gdjs.CreditosCode.GDNomeGustavoCreditosObjects2= [];
gdjs.CreditosCode.GDNomeGustavoCreditosObjects3= [];
gdjs.CreditosCode.GDParteGustavoCreditosObjects1= [];
gdjs.CreditosCode.GDParteGustavoCreditosObjects2= [];
gdjs.CreditosCode.GDParteGustavoCreditosObjects3= [];
gdjs.CreditosCode.GDNomeLucasCreditosObjects1= [];
gdjs.CreditosCode.GDNomeLucasCreditosObjects2= [];
gdjs.CreditosCode.GDNomeLucasCreditosObjects3= [];
gdjs.CreditosCode.GDParteLucasCreditosObjects1= [];
gdjs.CreditosCode.GDParteLucasCreditosObjects2= [];
gdjs.CreditosCode.GDParteLucasCreditosObjects3= [];
gdjs.CreditosCode.GDNomeVitorCreditosObjects1= [];
gdjs.CreditosCode.GDNomeVitorCreditosObjects2= [];
gdjs.CreditosCode.GDNomeVitorCreditosObjects3= [];
gdjs.CreditosCode.GDParteVitorCreditosObjects1= [];
gdjs.CreditosCode.GDParteVitorCreditosObjects2= [];
gdjs.CreditosCode.GDParteVitorCreditosObjects3= [];
gdjs.CreditosCode.GDNomeEvertonCreditosObjects1= [];
gdjs.CreditosCode.GDNomeEvertonCreditosObjects2= [];
gdjs.CreditosCode.GDNomeEvertonCreditosObjects3= [];
gdjs.CreditosCode.GDParteEvertonCreditosObjects1= [];
gdjs.CreditosCode.GDParteEvertonCreditosObjects2= [];
gdjs.CreditosCode.GDParteEvertonCreditosObjects3= [];
gdjs.CreditosCode.GDTituloIACreditosObjects1= [];
gdjs.CreditosCode.GDTituloIACreditosObjects2= [];
gdjs.CreditosCode.GDTituloIACreditosObjects3= [];
gdjs.CreditosCode.GDUsoIACreditosObjects1= [];
gdjs.CreditosCode.GDUsoIACreditosObjects2= [];
gdjs.CreditosCode.GDUsoIACreditosObjects3= [];
gdjs.CreditosCode.GDReferenciaCreditosObjects1= [];
gdjs.CreditosCode.GDReferenciaCreditosObjects2= [];
gdjs.CreditosCode.GDReferenciaCreditosObjects3= [];
gdjs.CreditosCode.GDAtalhoCreditosObjects1= [];
gdjs.CreditosCode.GDAtalhoCreditosObjects2= [];
gdjs.CreditosCode.GDAtalhoCreditosObjects3= [];


gdjs.CreditosCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AtalhoCreditos"), gdjs.CreditosCode.GDAtalhoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("BotaoVoltarCreditos"), gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ConcepcaoCreditos"), gdjs.CreditosCode.GDConcepcaoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("FundoCreditos"), gdjs.CreditosCode.GDFundoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("NomeEvertonCreditos"), gdjs.CreditosCode.GDNomeEvertonCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("NomeGustavoCreditos"), gdjs.CreditosCode.GDNomeGustavoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("NomeJogoCreditos"), gdjs.CreditosCode.GDNomeJogoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("NomeLucasCreditos"), gdjs.CreditosCode.GDNomeLucasCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("NomeVitorCreditos"), gdjs.CreditosCode.GDNomeVitorCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("PainelCreditos"), gdjs.CreditosCode.GDPainelCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ParteEvertonCreditos"), gdjs.CreditosCode.GDParteEvertonCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ParteGustavoCreditos"), gdjs.CreditosCode.GDParteGustavoCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ParteLucasCreditos"), gdjs.CreditosCode.GDParteLucasCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ParteVitorCreditos"), gdjs.CreditosCode.GDParteVitorCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReferenciaCreditos"), gdjs.CreditosCode.GDReferenciaCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("SombraCreditos"), gdjs.CreditosCode.GDSombraCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("TituloCreditos"), gdjs.CreditosCode.GDTituloCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("TituloIACreditos"), gdjs.CreditosCode.GDTituloIACreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsoIACreditos"), gdjs.CreditosCode.GDUsoIACreditosObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.min(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 1280, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 720));
}
{for(var i = 0, len = gdjs.CreditosCode.GDFundoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDFundoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDFundoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDFundoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDFundoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDFundoCreditosObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDFundoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDFundoCreditosObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDSombraCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDSombraCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDSombraCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDSombraCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDSombraCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDSombraCreditosObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDSombraCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDSombraCreditosObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDPainelCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDPainelCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-530) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDPainelCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDPainelCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 24 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDPainelCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDPainelCreditosObjects1[i].getBehavior("Resizable").setWidth(1060 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDPainelCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDPainelCreditosObjects1[i].getBehavior("Resizable").setHeight(672 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-145) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 554 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1[i].getBehavior("Resizable").setWidth(290 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1[i].getBehavior("Resizable").setHeight(88 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-450) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 66 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloCreditosObjects1[i].setWrappingWidth(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloCreditosObjects1[i].setCharacterSize(34 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeJogoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeJogoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-450) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeJogoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeJogoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 110 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeJogoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeJogoCreditosObjects1[i].setWrappingWidth(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeJogoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeJogoCreditosObjects1[i].setCharacterSize(18 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDConcepcaoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDConcepcaoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-450) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDConcepcaoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDConcepcaoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 146 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDConcepcaoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDConcepcaoCreditosObjects1[i].setWrappingWidth(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDConcepcaoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDConcepcaoCreditosObjects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeGustavoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-445) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeGustavoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 207 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeGustavoCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeGustavoCreditosObjects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteGustavoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-445) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteGustavoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 240 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteGustavoCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteGustavoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteGustavoCreditosObjects1[i].setCharacterSize(18 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeLucasCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (35) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeLucasCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 207 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeLucasCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeLucasCreditosObjects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteLucasCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (35) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteLucasCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 240 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteLucasCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteLucasCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteLucasCreditosObjects1[i].setCharacterSize(18 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeVitorCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-445) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeVitorCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 320 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeVitorCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeVitorCreditosObjects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteVitorCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-445) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteVitorCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 353 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteVitorCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteVitorCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteVitorCreditosObjects1[i].setCharacterSize(18 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeEvertonCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (35) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeEvertonCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 320 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeEvertonCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDNomeEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNomeEvertonCreditosObjects1[i].setCharacterSize(20 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteEvertonCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (35) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteEvertonCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 353 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteEvertonCreditosObjects1[i].setWrappingWidth(420 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDParteEvertonCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDParteEvertonCreditosObjects1[i].setCharacterSize(18 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloIACreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-450) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloIACreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 424 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloIACreditosObjects1[i].setWrappingWidth(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDTituloIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDTituloIACreditosObjects1[i].setCharacterSize(19 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDUsoIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDUsoIACreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-450) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDUsoIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDUsoIACreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 456 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDUsoIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDUsoIACreditosObjects1[i].setWrappingWidth(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDUsoIACreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDUsoIACreditosObjects1[i].setCharacterSize(16 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDReferenciaCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDReferenciaCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-450) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDReferenciaCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDReferenciaCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 526 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDReferenciaCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDReferenciaCreditosObjects1[i].setWrappingWidth(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDReferenciaCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDReferenciaCreditosObjects1[i].setCharacterSize(14 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDAtalhoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDAtalhoCreditosObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (-350) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDAtalhoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDAtalhoCreditosObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 360 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 644 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDAtalhoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDAtalhoCreditosObjects1[i].setWrappingWidth(700 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.CreditosCode.GDAtalhoCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDAtalhoCreditosObjects1[i].setCharacterSize(13 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
}

}


};gdjs.CreditosCode.mapOfGDgdjs_9546CreditosCode_9546GDBotaoVoltarCreditosObjects2Objects = Hashtable.newFrom({"BotaoVoltarCreditos": gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2});
gdjs.CreditosCode.mapOfGDgdjs_9546CreditosCode_9546GDBotaoVoltarCreditosObjects2Objects = Hashtable.newFrom({"BotaoVoltarCreditos": gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2});
gdjs.CreditosCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BotaoVoltarCreditos"), gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2);
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", null);
}
{for(var i = 0, len = gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2.length ;i < len;++i) {
    gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2[i].setColor("225;225;225");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoVoltarCreditos"), gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_9546CreditosCode_9546GDBotaoVoltarCreditosObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2 */
{for(var i = 0, len = gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2.length ;i < len;++i) {
    gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2[i].setColor("255;255;255");
}
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotaoVoltarCreditos"), gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_9546CreditosCode_9546GDBotaoVoltarCreditosObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuInicial", false);
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


};gdjs.CreditosCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SombraCreditos"), gdjs.CreditosCode.GDSombraCreditosObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.CreditosCode.GDSombraCreditosObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDSombraCreditosObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{


gdjs.CreditosCode.eventsList0(runtimeScene);
}


{


gdjs.CreditosCode.eventsList1(runtimeScene);
}


};

gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditosCode.GDFundoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDFundoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDFundoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDSombraCreditosObjects1.length = 0;
gdjs.CreditosCode.GDSombraCreditosObjects2.length = 0;
gdjs.CreditosCode.GDSombraCreditosObjects3.length = 0;
gdjs.CreditosCode.GDPainelCreditosObjects1.length = 0;
gdjs.CreditosCode.GDPainelCreditosObjects2.length = 0;
gdjs.CreditosCode.GDPainelCreditosObjects3.length = 0;
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1.length = 0;
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2.length = 0;
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects3.length = 0;
gdjs.CreditosCode.GDTituloCreditosObjects1.length = 0;
gdjs.CreditosCode.GDTituloCreditosObjects2.length = 0;
gdjs.CreditosCode.GDTituloCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeJogoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeJogoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeJogoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDConcepcaoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDConcepcaoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDConcepcaoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeGustavoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeGustavoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeGustavoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteGustavoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteGustavoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteGustavoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeLucasCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeLucasCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeLucasCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteLucasCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteLucasCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteLucasCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeVitorCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeVitorCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeVitorCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteVitorCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteVitorCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteVitorCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeEvertonCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeEvertonCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeEvertonCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteEvertonCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteEvertonCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteEvertonCreditosObjects3.length = 0;
gdjs.CreditosCode.GDTituloIACreditosObjects1.length = 0;
gdjs.CreditosCode.GDTituloIACreditosObjects2.length = 0;
gdjs.CreditosCode.GDTituloIACreditosObjects3.length = 0;
gdjs.CreditosCode.GDUsoIACreditosObjects1.length = 0;
gdjs.CreditosCode.GDUsoIACreditosObjects2.length = 0;
gdjs.CreditosCode.GDUsoIACreditosObjects3.length = 0;
gdjs.CreditosCode.GDReferenciaCreditosObjects1.length = 0;
gdjs.CreditosCode.GDReferenciaCreditosObjects2.length = 0;
gdjs.CreditosCode.GDReferenciaCreditosObjects3.length = 0;
gdjs.CreditosCode.GDAtalhoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDAtalhoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDAtalhoCreditosObjects3.length = 0;

gdjs.CreditosCode.eventsList2(runtimeScene);
gdjs.CreditosCode.GDFundoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDFundoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDFundoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDSombraCreditosObjects1.length = 0;
gdjs.CreditosCode.GDSombraCreditosObjects2.length = 0;
gdjs.CreditosCode.GDSombraCreditosObjects3.length = 0;
gdjs.CreditosCode.GDPainelCreditosObjects1.length = 0;
gdjs.CreditosCode.GDPainelCreditosObjects2.length = 0;
gdjs.CreditosCode.GDPainelCreditosObjects3.length = 0;
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects1.length = 0;
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects2.length = 0;
gdjs.CreditosCode.GDBotaoVoltarCreditosObjects3.length = 0;
gdjs.CreditosCode.GDTituloCreditosObjects1.length = 0;
gdjs.CreditosCode.GDTituloCreditosObjects2.length = 0;
gdjs.CreditosCode.GDTituloCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeJogoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeJogoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeJogoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDConcepcaoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDConcepcaoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDConcepcaoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeGustavoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeGustavoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeGustavoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteGustavoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteGustavoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteGustavoCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeLucasCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeLucasCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeLucasCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteLucasCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteLucasCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteLucasCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeVitorCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeVitorCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeVitorCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteVitorCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteVitorCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteVitorCreditosObjects3.length = 0;
gdjs.CreditosCode.GDNomeEvertonCreditosObjects1.length = 0;
gdjs.CreditosCode.GDNomeEvertonCreditosObjects2.length = 0;
gdjs.CreditosCode.GDNomeEvertonCreditosObjects3.length = 0;
gdjs.CreditosCode.GDParteEvertonCreditosObjects1.length = 0;
gdjs.CreditosCode.GDParteEvertonCreditosObjects2.length = 0;
gdjs.CreditosCode.GDParteEvertonCreditosObjects3.length = 0;
gdjs.CreditosCode.GDTituloIACreditosObjects1.length = 0;
gdjs.CreditosCode.GDTituloIACreditosObjects2.length = 0;
gdjs.CreditosCode.GDTituloIACreditosObjects3.length = 0;
gdjs.CreditosCode.GDUsoIACreditosObjects1.length = 0;
gdjs.CreditosCode.GDUsoIACreditosObjects2.length = 0;
gdjs.CreditosCode.GDUsoIACreditosObjects3.length = 0;
gdjs.CreditosCode.GDReferenciaCreditosObjects1.length = 0;
gdjs.CreditosCode.GDReferenciaCreditosObjects2.length = 0;
gdjs.CreditosCode.GDReferenciaCreditosObjects3.length = 0;
gdjs.CreditosCode.GDAtalhoCreditosObjects1.length = 0;
gdjs.CreditosCode.GDAtalhoCreditosObjects2.length = 0;
gdjs.CreditosCode.GDAtalhoCreditosObjects3.length = 0;


return;

}

gdjs['CreditosCode'] = gdjs.CreditosCode;
