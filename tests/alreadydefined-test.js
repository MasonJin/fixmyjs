require('./')("Variables don't need to be redefined", {
  "(function () { var foo = true;\nvar foo = false;\n}());": "(function () { var foo = true;\nfoo = false;\n}());",
  "(function () { var foo = true; var foo = false; }());": "(function () { var foo = true; foo = false; }());",
  "(function () {\n\tvar foo = true;\n\tvar foo = false;\n}());": "(function () {\n\tvar foo = true;\n\tfoo = false;\n}());"
}).export(module);