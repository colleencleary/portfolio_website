const createSittingRoom = () => {
  $('#nextButton').off('click')

  // place clickable, transparent divs over background items to develop storyline
  const $candleStickDiv = $('<div>').addClass('investigateItem').css('margin', '-20% 0 0 44%')
  $candleStickDiv.css('height', '110px').css('width', '80px')
  $candleStickDiv.on('click', () => {
    const $p = $('<p>').text('This is going to be tough. A lot of this stuff looks old enough (::cough::creepyenough::cough::) to be haunted.')
    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).css('display', 'flex')
    $candleStickDiv.off("click")
    $candleStickDiv.css('cursor', 'default')
  })

  const $frameDiv = $('<div>').addClass('investigateItem').css('margin', '-15% 0 0 -22%')
  $frameDiv.css('height', '160px').css('width', '120px')
  $frameDiv.on('click', () => {
    const $p = $('<p>').text('The guy in this painting kind of looks familiar.....did that face just move? Maybe...... I\'m getting tired.')
    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).css('display', 'flex')
    $frameDiv.off("click")
    $frameDiv.css('cursor', 'default')
  })

  const $boxDiv = $('<div>').addClass('investigateItem').css('margin', '14% 0 0 -7%')
  $boxDiv.css('height', '80px').css('width', '80px')
  $boxDiv.on('click', () => {
    const $p = $('<p>').text('There\'s a key in this jewelry box. I wonder what it goes to...')

    $('#nextButton').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
      ghost.createGhost('.sittingRoom')

      $('.sittingRoom').prepend($('<img>').attr('src', 'img/key.png').attr('id', 'key'))
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).css('display', 'flex')

    $boxDiv.off("click").css('cursor', 'default')
  })

  $('.sittingRoom').append($candleStickDiv).append($frameDiv).append($boxDiv)
}
