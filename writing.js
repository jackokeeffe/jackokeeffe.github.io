var elementIDs = ['about', 'photographyContent', 'writing-submenu', 'published-submenu', 'cord-submenu', 
'unpublished-submenu', 'fiction-submenu', 'programmingContent', 'languages', 'projectContent', 'web-projects', 
'early-projects', 'miscContent', 'musicContent', 'socialContent']

function closeAll(){
    var length = elementIDs.length-1;
    while(length >= 0){
        document.getElementById(elementIDs[length]).style.display = 'none';
        length--;
    }
    resetVariables()
}

// Menu
var aboutCount = 0;
function showAbout(){
    if(aboutCount==0) {
        document.getElementById('about').style.display = 'inline';
        aboutCount++;
    } else {
        document.getElementById('about').style.display = 'none';
        aboutCount--;
    }
}

var photographyCount = 0;
function showPhotography(){
    if(photographyCount==0) {
        document.getElementById('photographyContent').style.display = 'inline';
        photographyCount++;
    } else {
        document.getElementById('photographyContent').style.display = 'none';
        photographyCount--;
    }
}

// Writing Menu
var contentCount = 0;
function showContent(){
    if(contentCount == 0){
        document.getElementById('writing-submenu').style.display = 'inline';
        contentCount++;
    } else{
        document.getElementById('writing-submenu').style.display = 'none';
        contentCount--;
    }
}

var publishedCount = 0;
function showPublished(){
    if(publishedCount == 0){
        document.getElementById('published-submenu').style.display = 'inline';
        publishedCount++;
    } else {
        document.getElementById('published-submenu').style.display = 'none';
        publishedCount--;
    }
}

var cordCount = 0;
function showCord(){
    if(cordCount == 0){
        document.getElementById('cord-submenu').style.display = 'inline';
        cordCount++;
    } else{
        document.getElementById('cord-submenu').style.display = 'none';
        cordCount--;
    }
    
}

var unPublishedCount = 0;
function showUnpublished(){
    if(unPublishedCount == 0){
        document.getElementById('unpublished-submenu').style.display = 'inline';
        unPublishedCount++;
    } else{
        document.getElementById('unpublished-submenu').style.display = 'none';
        unPublishedCount--;
    }
}

var fictionCount = 0;
function showFiction(){
    if(fictionCount == 0){
        document.getElementById('fiction-submenu').style.display = 'inline';
        fictionCount++;
    } else {
        document.getElementById('fiction-submenu').style.display = 'none';
        fictionCount--;
    }
    
}

// Programming Menu
var programmingContentCount = 0;
function displayProgramming(){
    if(programmingContentCount == 0){
        document.getElementById('programmingContent').style.display = 'inline'
        programmingContentCount++;
    } else {
        document.getElementById('programmingContent').style.display = 'none'
        programmingContentCount--;
    }
}
   

var languageCount = 0;
function displayLanguages(){
    if(languageCount == 0){
        document.getElementById('languages').style.display = 'inline'
        languageCount++;
    } else {
        document.getElementById('languages').style.display = 'none'
        languageCount--;
    }
    
}

var projectCount = 0
function displayProjects(){
    if(projectCount == 0){
        document.getElementById('projectContent').style.display = 'inline'
        projectCount++;
    } else {
        document.getElementById('projectContent').style.display = 'none'
        projectCount--;
    }
    
}

var webProjectCount = 0
function displayWebProjects(){
    if (webProjectCount == 0){
        document.getElementById('web-projects').style.display = 'inline'
        webProjectCount++;
    } else {
        document.getElementById('web-projects').style.display = 'none'
        webProjectCount--;
    }
    
}

var otherCount = 0;
function displayOtherProjects(){
    if(otherCount == 0){
        document.getElementById('early-projects').style.display = 'inline'
        otherCount++;
    } else{
        document.getElementById('early-projects').style.display = 'none'
        otherCount--;
    }
}

// Miscellaneous Content
miscCount = 0
function displayMiscContent(){
    if(miscCount == 0){
        document.getElementById('miscContent').style.display = 'inline'
        miscCount++;
    } else{
        document.getElementById('miscContent').style.display = 'none'
        miscCount--;
    }
}

var musicCount = 0;
function displayMusicContent(){
    if(musicCount == 0){
        document.getElementById('musicContent').style.display = 'inline'
        musicCount++;
    } else{
        document.getElementById('musicContent').style.display = 'none'
        musicCount--;
    }
}

var socialCount = 0;
function displaySocials(){
    if(socialCount == 0){
        document.getElementById('socialContent').style.display = 'inline'
        socialCount++;
    } else{
        document.getElementById('socialContent').style.display = 'none'
        socialCount--;
    }
}

// Extra
var partyCount = 0
function party(){
    if(partyCount == 0){
        document.getElementById("luau").play();
        document.getElementById('hula').style.display='block';
        partyCount++;
    } else {
        document.getElementById("luau").pause();
        document.getElementById('hula').style.display='none';
        partyCount--;
    }
}

function resetVariables(){
    aboutCount = 0
    photographyCount = 0
    contentCount = 0
    publishedCount = 0
    cordCount = 0
    unPublishedCount = 0
    fictionCount = 0
    programmingContentCount = 0
    languageCount = 0
    projectCount = 0
    webProjectCount = 0
    otherCount = 0
    miscCount = 0
    musicCount = 0
    musicCount = 0
    socialCount = 0
}
