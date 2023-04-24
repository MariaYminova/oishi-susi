import customSelect from 'custom-select';

export default function () {

  const selects = document.querySelectorAll('.ui-select > select');

  selects.forEach(select => {
    customSelect(select)
  })
}