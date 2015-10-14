// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableOnClick() {
  $(".btn").last().attr("disabled", true)
  $(".edit_course").submit()
  // A BETTER WAY IN JS
  // event.target.disabled = true;
  // event.target.style.color = "white"
  // event.target.form.submit();

  // WHAT I CAME UP WITH (TERRIBLE)
  // amount = document.getElementsByClassName('btn').length
  // document.getElementsByClassName('btn')[amount - 1].disabled = true;
  // document.getElementsByClassName('btn')[amount - 1].style.color = "white";
}

$(function() {
  $(".btn").last().on("click", disableOnClick)
});

function hideLastRow() {
  $(".association.container").last().hide()

  // OR $(".association.container").last().hide();

  // var findrow = document.getElementsByClassName('association container');
  // var last = findrow[findrow.length - 1];
  // last.style.display = "none";
}

$(function() {
  $( document ).ready(hideLastRow);
});

function showLastRow() {
  $(".association.container").last().show()

  // var findrow = document.getElementsByClassName('association container');
  // var last = findrow[findrow.length - 1];
  // last.style.display = "";
}

$(function() {
  $(".new-association").on("click", showLastRow);
});

function deleteSelect() {
  $(this).closest(".association.container").hide()
  $(this).closest(".destroy").prop("checked", true)
  event.preventDefault();
  // document.getElementsByClassName("destroy")[document.getElementsByClassName("destroy").length -1].checked = true;
  // event.target.parentElement.parentElement.parentElement.style.display = "none";
}

$(function() {
  $(".btn-danger").on("click", deleteSelect);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function popModal() {
  $('#super_modal').modal('show')
}


$(function() {
  $(".fa.fa-calendar").on("click", popModal)
})
