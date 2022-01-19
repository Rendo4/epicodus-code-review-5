import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Planet  from './calculator.js';

function showAge(test) {
  $(".mercury").html(test.mercury);
  $(".venus").html(test.venus);
  $(".earth").html(test.earth);
  $(".mars").html(test.mars);
  $(".jupiter").html(test.jupiter);
}

function showDie (test) {
  $(".dieM").html(test.mercury);
  $(".dieV").html(test.vensu);
  $(".dieE").html(test.earth);
  $(".dieMa").html(test.mars);
  $(".dieJ").html(test.jupiter);
}

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    let age = $('#age').val();
    event.preventDefault();
    const test = new Planet(age)
    showAge(test);
    test.expectancy();
    showDie(test);
  });
});