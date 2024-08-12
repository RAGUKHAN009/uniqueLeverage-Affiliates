function ShowDropDown() {
    const DropDown = document.getElementById('DropDown')

    if (DropDown.classList.contains('DropDownH')){
        DropDown.classList.remove('DropDownH')
        DropDown.classList.add('DropDownS')
    }
    else {
        DropDown.classList.add('DropDownH')
        DropDown.classList.remove('DropDownS')
    }

}

