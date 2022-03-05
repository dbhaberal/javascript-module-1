const fellowStudents = [
    'Mat',
    'Amy',
    'Angela',
    'Mahmut',
    'David',
    'Michael',
];

/*
for (let i = 0; i < fellowStudents.length; i++) {
    if (fellowStudents[i] === 'Amy') {
        console.log('My fav std');
    } else if (fellowStudents[i] === 'David' || fellowStudents[i] === console.log('No way'));
} */

function printStudents(fellowStudents) {
    for (let i = 0; i < fellowStudents.length; i++) {
        console.log(fellowStudents[i])
    }
}

printStudents(fellowStudents)