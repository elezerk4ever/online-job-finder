let jobs = ['Web Developer','Back-end Developer','Front-end Developer','Mason','Doctor','Nurse'];search.placeholder=jobs[Math.ceil(Math.random() * jobs.length)-1]
let isShow = false;
function modalShower(){
    if(!isShow){
        showme.style.display='block'
    }else {
        showme.style.display='none'
    }
    isShow =!isShow;
}