"use strict";

var toDos = [
    "Закончить писать эту книгу",
    "Вывести Грейси на прогулку в парк",
    "Ответить на электронные письма",
    "Подготовиться к лекции в понедельник",
    "Обновить несколько новых задач",
    "Купить продукты"
];

$("document").ready(function () {

    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element);
            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                for (var i = toDos.length - 1; i > -1; i--) {
                    $(".content").append($("<li>").text(toDos[i]));
                }
            }

            else if ($element.parent().is(":nth-child(2)")) {
                toDos.forEach(function (todo) {
                    $(".content").append($("<li>").text(todo));
                });
            }

            else if ($element.parent().is(":nth-child(3)")) {
                $(".content").append(
                    '<input type="text" class="vvod">' +
                    '<button class="knopka">Add</button>'
                );
                var newTD;
                $('.knopka').on('click', function () {
                    newTD = $('.vvod').val();
                    if (newTD != '') {
                        toDos.push(newTD);
                        alert('Задание добавлено');
                        $('.vvod').val("");
                        $(".comments").append("<p>" + newTD + "</p>");
                    }
                })
            }
            return false;
        })
    })

    $(".tabs a:first-child span").trigger("click");

})