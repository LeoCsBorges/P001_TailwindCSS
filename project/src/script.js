
//variables
const sectionMarks = document.getElementsByClassName('section-mark')

//left arrow
document.getElementById('left-arrow-section').addEventListener('click', () => toLeftMark())

//right arrow
document.getElementById('right-arrow-section').addEventListener('click', () => toRightMark())

function toLeftMark() {
    let markID 

    for (mark of sectionMarks) {
        if (mark.classList.contains('bg-orange-400')) {

            markID = mark.id
           
            document.getElementById(markID).classList.remove('bg-orange-400')
            document.getElementById(markID).classList.add('bg-gray-400') 
        }
    }

    if (markID == 'mark1') {
        document.getElementById('mark3').classList.remove('bg-gray-400')
        document.getElementById('mark3').classList.add('bg-orange-400')

    } else if (markID == 'mark2') {
        document.getElementById('mark1').classList.remove('bg-gray-400')
        document.getElementById('mark1').classList.add('bg-orange-400')

    } else {
        document.getElementById('mark2').classList.remove('bg-gray-400')
        document.getElementById('mark2').classList.add('bg-orange-400')
    }
}

function toRightMark() {
    let markID 

    for (mark of sectionMarks) {
        if (mark.classList.contains('bg-orange-400')) {

            markID = mark.id
           
            document.getElementById(markID).classList.remove('bg-orange-400')
            document.getElementById(markID).classList.add('bg-gray-400') 
        }
    }

    if (markID == 'mark1') {
        document.getElementById('mark2').classList.remove('bg-gray-400')
        document.getElementById('mark2').classList.add('bg-orange-400')

    } else if (markID == 'mark2') {
        document.getElementById('mark3').classList.remove('bg-gray-400')
        document.getElementById('mark3').classList.add('bg-orange-400')

    } else {
        document.getElementById('mark1').classList.remove('bg-gray-400')
        document.getElementById('mark1').classList.add('bg-orange-400')
    }
}

