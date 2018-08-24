const createBedroom = () => {

  // place clickable, transparent divs over background items to develop storyline
  const $treeDiv = $('<div>').addClass('investigateItem').css('margin', '-20% 0 0 -20%')
  $treeDiv.css('height', '150px').css('width', '200px')
  $treeDiv.on('click', () => {
    const $p = $('<p>').text('This tree is growing right through the ceiling!')

    const $newBtn = $('<button>').text('close').off("click").on('click', () => {
      $('#dialogue').hide()
      $treeDiv.off("click").css('cursor', 'default')
    })
    $p.append($newBtn)
    $('#dialogue').empty().append($p).show()
  })

  const $boxDiv = $('<div>').addClass('investigateItem').css('margin', '23% 0 0 47%').css('transform', 'rotate(15deg)')
  $boxDiv.css('height', '110px').css('width', '140px')
  $boxDiv.on('click', () => {
    const $p = $('<p>').text('It\'s locked. Try the key!')

    const $newBtn = $('<button>').text('use key').off("click").on('click', () => {
      $('#key').fadeOut().remove()

      const $p2 = $('<p>').text('It worked!! There\'s a pair of old glasses and a note in here:')

      $('.bedroom').prepend($('<img>').attr('src', 'img/glassesIcon.png').attr('id', 'key'))
      $p2.append($('<img>').attr('src', 'img/hauntedGlasses.jpg').css('width', '50%').css('height', 'auto'))

      const $newBtn2 = $('<button>').text('read note').off("click").on('click', () => {
        const $p3 = $('<p>').text('\"February 24, 2016')
        $p3.append($('<p>').text('From the journal of Cornelius Smith'))
        $p3.append($('<p>').text('\"The antique glasses I purchased on eBay appear to have included something extra -- the spirit of their previous owner. As I understand it, the original owner was some sort of funeral director in Connecticut. In his old age, he apparently lost his mind and began removing the eyelids of the deceased in hopes that it would stop them from resting in peace. I appear to have angered the spirit, and I have begun researching ways to rid my family home of him. I plan to keep a log of my ef\"'))

        const $newBtn3 = $('<button>').text('close').off("click").on('click', () => {
          const $p4 = $('<p>').text('It doesn\'t look like Cornelius finished his journal entry. I wonder what stopped him....')

          const $newBtn4 = $('<button>').text('close').on('click', () => {
            $('#dialogue').hide()
            $('.bedroom').prepend($ghost.fadeIn(2000).css('top', '30%').css('left', '40%').css('height', '500px'))
            setTimeout(() => {
              const $newp = $('<p>').text('Well that\'s probably what interupted Cornelius. He seems really mad now!')
              const $newBtn5 = $('<button>').text('close').off("click")
              $newBtn5.on('click', () => {
                ghost.createGhost('.bedroom')
                $('#dialogue').hide()
                $boxDiv.off("click").css('cursor', 'default')
              })
              $newp.append($newBtn5)
              $('#dialogue').empty().append($newp).show()
            }, 2500)
          })
          $p4.append($newBtn4)
          $('#dialogue').empty().append($p4).show()
        })
        $p3.append($newBtn3)
        $('#dialogue').empty().append($p3).show()
      })
      $p2.append($newBtn2)
      $('#dialogue').empty().append($p2).show()
    })
    $p.append($newBtn)
    $('#dialogue').empty().append($p).show()
  })

  const $bottleDiv = $('<div>').addClass('investigateItem').css('margin', '2% 0 0 -23.5%').css('border-radius', '50%')
  $bottleDiv.css('height', '40px').css('width', '20px')
  $bottleDiv.on('click', () => {
    const $p = $('<p>').text('Nice! Another energy drink! This one\'s a little warm though.')

    const $newBtn = $('<button>').text('drink').off("click").on('click', () => {

      const $p2 = $('<p>').text('It still increased your health by 20%!')
      investigator.health += 10
      $('#investigator-percenthealth').empty().text(Math.round(investigator.health / 50 * 100) + '%')
      $('#investigator-health').css('width', investigator.health / 50 * 346 + 'px')

      const $newBtn2 = $('<button>').text('close').off("click").on('click', () => {
        $('#dialogue').empty().hide()
        $bottleDiv.off("click").css('cursor', 'default')
      })
      $p2.append($newBtn2)
      $('#dialogue').empty().append($p2).show()
    })
    $p.append($newBtn)
    $('#dialogue').empty().append($p).show()
  })
  $('.bedroom').append($treeDiv).append($boxDiv).append($bottleDiv)
}
