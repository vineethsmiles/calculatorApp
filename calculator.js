    var keySelect = document.keys; //To get the key pressed
    var result = 0; //To display the result affter evaluating
    var newNum = false; // To check for the new entry
    var recentOp = ""; // To get the most recent operator entered

    // Check for the number entry and display it accordingly
    function numSelected(num) {
      if (newNum) {
        keySelect.display.value = num;
        newNum = false;
      } else {
        if (keySelect.display.value === "")
          keySelect.display.value = num;
        else
          keySelect.display.value += num;
      }
    }

    // Check for the selected operator and evaluate it accordingly and display the result
    function opSelected(op) {
      var display = keySelect.display.value;
      if (newNum && recentOp != "=");
      else {
        newNum = true;
        if ('+' == recentOp)
          result += parseFloat(display);
        else if ('-' == recentOp)
          result -= parseFloat(display);
        else if ('/' == recentOp)
          result /= parseFloat(display);
        else if ('*' == recentOp)
          result *= parseFloat(display);
        else
          result = parseFloat(display);
        keySelect.display.value = result;
        recentOp = op;
      }
    }

    // Handling decimal entry
    function decSelected() {
      var curDisplay = keySelect.display.value;
      if (newNum) {
        curDisplay = "0.";
        newNum = false;
      } else {
        if (curDisplay.indexOf(".") == -1)
          curDisplay += ".";
      }
      keySelect.display.value = curDisplay;
    }

    // To clear the display
    function clearDisplay() {
      result = 0;
      recentOp = "";
      keySelect.display.value = "";
      newNum = true;
    }