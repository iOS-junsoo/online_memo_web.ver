$(document).ready(function(){

    if($.localStorage.isSet('memo')){
        $('.textarea').val($.localStorage.get('memo'));
    }
    $('#save').on('click', function(){
        $.localStorage.set('memo', $('.textarea').val())
        alert('저장되었습니다.');
    })
});