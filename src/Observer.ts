export const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show");

        } else {
        entry.target.classList.remove("show");
        }
    });
    });

    export const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("left-end");
            } else {
            entry.target.classList.remove("left-end");
            }
        });
        });