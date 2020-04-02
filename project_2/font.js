function changeWeight() {
    var fon = document.getElementById("change");
    if (fon.className == "light") { 
        fon.className = 'bold';
    }
    else{
        fon.className='light';
    }
}

$(document).ready(function(){
    $('vfcontrols').on('change',function(){
        let value = $(this).val();
        let setting = "'slnt'" + value;
        $('p.letters').css('font-variation-settings');
        console.log('slider changed to'+ value);
    });
});