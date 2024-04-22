export function loadHandlers() {

    let squares = Object.values($('.input')).slice(0, 5);

    squares.forEach((element, i) => {
        if (i === 4) {
            $(element).on("keyup", (e) => {
                if (e.keyCode == 13) {
                    let word = squares.reduce((acc, element) => {
                        return acc + $(element).val() || '';
                    }, '');
                    console.log(word);
                }
            })
            return;
        }
        $(element).on("keyup", () => {
            $(`#r1-i${i + 1}`).focus();
        })

    });
}
