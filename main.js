//attach submit event to saveInput()
document.getElementById('testInputForm').addEventListener('submit', saveInput);

function saveInput(e){

    //collect form input values
    var prefixInput = document.getElementById('testPrefixInput').value;
    var funcInput = document.getElementById('testFuncInput').value;
    // TEMPORARY -> need to implement database to check if number has been used already (or alternate solution)
    var generatedNum = chance.integer({min: 0, max: 99999999});
    var typeInput = '';
    //collect radio button input
    if (document.getElementById('automated').checked) {
        typeInput = document.getElementById('automated').value;
    }
    else{
        typeInput = document.getElementById('manual').value;
    }

    //output dictionary to save to local storage
    var output = {
        prefix: prefixInput,
        func: funcInput,
        num: generatedNum,
        type: typeInput
    }

    localStorage.setItem('output', JSON.stringify(output));

    //reset to empty form
    document.getElementById('testInputForm').reset();

    displayID();

    e.preventDefault();
}

function displayID(){

    var output = JSON.parse(localStorage.getItem('output'));
    var generatedID = document.getElementById('generatedID');

    generatedID.innerHTML = '';

    var prefix = output.prefix;
    var func = output.func;
    var num = output.num;
    var type = output.type;

    var outputString = type + num + '-' + prefix + '-' + func;

    //replace the output in local storage with the reformatted outputString (so it can be copied in copyID())
    localStorage.setItem('output', JSON.stringify(outputString));

    generatedID.innerHTML += '<span style="font-size: 20pt">' +  outputString + '</span>';

}

function copyID(){

    var ID = JSON.parse(localStorage.getItem('output'));

    //copy
    navigator.clipboard.writeText(ID)
    //create 1.5 sec message after clicking 
    document.querySelector('#copyButton').innerHTML = 'Copied!';
    setTimeout(resetCopyButton, 1500);
}

function resetCopyButton(){
    document.querySelector('#copyButton').innerHTML = 'Copy ID';
}