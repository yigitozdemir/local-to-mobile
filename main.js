//events coded

var htmlProjectDirectory = "";
//not www folder, just root project dir
var cordovaProjectDirectory = "";

var environment = "";
var platform = "";
var operationType = "";

//introduction to document
$(function(){
    console.log("document so ready");
    //if user doesnt change platform or operation this would be set
    platform = $("#platform").val();
    operationType = $("#operation").val();
    environment = $("#environment").val();
    
    //when html project directory selected
    $("#htmlprdir").change( function(evt) {
        //console.log("anan");
        //console.log($(this).val());
        htmlProjectDirectory = $(this).val();
    });
    
    //this function triggered after cordova project selected
    $("#cordovaprdir").change( function(evt) {
        cordovaProjectDirectory = $(this).val();
    });
    
    //triggered after environment change
    $("#environment").change( function(evt) {
        environment = $(this).val();
    });
    
    //triggered after platform change
    $("#platform").change( function(evt){
        platform = $(this).val();
    });
    
    $("#operation").change( function(evt) {
        operationType = $(this).val();
    });
    
    $("#btn").click( function(evt) {
        copyFiles();
        
        var cdQuery = "cd " + cordovaProjectDirectory;
        var operationQuery = cdQuery + " && " + environment +" " + operationType + " " + platform;
        
        //console.log(cdQuery);
        console.log(operationQuery);
        
        //runCommand(cdQuery);
        runCommand(operationQuery);
        
        console.log("succes");
    });
});

function copyFiles(){
    var ncp = require("ncp").ncp;
        
    var destinationDirectory = cordovaProjectDirectory + "/www";
    
    ncp(htmlProjectDirectory, destinationDirectory, function(err) {
        console.log(err);
    });
}

function runCommand(cmd) {
    // http://nodejs.org/api.html#_child_processes
    var sys = require('sys')
    var exec = require('child_process').exec;
    var child;

    // executes cmd
    child = exec(cmd, function (error, stdout, stderr) {
        sys.print('OUT: ' + stdout);
        sys.print('STD ERROR: ' + stderr);
        if (error !== null) {
            sys.print('ERROR: ' + error);
        }
});

}