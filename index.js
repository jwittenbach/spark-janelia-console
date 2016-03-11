var sprintf = require('sprintf');
var SSH = require('simple-ssh')
var parseString = require('xml2js').parseString;

var ssh;

var login = document.getElementById('login');
var console = document.getElementById('console');
console.style.display = 'none';

function getLoginInfo() {
    var form = document.getElementById('loginForm');
    
    var ssh = new SSH({
        'host': 'login2.int.janelia.org',
        'user': form.uname.value,
        'pass': form.passwd.value
    });

    login.style.display = 'none';
    console.style.display = 'block';
}

    //ssh.exec('echo $PATH', {
    //    out: function(stdout) {
    //        console.log(stdout);
    //        document.getElementById('text').innerHTML = stdout;
    //    }
    //}).start();
