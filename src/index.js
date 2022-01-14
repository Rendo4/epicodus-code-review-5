import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { currentAge, expectancy, Planet, Life, array1, planets } from './calculator.js';

function showAge(array1) {
  $(".mercury").html(array1[0]);
  $(".venus").html(array1[1]);
  $(".earth").html(array1[2]);
  $(".mars").html(array1[3]);
  $(".jupiter").html(array1[4]);
}

function showDie (planets) {
  $(".dieM").html(planets[0]);
  $(".dieV").html(planets[1]);
  $(".dieE").html(planets[2]);
  $(".dieMa").html(planets[3]);
  $(".dieJ").html(planets[4]);
}

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    let age = $('#age').val();
    event.preventDefault();
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    showAge(array1);
    showDie(planets);
  });
});