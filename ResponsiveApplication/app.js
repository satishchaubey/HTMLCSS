const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))




function showToast(){
    toastList[0].show()
}

//Enable tooltips

var toolTipTriggerList =[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var toolTipList=toolTipTriggerList.map(function (toolTipTriggerEl){
    return new bootstrap.Tooltip(toolTipTriggerEl)
})


function goToProductDetails(){
    window.location.href = ("/product.html")
}

//form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function goToProductDetail(){
    window.location.href = ("/order-success.html")
}