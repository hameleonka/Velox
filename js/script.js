(function () {
    var arrayOfFeedbacks = document.querySelectorAll(".feedback");
    var arrowPrevious = document.querySelector(".arrow_previous");
    var arrowNext = document.querySelector(".arrow_next");
    var arrayOfBullets = document.querySelectorAll(".bullet");
    var contactUsFormBtn = document.querySelector(".contactus-form-btn");
    var contactUsForm = document.querySelector(".contactus-form");
    var contactUsFormName = document.querySelector("#name");
    var contactUsFormSublect = document.querySelector("#subject");
    var contactUsFormMessage = document.querySelector("#message");
    var pointer = document.querySelector(".pointer");
    var currentFeedback;
    var nextFeedback;
    var previousFeedback;

    var indexOfCurrentFeedback = Math.floor(Math.random() * arrayOfFeedbacks.length);
    console.log(indexOfCurrentFeedback);
    feedbacksShow(indexOfCurrentFeedback);

    function feedbacksShow(indexOfCurrentFeedback, formerFeedback) {
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
            formerFeedback&&formerFeedback.classList.remove('former-feedback');
            nextFeedback.classList.add("next-feedback");
            previousFeedback.classList.add("previous-feedback");
        }, 15)
    }

    arrowPrevious.addEventListener("click", function (event) {
        event.preventDefault();
        currentFeedback.classList.remove("current-feedback");
        currentFeedback.classList.add('former-feedback');
        nextFeedback.classList.remove("next-feedback");
        previousFeedback.classList.remove("previous-feedback");

        indexOfCurrentFeedback = indexOfCurrentFeedback - 1;
        if (indexOfCurrentFeedback < 0) {
            indexOfCurrentFeedback = arrayOfFeedbacks.length - 1;
        }
        console.log("hi");
        feedbacksShow(indexOfCurrentFeedback, currentFeedback);
    });

    arrowNext.addEventListener("click", function (event) {
        event.preventDefault();

        currentFeedback.classList.remove("current-feedback");
        currentFeedback.classList.add('former-feedback');
        nextFeedback.classList.remove("next-feedback");
        previousFeedback.classList.remove("previous-feedback");

        indexOfCurrentFeedback = indexOfCurrentFeedback + 1;
        if (indexOfCurrentFeedback > arrayOfFeedbacks.length - 1) {
            indexOfCurrentFeedback = 0;
        }
        console.log("hi");
        feedbacksShow(indexOfCurrentFeedback, currentFeedback);
    });

    changeColorContactUsFormBtn();

    function focusIn(event){
        event.preventDefault();
        contactUsFormBtn.classList.add("contactus-form-btn_active");
        pointer.style.display = 'block';
    }

    function focusOut(event){
        event.preventDefault();
        contactUsFormBtn.classList.remove("contactus-form-btn_active");
        pointer.style.display = 'none';
    }



    function changeColorContactUsFormBtn () {

        contactUsFormName.addEventListener("focus", focusIn);
        contactUsFormName.addEventListener("blur", focusOut);
        contactUsFormSublect.addEventListener("focus", focusIn);
        contactUsFormSublect.addEventListener("blur", focusOut);
        contactUsFormMessage.addEventListener("focus", focusIn);
        contactUsFormMessage.addEventListener("blur", focusOut);

    }

}());
