// for first pass
let flag = true
const rooms = ['foyer', 'library', 'sittingRoom', 'kitchen', 'bedroom']
const functions = [createFoyer, createLibrary, createSittingRoom, createKitchen, createBedroom]
var level = 0
var $ghost = $('<img>').attr('src', 'img/ghosts/ghost1.png').addClass('ghost')

// main character stats
const investigator = {
  health: 50,
  damage: 5,
  neutralize: () => {
    ghost.health -= investigator.damage;
    // change width of opponent health bar to reflect current health
    if (ghost.health < 0) {
      ghost.health = 0;
    }
    $('#ghost-health').css('width', ghost.health / (50 / ((5 - level) * .5)) * 346 + 'px')
    $('#ghost-percenthealth').empty().text(Math.round(ghost.health / (50 / ((5 - level) * .5)) * 100) + '%')
  }
}

const ghost = {
  health: 50 / ((5 - level) * .5),
  damage: 1,
  xy_position: (room) => {
    // randomize x and y coordinates and height
    const y_coordinate = Math.random() * 350
    const x_coordinate = Math.random() * 700
    const height = Math.random() * 300 + 50 + 'px'

    // $(room).css('border', '1px solid gold')
    return [y_coordinate, x_coordinate, height]
  },
  createGhost: (room) => {

    // set up ghost img for point and click fighting
    $ghost.css('margin-top', '30%')
    $(room).prepend($ghost.fadeIn(3000))
    $ghost.addClass('animation')
    // make health bars visible
    $(room).prepend($('.contain-healthbars').css('display', 'inline-flex'))
    $('.health-container').eq(1).show()

    $('#ghost-health').css('width', (ghost.health / (50 / ((5 - level) * .5))) * 346 + 'px')
    $('#ghost-percenthealth').empty().show().text(Math.round(ghost.health / (50 / ((5 - level) * .5)) * 100) + '%')
    $('#investigator-percenthealth').empty().text(Math.round(investigator.health / 50 * 100) + '%')
    // make weapon visible to player
    $(room).prepend($('#protonPack').show())
    $('.health-container').css('display', 'flex')
    $ghost.addClass('animation')
    // if first pass, call firstAttack function to introduce weapon to player
    if (flag == true) {
      ghost.firstAttack(room)
    } else {
      ghost.attack(room);
    }
  },
  attack: (room) => {
    //
    $ghost.off('click').on('click', investigator.neutralize).fadeIn(2000).addClass('animation')

    var location = ghost.xy_position(room)
    var speed = Math.random() * 3000 + (1000 / (level + 2)) * .5
    console.log(speed);
    console.log(ghost.damage);

    // if (location[2] >= 150) {
    //   $ghost.attr('src', 'img/ghosts/ghost4.png')
    // } else {
    //   $ghost.attr('src', 'img/ghosts/ghost3.png')
    // }

    $ghost.animate({
      top: location[0],
      left: location[1],
      height: location[2]
    }, speed, () => {

      if (ghost.health <= 0) {
        if (room == '.bedroom') {
          endScreen()
        } else {
          nextLevelScreen()
        }
        // $ghost.off('click')
        $ghost.removeClass('animation').fadeOut()
        $('#protonPack').hide()
        $('.health-container').eq(1).hide()
        // reset ghost health and increment damage for next level
        ghost.damage++;
        level++
        ghost.health = 50 / ((5 - level) * .5);
        return;
      }
      if (investigator.health <= 0) {
        $ghost.off('click')
        $ghost.removeClass('animation')
        loseScreen()
        return;
      }

      ghost.attack(room);
      $ghost.removeClass('animation').hide().css('margin-top', '')

      investigator.health -= ghost.damage;
      if (investigator.health < 0) {
        investigator.health = 0;
      }
      // change width of health bar to reflect current health
      $('#investigator-percenthealth').empty().text(Math.round(investigator.health / 50 * 100) + '%')
      $('#investigator-health').css('width', investigator.health / 50 * 346 + 'px')
    });


  },
  firstAttack: (room) => {
    // intro to ghost and weapon
    const $p = $('<p>').text('WHOAAAAAA!!! A GHOST!')
    $p.append($('<p>').text('Good thing you came prepared! Use your cursor to direct the proton pack at the ghost.'))
    $('#nextButton').text('close').off("click")
    $('#nextButton').on('click', () => {
      $('#dialogue').hide()
      // $ghost.css('margin-top', '')
      ghost.attack(room)
      flag = false;
      $('#nextButton').off("click")
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).css('display', 'flex')
  }
}

const nextLevelScreen = () => {
  const $p = $('<p>').text('Nice job!\nKeep checking out the place to see if you can get rid of it for good.')

  $('#nextButton').text('next room').off("click").on('click', () => {
    $('#dialogue').hide()
    explorenextroom()
  })
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p).css('display', 'flex')
}
const loseScreen = () => {
  const $p = $('<p>').text('Oh no! The ghost got you!\nTake a break to get your nerves back before continuing the investigation')

  $('#nextButton').text('restart').off("click").on('click', () => {
    location.reload()
  })
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p).css('display', 'flex')
}

const endScreen = () => {
  $('.' + rooms[level - 1]).fadeOut(3000)
  const $p = $('<p>').text('Congrats! It was a long night, but you burned the haunted glasses, got rid of the ghost, and got paid a bunch of money to do it! Not bad for a night\'s work')

  const $newBtn = $('<button>').text('do it again!').off("click").on('click', () => {
    location.reload()
  })
  $p.append($newBtn)
  $('#dialogue').empty().append($p).css('display', 'flex')
  $('.end').append($('#dialogue').show()).fadeIn(3000).css('display', 'flex')
}

const explorenextroom = () => {
  $('.' + rooms[level - 1]).fadeOut(3000)
  const $p = $('<p>').text('You made it to the ' + rooms[level] + '!')

  if (rooms[level] == 'library') {
    $p.append($('<p>').text('I bet you could learn something in here.'))
  }
  if (rooms[level] == 'sittingRoom') {
    $p.append($('<p>').text('Now that you\'ve got a clue for getting rid of the ghost, try to locate the object it\'s connected to. Inspect the room for more clues.'))
  }
  if (rooms[level] == 'kitchen') {
    $p.append($('<p>').text('Man, that ghost seemed really upset that you found that key. You must be on the right track.'))
    $('.kitchen').prepend($('<img>').attr('src', 'img/key.png').attr('id', 'key'))
  }
  if (rooms[level] == 'bedroom') {
    $p.append($('<p>').text('This part of the house looks much worse off than the other rooms we\'ve seen.'))
    $('.kitchen').prepend($('<img>').attr('src', 'img/key.png').attr('id', 'key'))
  }

  $('#nextButton').text('continue')
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p)
  $('#nextButton').off('click').on('click', () => {
    $('#dialogue').fadeOut(2000)
    functions[level]();
  })
  $('.' + rooms[level]).append($('#dialogue').show()).fadeIn(3000).css('display', 'flex').prepend($('.contain-healthbars').css('display', 'inline-flex'))
}

const enterHouse = () => {
  $('.main').fadeOut(3000)
  const $p = $('<p>').text('Use your mouse to take a look around and see if you can find any evidence to back up Mr. Smith\'s claims. Hint: look for the \'?\'')

  $('#nextButton').text('begin your investigation')
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p)
  $('#nextButton').off('click').on('click', exploreFoyer)
  $('.foyer').fadeIn(3000).css('display', 'flex').append($('#dialogue'))
}

const continueIntro = () => {

  const $p = $('<p>').text('As Mr. Smith continued the work on his own, he started to notice some weird things happening in the mansion.')
  $p.append($('<p>').text('It started with cold spots, then he began hearing whispers, and soon enough he was dodging objects thrown in his direction while alone in the mansion. Mr. Smith has hired you to figure out what\'s been going on.'))
  $p.append($('<p>').text('Explore the mansion and see if you can track down the source of Mr. Smith\'s haunting!'))

  $('#nextButton').text('take the case')
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p)
  $('#nextButton').off('click').on('click', enterHouse)
}

const startGame = () => {
  $('#start').hide()
  $('h1').attr('id', 'mini-header')
  // ('#changeRoom').show()
  $('.main').css('display', 'flex')
  $('#nextButton').off('click').on('click', continueIntro)
}

$(() => {
  $('#startButton').on('click', startGame)

})
