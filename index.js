// ASSIGNMENT 10 JS
function marks(){
    // TAKE A VALUE FROM USER AND CONVERT INTO NUMBER 
    phy = Number(document.getElementById('physic').value)
    che = Number(document.getElementById('chemistry').value)
    mat = Number(document.getElementById('maths').value)
    eng = Number(document.getElementById('english').value)
    com = Number(document.getElementById('computer').value)
    phe = Number(document.getElementById('physical_edu').value)

    total = phy + che + mat + eng + com + phe // CALCULATE THE TOTAL MARKS
    document.getElementById('total').value = total // DISPLAY THE MARKS
    percentage = total / 6 // CALCULATE THE PERCENTAGE OF MARKS
    document.getElementById('percentage').value = percentage // DISPLAY THE PERCENTAGE
    // AS PER THE PERCENTAGE ASSIN THE GRADE
    if (percentage >= 90){
        document.getElementById('grade').value = 'A'
    }

    else if (percentage >= 80 && percentage <90){
        document.getElementById('grade').value = 'B'
    }

    else if (percentage >= 70 && percentage <80){
        document.getElementById('grade').value = 'C'
    }

    else if (percentage >= 60 && percentage <70){
        document.getElementById('grade').value = 'D'
    }

    else if (percentage >= 50 && percentage <60){
        document.getElementById('grade').value = 'E'
    }

    else {
        document.getElementById('grade').value = 'F'
    }
}