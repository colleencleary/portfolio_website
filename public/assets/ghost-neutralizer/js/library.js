const createLibrary = () => {
  //create array of functions to have correct order of dialogue no matter what is clicked
  let part = 0
  const storyline = [() => {
      const $p = $('<p>').text('Looks like someone is trying to be a paranormal investigator. This book is the Paranormal Investigator\'s Handbook -- you can buy it on Amazon for $3....')
      part++

      $('#nextButton').text('close').off("click").on('click', () => {
        $('#dialogue').hide()
      })
      $p.append($('#nextButton'))
      $('#dialogue').empty().append($p).css('display', 'flex')
    },
    () => {
      const $p = $('<p>').text('How to Clear Your Home of Ghosts & Spirits. This one looks a little more helpful:')
      $p.append($('<p>').text('\"Haunted objects come in 2 general versions:\n1. They absorb the energy of their previous owner\n2. They’re cursed by a magical ritual.'))
      $p.append($('<p>').text('Haunted objects can be anything. The most common possessed possessions include: Dolls, Jewelry, Antique bed frames and headboards, Paintings (especially self portraits), Mirrors, Clothing (especially gowns), Chairs\"'))
      part++

      $('#nextButton').text('close').off("click").on('click', () => {
        $('#dialogue').hide()
      })
      $p.append($('#nextButton'))
      $('#dialogue').empty().append($p).css('display', 'flex')
    },
    () => {
      const $p = $('<p>').text('Haunted Object Dormancy and Activity. \"Many objects remain dormant until there’s a change in its environment. Usually, that means a new owner takes it to a new home, or you move into someone’s home. That change in energy can activate the object.\"')
      part++

      $('#nextButton').text('close').off("click").on('click', () => {
        $('#dialogue').hide()
      })
      $p.append($('#nextButton'))
      $('#dialogue').empty().append($p).css('display', 'flex')
    },
    () => {
      const $p = $('<p>').text('Haunted Object Solutions. \"There are 5 ways to break the bond with the haunted object: Spiritual cleansing of the object and home, Cleanse the object with salt, Return it to its original place, Bury it in a graveyard, Burn it\"')
      $p.append($('<p>').text('Awesome! This is exactly what we needed. To get rid of the ghost, we\'re going to need to find the object the ghost is haunting and get rid of it.'))


      $('#nextButton').text('close').off("click").on('click', () => {
        $('#dialogue').hide()
        ghost.createGhost('.library')
      })
      $p.append($('#nextButton'))
      $('#dialogue').empty().append($p).css('display', 'flex')
    }
  ]


  $('#nextButton').off('click')

  // place clickable, transparent divs over background items to develop storyline
  const $shelfDiv = $('<div>').addClass('investigateItem').css('margin', '-10% 0 0 -37%')
  $shelfDiv.css('height', '100px').css('width', '40px')
  $shelfDiv.on('click', () => {
    storyline[part]()
    $shelfDiv.off("click").css('cursor', 'default')
  })

  const $deskDiv = $('<div>').addClass('investigateItem').css('margin', '8% 0 0 -5%')
  $deskDiv.css('height', '50px').css('width', '40px').css('transform', 'rotate(20deg) skewX(-45deg)')
  $deskDiv.on('click', () => {
    storyline[part]()
    $deskDiv.off("click").css('cursor', 'default')
  })

  const $glassCaseDiv = $('<div>').addClass('investigateItem').css('margin', '15% 0 0 30%')
  $glassCaseDiv.css('height', '45px').css('width', '80px')
  $glassCaseDiv.on('click', () => {
    storyline[part]()
    $glassCaseDiv.off("click")
    $glassCaseDiv.css('cursor', 'default')
  })
  const $bookCaseDiv = $('<div>').addClass('investigateItem').css('margin', '-5% 0 0 10%')
  $bookCaseDiv.css('height', '60px').css('width', '30px')
  $bookCaseDiv.on('click', () => {
    storyline[part]()
    $bookCaseDiv.off("click").css('cursor', 'default')
  })

  $('.library').append($shelfDiv).append($deskDiv).append($glassCaseDiv).append($bookCaseDiv)
}
