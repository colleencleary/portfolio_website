const createFoyer = () => {
  $('#nextButton').off('click')
  // delay function that calls ghost
  setTimeout(() => {ghost.createGhost('.foyer')}, Math.random() * 60000 + 10000);
  // setTimeout(() => {ghost.createGhost('.foyer')}, 5000);
  // place clickable, transparent divs over background items to develop storyline
  const $frameDiv = $('<div>').addClass('investigateItem').css('margin', '-17% 0 0 39%')
  $frameDiv.css('height', '100px').css('width', '70px').css('transform', 'rotate(-15deg)')
  $frameDiv.on('click', () => {
    const $p = $('<p>').text('These are some old paintings. They must belong to the original owner.')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
      $frameDiv.off("click")
      $frameDiv.css('cursor', 'default')
    //   setTimeout(() => {ghost.createGhost('.foyer')}, 4000);
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().show().append($p)
  })

  const $birdDiv = $('<div>').addClass('investigateItem').css('margin', '5% 0 0 -12%')
  $birdDiv.css('height', '100px').css('width', '60px').css('border-radius', '30%')
  $birdDiv.on('click', () => {
    const $p = $('<p>').text('What a weird bird. The original owner of this house had ......an odd taste.')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
      $birdDiv.off("click")
      $birdDiv.css('cursor', 'default')
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().show().append($p)
  })

  const $pillarDiv = $('<div>').addClass('investigateItem').css('margin', '19% 0 0 17%')
  $pillarDiv.css('height', '140px').css('width', '40px')
  $pillarDiv.on('click', () => {
    const $p = $('<p>').text('Um, did that face just move?')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
      $pillarDiv.off("click")
      $pillarDiv.css('cursor', 'default')
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().show().append($p)
  })
  $('.foyer').append($frameDiv).append($birdDiv).append($pillarDiv)
}

const exploreFoyer = () => {
  $('#dialogue').fadeOut(2000)
  // create transparent objects hidden around room
  createFoyer();


}
