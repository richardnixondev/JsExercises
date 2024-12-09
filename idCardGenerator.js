function generateIdCard(firstName, lastName, birthYear){
    const age = 2024 - birthYear;
    const idstring = `${firstName} ${lastName} - ${age} years old `;
    return idstring;
}

const idCard = generateIdCard("John", "Doe", 1984);
console.log(idCard)