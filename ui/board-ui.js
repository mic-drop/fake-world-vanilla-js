export function loadHandlers() {

    let squares = $('.square');
    Object.values(squares).slice(0, 5).forEach((element, i) => {
        $(element).on("keyup", (e) => {
            if (e.keyCode == 13) {
                console.log('Enter' + i);
                $(`#r1-i${i + 1}`).focus();
            }
        });

    });
}
