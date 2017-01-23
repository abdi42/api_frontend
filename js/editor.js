var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.renderer.setShowGutter(false)
editor.renderer.setShowPrintMargin(false);
editor.renderer.setDisplayIndentGuides(false);
editor.setHighlightActiveLine(false)
var str = '\nfunction printMessage(message){\n\tconsole.log(message + "!!!")\n}\n\nvar str = "Codice Rocks"\n\nprintMessage(str)'
editor.setValue(str, 1)

editor.renderer.setPadding(20)
editor.renderer.setScrollMargin(20, 20)
editor.setFontSize(15)
editor.setOptions({
    maxLines: 15
});
