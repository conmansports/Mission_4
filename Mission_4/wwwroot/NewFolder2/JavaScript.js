$("#submitbtn").click(function () {

    let assign = $("#assig").val()
    let group = $("#group").val()
    let quiz = $("#quiz").val()
    let mid = $("#mid").val()
    let final = $("#final").val()
    let intex = $("#intex").val()

    //calculate the weighted grade
    let assignOverall = assign * 50 / 100;
    let groupOverall = group * 10 / 100;
    let quizOverall = quiz * 10 / 100;
    let midOverall = mid * 10 / 100;
    let finalOverall = final * 10 / 100;
    let intexOverall = intex * 10 / 100;

    //add together for overall grade in class
    let overAllGrade = assignOverall + groupOverall + quizOverall + midOverall + finalOverall + intexOverall;
    let letterGrade = '';

    //Determine letter grade
    if (overAllGrade >= 94) {
        letterGrade = 'A';
    }
    else if (94 > overAllGrade && overAllGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (90 > overAllGrade && overAllGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (87 > overAllGrade && overAllGrade >= 84) {
        letterGrade = 'B';
    }
    else if (84 > overAllGrade && overAllGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (80 > overAllGrade && overAllGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (77 > overAllGrade && overAllGrade >= 74) {
        letterGrade = 'C';
    }
    else if (74 > overAllGrade && overAllGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (70 > overAllGrade && overAllGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (67 > overAllGrade && overAllGrade >= 64) {
        letterGrade = 'D';
    }
    else if (64 > overAllGrade && overAllGrade >= 60) {
        letterGrade = 'D-';
    }
    else if (60 > overAllGrade) {
        letterGrade = 'E';
    }

    //alert("You got " + overAllGrade + " percent, which gives you a(n) " + letterGrade + " in the class.")
    //print results back to form
    $("#gradecalc").html("You got " + overAllGrade + " percent, which gives you a(n) " + letterGrade + " in the class.")
})