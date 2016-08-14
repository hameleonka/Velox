(function () {
    var arrayOfFeedbacks = document.querySelectorAll(".feedback");
    var arrowPrevious = document.querySelector(".arrow_previous");
    var arrowNext = document.querySelector(".arrow_next");
    var arrayOfBullets = document.querySelectorAll(".bullet");
    var contactUsFormBtn = document.querySelector(".contactus-form-btn");
    var contactUsForm = document.querySelector(".contactus-form");
    var pointer = document.querySelector(".pointer");
    var currentFeedback;
    var nextFeedback;
    var previousFeedback;

    var indexOfCurrentFeedback = Math.floor(Math.random() * arrayOfFeedbacks.length);
    console.log(indexOfCurrentFeedback);
    feedbacksShow(indexOfCurrentFeedback);

    function feedbacksShow(indexOfCurrentFeedback) {
        var indexOfPreviousFeedback = indexOfCurrentFeedback - 1;
        var indexOfNextFeedback = indexOfCurrentFeedback + 1;
        if (indexOfCurrentFeedback === 0) {
            indexOfPreviousFeedback = arrayOfFeedbacks.length - 1;
        } else if (indexOfCurrentFeedback === (arrayOfFeedbacks.length - 1)) {
            indexOfNextFeedback = 0;
        }
        currentFeedback = arrayOfFeedbacks[indexOfCurrentFeedback];
        nextFeedback = arrayOfFeedbacks[indexOfNextFeedback];
        previousFeedback = arrayOfFeedbacks[indexOfPreviousFeedback];
        setTimeout(function () {
            currentFeedback.classList.add("current-feedback");
            nextFeedback.classList.add("next-feedback");
            previousFeedback.classList.add("previous-feedback");
        }, 0)
    }

    arrowPrevious.addEventListener("click", function (event) {
        event.preventDefault();
        currentFeedback.classList.remove("current-feedback");
        nextFeedback.classList.remove("next-feedback");
        previousFeedback.classList.remove("previous-feedback");

        indexOfCurrentFeedback = indexOfCurrentFeedback - 1;
        if (indexOfCurrentFeedback < 0) {
            indexOfCurrentFeedback = arrayOfFeedbacks.length - 1;
        }
        console.log("hi");
        feedbacksShow(indexOfCurrentFeedback);
    });

    arrowNext.addEventListener("click", function (event) {
        event.preventDefault();

        currentFeedback.classList.remove("current-feedback");
        nextFeedback.classList.remove("next-feedback");
        previousFeedback.classList.remove("previous-feedback");

        indexOfCurrentFeedback = indexOfCurrentFeedback + 1;
        if (indexOfCurrentFeedback > arrayOfFeedbacks.length - 1) {
            indexOfCurrentFeedback = 0;
        }
        console.log("hi");
        feedbacksShow(indexOfCurrentFeedback);
    });

    changeColorContactUsFormBtn();

    function changeColorContactUsFormBtn () {

        contactUsForm.addEventListener("focusin", function (event) {
            event.preventDefault();
            contactUsFormBtn.classList.add("contactus-form-btn_active");
            pointer.style.display = 'block';
        });
        contactUsForm.addEventListener("focusout", function (event) {
            event.preventDefault();
            contactUsFormBtn.classList.remove("contactus-form-btn_active");
            pointer.style.display = 'none';
        });
    }

}());
