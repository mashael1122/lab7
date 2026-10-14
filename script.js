document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#colorForm').onsubmit = function() {
        const color = document.querySelector('#color').value;
        document.querySelector('#hello').style.color = color;

        // يمنع الفورم إنه يعيد تحميل الصفحة
        return false;
    };

});