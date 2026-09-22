// function Totalmarks(studentName,mathmarks,scienceMarks,englishMarks){
//     console.log(`${studentName} has scored ${mathmarks + scienceMarks + englishMarks} marks in total`);
// }


// function percentageCalculator(studentName,mathmarks,scienceMarks,englishMarks){
//     const totalMarks = mathmarks + scienceMarks + englishMarks;
//     const  percentage  = (totalMarks / 300) * 100;
//     console.log(`${studentName} has scored ${percentage}% in total`);
// }   
// Totalmarks("John", 80, 90, 85);
// Totalmarks("shubham", 70, 75, 80);
// Totalmarks("Ankit", 90, 85, 95);
// percentageCalculator("John", 80, 90, 85);
// percentageCalculator("shubham", 70, 75, 80);
// percentageCalculator("Ankit", 90, 85, 95);


function totalmarks(mathmarks, sciencemarks,englishmarks){
    return mathmarks + sciencemarks + englishmarks;

}

function percentageCalculator(studentName,mathmarks,sciencemarks,englishmarks){
    const total=totalmarks(mathmarks, sciencemarks, englishmarks);
    const percentage = (total/300) * 100;

    console.log(`${studentName} has scored ${percentage}% in total `);

}

percentageCalculator("john",80,90,85);
percentageCalculator("shubham",70,75,80);
percentageCalculator("Ankit",90,85,95);


