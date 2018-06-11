
import Swal from 'sweetalert2'


export default ({ app }, inject) => {

  /*inject('toast', swal.mixin({
    toast: true,
    type: 'success',
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000
  }));*/

  inject('swal', Swal.mixin({
    buttonsStyling: false,
    confirmButtonClass: 'btn btn-primary mx-2',
    cancelButtonClass: 'btn btn-danger mx-2',
    showLoaderOnConfirm: true,
    inputClass: 'form-control',
    showCancelButton: true
  }))
}
