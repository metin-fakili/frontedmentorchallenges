function accordian() {
    const accordianQuestions = document.querySelectorAll(".accordian-question");

    accordianQuestions.forEach(accordianQuestion => {
        accordianQuestion.addEventListener('click', () => {
            const heightAccordianAnswer = accordianQuestion.nextElementSibling.scrollHeight;
            accordianQuestion.classList.toggle("active-header");
            if (accordianQuestion.classList.contains('active-header')) {
                accordianQuestion.style.fontWeight = "bold";
                accordianQuestion.nextElementSibling.style.maxHeight = `${heightAccordianAnswer}px`;
            } else {
                accordianQuestion.nextElementSibling.style.maxHeight = "0";
                setTimeout(() => {
                    accordianQuestion.style.fontWeight = "100";
                }, 600);
            }
        });
    });
}

accordian();