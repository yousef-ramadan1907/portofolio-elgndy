
    const words = ["UI/UX Designer", "Web Designer", "Product Designer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const speed = 120;

    function type() {
        currentWord = words[i];

        if (!isDeleting) {
            document.querySelector(".typing").textContent = currentWord.slice(0, j++);
        } else {
            document.querySelector(".typing").textContent = currentWord.slice(0, j--);
        }

        if (j === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(type, 1000); // delay before deleting
            return;
        }

        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }

        setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    type();
