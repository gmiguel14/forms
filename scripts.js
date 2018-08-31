$(document).ready(function () {

    let navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        let $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        let curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (let i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-success').trigger('click');

    //

    
    let x = document.getElementsByClassName('product')
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function () {

            let selectedEl = document.querySelector(".selected");
            if (selectedEl) {
                selectedEl.classList.remove("selected");
            }
            this.classList.add("selected");

        }, false);;
    }
});


function getFields(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let uf = document.getElementById('uf').value;

    document.getElementById('form-name').innerHTML = name;
    document.getElementById('form-email').innerHTML = email;
    document.getElementById('form-age').innerHTML = age;
    document.getElementById('form-cep').innerHTML = cep;
    document.getElementById('form-rua').innerHTML = rua;
    document.getElementById('form-bairro').innerHTML = bairro;
    document.getElementById('form-cidade').innerHTML = cidade;
    document.getElementById('form-uf').innerHTML = uf;
}

function getProduct(){
    document.getElementsByClassName('.selected')
}


function sendForm() {
    var endpoint = '/send-it'; 

    $.ajax({ 
        type: "POST",
        url: endpoint,
        data: $('#dataForm').serializeArray(),
        success: function () {
            alert(data, 'success post');
        }
    });
}