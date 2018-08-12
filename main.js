var keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
];

var websites = {
    'a':'4399.com',
};


var websitesInBarrel = JSON.parse(localStorage.getItem('barrel') || null);

if(websitesInBarrel){
    websites = websitesInBarrel;
}

//生成键盘
for(var i = 0;i < keys.length;i++){
    var div1 = document.createElement('div');
    buttons.appendChild(div1);
    for(var j = 0;j < keys[i].length;j++){

        var kbd = document.createElement('kbd');
        kbd.textContent = keys[i][j];
        div1.appendChild(kbd);

        var edit = document.createElement('button');
        edit.textContent = "E";
        edit.id = keys[i][j];
        kbd.appendChild(edit);
        
        //生成图标
        var icon = document.createElement('img');
        icon.alt = "icon";
        if(websites[keys[i][j]]){
            icon.src = "http://" + websites[keys[i][j]] + "/favicon.ico";
            kbd.appendChild(icon);
        }else{
            icon.src = "./1.png";
            kbd.appendChild(icon);
        }
        icon.onerror = function(xxx){
            xxx.target.src = "./funny.jpg";
            kbd.appendChild(icon);
        } 

        //监听用户edit
        edit.onclick = function(clickedEdit){
            var editingKeyName = clickedEdit.target.id;
            newWebsite = prompt("Please input the new website.");
            websites[editingKeyName] = newWebsite;
            localStorage.setItem('barrel',JSON.stringify(websites));
            //更新icon
            var newIcon = clickedEdit.target.nextSibling;
            newIcon.alt = "icon";
            if(websites[editingKeyName]){
                newIcon.src = "http://" + websites[editingKeyName] + "/favicon.ico";
            }else{
                newIcon.src = "./1.png";
            }
            newIcon.onerror = function(xxx){
                xxx.target.src = "./funny.jpg";
            } 
        }            
    }
}


//监听用户press
document.onkeypress = function(pressedButton){
    var website = websites[pressedButton.key];
    window.open("http://" + website,"_blank");
}
