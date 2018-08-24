const createKitchen = () => {
  $('#nextButton').off('click')

  // delay function that calls ghost
  setTimeout(() => {ghost.createGhost('.kitchen')}, 35000);

  // place clickable, transparent divs over background items to develop storyline
  const $fridgeDiv = $('<div>').addClass('investigateItem').css('margin', '5% 0 0 20%')
  $fridgeDiv.css('height', '380px').css('width', '200px')
  $fridgeDiv.on('click', () => {
    const $p = $('<p>').text('Lucky you! There\'s an energy drink in this old fridge! It doesn\'t seem expired -- must\'ve been left by one of those construction workers Mr. Smith mentioned.')

    $('#nextButton').text('drink').off("click").on('click', () => {

      const $p2 = $('<p>').text('Your health is back to 100%!')
      investigator.health = 50
      $('#investigator-percenthealth').empty().text(Math.round(investigator.health / 50 * 100) + '%')
      $('#investigator-health').css('width', investigator.health / 50 * 346 + 'px')

      $('#nextButton').empty().text('close').off("click").on('click', () => {
        $('#dialogue').hide()
        $fridgeDiv.off("click").css('cursor', 'default')
      })
      $p2.append($('#nextButton'))
      $('#dialogue').empty().append($p2).show()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()
  })

  const $boxDiv = $('<div>').addClass('investigateItem').css('margin', '12% 0 0 -3%')
  $boxDiv.css('height', '50px').css('width', '90px')
  $boxDiv.on('click', () => {
    const $p = $('<p>').text('This box is locked. Try the key!')

    $('#nextButton').text('use key').off("click").on('click', () => {
      const $p2 = $('<p>').text('Bummer. The key didn\'t work. It must open something else.')

      $('#nextButton').text('close').off("click").on('click', () => {
        $('#dialogue').hide()
        $boxDiv.off("click").css('cursor', 'default')
      })
      $p2.append($('#nextButton'))
      $('#dialogue').empty().append($p2).show()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()
  })

  const $noteDiv = $('<div>').addClass('investigateItem').css('margin', '8% 0 0 -41%').css('transform', 'rotate(-15deg)')
  $noteDiv.css('height', '70px').css('width', '140px')
  $noteDiv.on('click', () => {
    const $p = $('<p>').text('There\'s some kind of note in this drawer:')
    $p.append($('<img>').attr('src', 'img/creepynote.png').css('width', '70%').css('height', 'auto'))
    $('#nextButton').text('close').off("click").on('click', () => {
      const $p2 = $('<p>').text('Well that\'s super creepy. It looks like it was drawn by a kid.')

      $('#nextButton').text('close').off("click").on('click', () => {
        $('#dialogue').hide()
        $noteDiv.off("click").css('cursor', 'default')
      })
      $p2.append($('#nextButton'))
      $('#dialogue').empty().append($p2).show()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()
  })
  $('.kitchen').append($fridgeDiv).append($boxDiv).append($noteDiv)
}
