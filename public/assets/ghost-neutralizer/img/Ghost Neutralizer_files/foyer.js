const createFoyer = () => {
  $('#nextButton').off('click')
  // delay function that calls ghost
  // setTimeout(() => {ghost.createGhost('.foyer')}, Math.random()*40000+20000);
  setTimeout(() => {ghost.createGhost('.foyer')}, 5000);
  // place clickable, transparent divs over background items to develop storyline
  const $frameDiv = $('<div>').addClass('investigateItem').css('margin', '100px 0 0 780px')
  $frameDiv.css('height', '75px').css('width', '40px')
  $frameDiv.on('click', () => {
    const $p = $('<p>').text('Nice sleuthing! You found a key taped to the back of the frame! I wonder what it goes to.....')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()
  })

  const $birdDiv = $('<div>').addClass('investigateItem').css('margin', '350px 0 0 210px')
  $birdDiv.css('height', '50px').css('width', '30px').css('border-radius', '30%')
  $birdDiv.on('click', () => {
    const $p = $('<p>').text('What a weird bird. The original owner of this house had ......an odd taste.')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()
  })

  const $pillarDiv = $('<div>').addClass('investigateItem').css('margin', '460px 0 0 540px')
  $pillarDiv.css('height', '110px').css('width', '20px')
  $pillarDiv.on('click', () => {
    const $p = $('<p>').text('Um, did that face just move?')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()
  })
  $('.foyer').append($frameDiv).append($birdDiv).append($pillarDiv)
}

const exploreFoyer = () => {
  $('#dialogue').fadeOut(2000)
  // create transparent objects hidden around room
  createFoyer();


}
